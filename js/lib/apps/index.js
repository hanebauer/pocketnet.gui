var appsError = function(e){

    var error = new Error(e)

    if (e == 'broken:permissions') 
        error.tip = 'example: ["userinfo", "notifications", "messaging", "payment", "sign", "camera", "gallery"]'

    return error
}

var parseManifest = function(json){
    var data = {}
    var result = {}

    try{
        data = JSON.parse(json)
    }
    catch(e){
        throw appsError('broken:manifest')
    }

    result.id = data.id.replace(/[^a-z0-9\.]/g, '')
    result.name = superXSS(data.name.replace(/[^\p{L}\p{N}\p{Z}]/gu, ''))
    result.version = numfromreleasestring(data.version)
    result.versiontxt = superXSS(data.version)
    result.descriptions = {}

    _.each(data.descriptions, (description, l) => {
        result.descriptions[l] = superXSS(description || "").substr(0, 2000)
    })

    result.author = data.author
    result.develop = data.develop == false ? false : true
    result.scope = data.scope
    result.permissions = _.map(data.permissions || [], (p) => {return p.replace(/[^a-z0-9\.]/g, '')})


    var brokenPermissions = _.find(result.permissions, (p) => {!p})
    if (brokenPermissions) throw appsError('broken:permissions')

    if(!result.id) throw appsError('missing:id')
    if(!result.name) throw appsError('missing:name')
    if(!result.version) throw appsError('missing:version')
    if(!result.descriptions['en']) throw appsError('missing:description:en')
    if(!result.scope) throw appsError('missing:scope')

    

    try{
        bitcoin.address.fromBase58Check(result.author)
    }catch(e){
        throw appsError('broken:author')
    }
    
    return result
}

var importFile = function(application, path){
    return simpleRequest(application.path + '/' + path, path)
}

var importFileAsBase64 = function(application, path){
    return fetchLocalAppCopy(application.path + '/' + path, path).then(d => {
        return getBase64(d.data)
    })
}

var importIcon = function(application){
    return importFileAsBase64(application, 'b_icon.png').then((png) => {
        return Promise.resolve(png)
    }).catch(() => {
        return Promise.reject(appsError('import:icon'))
    })
}

var importManifest = function(application){

    return importFile(application, 'b_manifest.json').then((manifest) => {

        try{
            manifest = parseManifest(manifest)
        }
        catch(e){
            return Promise.reject(e)
        }

        if(manifest.id != application.id) return Promise.reject(appsError('discrepancy:id'))
        if(manifest.develop != application.develop) return Promise.reject(appsError('discrepancy:develop'))
        
        if(manifest.version < application.version) {
            return Promise.reject(appsError('version'))
        }

        if(manifest.version > application.version) {
            return Promise.reject(appsError('version'))
        }


        if (application.develop) {
            manifest.scope = application.path
        }
        else
            manifest.scope = 'https://' + manifest.scope

        return Promise.resolve(manifest)
        
    }).catch((e) => {
        console.error(e)

        return Promise.reject(appsError('import:manifest'))
    })
}

var validateParameters = function(data, parameters){
    var e = _.find(parameters, (p) => {
        if(!data[p]) return true
    })

    if(!e) return null

    return appsError('parameters:missing:' + e)
}

var BastyonApps = function(app){
    var self = this
    var installed = {}
    var installing = {}
    var downloading = {}
    var localdata = {}
    var windows = {}
    var clbks = {}
    var allresources = {}
    var getresources = {}

    var key = app.user.address.value || ''

    self.info = function(){
        return {
            permissions,
            actions,
            emitters,
            events
        }
    }

    var permissions = {
        'account' : {
            name : 'permissions_name_account',
            description : 'permissions_descriptions_account',
            level : 5,

            canrequest : function(){
                return app.user.address.value ? true : false
            }
        },

        'sign' : {
            name : 'permissions_name_sign',
            description : 'permissions_descriptions_sign',
            level : 1,
            uniq : true
        },

        'messaging' : {
            name : 'permissions_name_messaging',
            description : 'permissions_descriptions_messaging',
            level : 9,
            auto : true
        },

        'mobilecamera' : {
            name : 'permissions_name_mobilecamera',
            description : 'permissions_descriptions_mobilecamera',
            level : 9,
            auto : true
        },

        'payment' : {
            name : 'permissions_name_payment',
            description : 'permissions_descriptions_payment',
            level : 2,
            uniq : true
        }
    }

    var actions = {
        opensettings : {
            parameters : [],

            action : function({data, application}){

                app.nav.api.load({
                    open : true,
                    id : 'applicationmeta',
                    inWnd : true,

                    essenseData : {
                        application : application.manifest.id
                    }
                })

                return Promise.resolve('application:settings:opened')
            }
        },
        rpc : {
            parameters : ['method', 'parameters'],
            action : function({data, application}){

                //// TODO CHECK ELECTRON NODE SAFE
                return app.api.rpc(data.method, data.parameters)
            }
        },

        account : {
            permissions : ['account'],
            action : function({data, application}){
                return Promise.resolve({
                    address : app.user.address.value,
                    signature : app.user.signature(application.manifest.id, 1280)
                })
            }
        },

        balance : {
            permissions : ['account'],
            action : function(){
                var account = self.platform.actions.getCurrentAccount()

                if (account){
                    var balance = account.actualBalance([account.address])
                    return Promise.resolve(balance)
                }
                else{
                    return Promise.resolve({})
                }
            }
        },

        sign : {
            permissions : ['sign'],
            action : function({data, application}){
                return Promise.reject(appsError('todo:action:sign'))
            }
        },

        payment : {
            parameters : ['recievers', 'feemode'],
            permissions : ['account', 'payment'],
            action : function({data, application}){

                var source = [app.user.address.value];

                var transaction = new Transaction()
				
					transaction.source.set(source)
					transaction.reciever.set(data.recievers)
					transaction.feemode.set(data.feemode)

                if (data.message)
					transaction.message.set(data.message)

                return makeAction(transaction, application)

            }
        },

        getaction : {
            parameters : ['id'],
            action : function({data, application}){
                var action = app.platform.actions.getActionById(data.id)

                if(!action){
                    return Promise.resolve(null)
                }

                return action.export()
            }
        },

        alert : {
            permissions : ['messaging'],
            parameters : ['message'],

            action : function({data, application}){

                var message = superXSS(data.message)

                if(!message){
                    return Promise.reject(appsError('message:empty'))
                }

                sitemessage(message)

                return Promise.resolve()
             
            }
        },

        requestPermissions : {
            parameters : ['permissions'],
            action : function({data, application}){

                if(!data.permissions.length) return Promise.reject(appsError('permissions:empty'))

                var failedError = ''
                var permissionFailed = _.find(data.permissions, (permission) => {
                    if(!permissions[permission]) {
                        failedError = 'notexist'
                        return true
                    }

                    if (permissions[permission].once){
                        failedError = 'uniq'
                        return true
                    }
                })

                if(permissionFailed){
                    return Promise.reject(appsError('permissions:' + failedError + ':' + permissionFailed))
                }

                return requestPermissions(application, data.permissions)
            }
        },

        mobile : {
            camera : {
                permissions : ['mobilecamera'],
                parameters : [],
                action : function({data, application}){

                    if(!app.mobile.supportimagegallery()){
                        return Promise.reject(appsError('mobile:camera:notsupported'))
                    }

                    return new Promise((resolve, reject) => {

                        var images = []

                        app.platform.ui.uploadImage({
                            action : (image) => {
                                images.push({
                                    image : image.base64
                                })
                            },
                            onSuccess : () => {
                                return resolve({images})
                            },

                            onCancel : function(){
                                return reject(appsError('mobile:camera:cancel'))
                            }
                        })

                    })

                    
                    
                }
            }
        },

        appinfo : {
            parameters : [],
            action : function({data, application}){
                return Promise.resolve({
                    pkoin : !app.pkoindisable,
                    device : typeof _Electron != 'undefined' ? 'application_electron' : (window.cordova ? (isios() ? 'application_ios' : 'application_android') : 'browser'),
                    version : window.packageversion,
                    production : !window.testpocketnet,
                    locale : app.localization.key,
                    theme : app.platform.sdk.theme.all[app.platform.sdk.theme.current],
                    margintop : document.documentElement.style.getPropertyValue('--app-margin-top') || '0px'
                })
            }
        }

    }

    var makeAction = function(data, application){
        return app.platform.actions.addActionAndSendIfCan(data, null, null, {
            application : application.manifest.id
        }).then(action => {

            return Promise.resolve(action.export())

        }).catch(e => {

            Promise.reject(appsError(e))

        })
    }

    var emitters = {
        block : {
        },
        state : {

        },
        action : {

        },
        balance : {
            permissions : ['account']
        },
        test : {

        },
        locale : {},
        theme : {}
    }

    var events = {
        popstate : function(application, data, source){
            var value = hexEncode(application.manifest.id + ':' + data.value)

            trigger('popstate', {

                application : application.manifest.id,
                data : {
                    value : value,
                    encoded : hexEncode(data.value)
                }
                
            }, source)
        },

        loaded : function(application, data, source){
            trigger('loaded', {
                application : application.manifest.id,
                data
            }, source)
        }
    }

    var trigger = function(key, data, source){
        _.each(clbks[key] || [], (f) => {
            f(data, source)
        })
    }

    var listening = {
        
    }

    var appfiles = [
        {
            name : 'b_manifest.json',
            id : "manifest",
            type : "application/json",
            importer : importManifest,
            cache : true
        },

        {
            name : 'b_icon.png',
            id : "icon",
            type : 'image/png',
            importer : importIcon,
            cache : true
        },
        
    ]

    var registerLocal = function(application){
        if(!localdata[application.id]) {

            localdata[application.id] = {
                permissions : [],
                data : {},
                cached : {}
            }

            savelocaldata()
        }
            
    }

    var download = function(application){

        var key = application.manifest.id + '+' + application.manifest.version

        if(!downloading[key]) {
            downloading[key] = importFile(application, 'output.html').then((html) => {

                /// to indexedDB

                return Promise.resolve(html)

            }).finally(() => {
                delete downloading[key]
            })
        }

        return downloading[key].then(html => {

            if(!application.develop){
                //// check hash with manifest
                /// return Promise.reject('hash')
            }

            

            return html
        })
    }

    var resources = function(application, cached = {}){
        
        if (allresources[application.id]) return Promise.resolve(allresources[application.id])
        if (getresources[application.id]) return Promise.resolve(getresources[application.id])

        if (application.develop){
            application.path = application.scope ? ('https://' + application.scope) : ('https://' + application.id + '.localhost/pocketnet/apps/_develop/' + application.id)

            
        }
        else{   
            application.path = 'https://' + application.scope
        }

        var promises = []
        var result = {
            fromcache : {}
        }

        promises = promises.concat(Promise.all(_.map(appfiles, (file) => {

            return new Promise((resolve, reject) => {

                if(file.cache && cached[file.id]){
                    result[file.id] = cached[file.id]
                    result.fromcache[file.id] = true
                    resolve()
                }
                else{
                    file.importer(application).then(data => {
                        result[file.id] = data
    
                        delete result.fromcache[file.id]

                        resolve()
                    }).catch(reject)
                }
            })
            
        })))

        getresources[application.id] = Promise.all(promises).then(() => {

            allresources[application.id] = result

            return allresources[application.id]

        }).finally(() => {
            delete getresources[application.id]
        })

        return getresources[application.id]
    }

    var install = function(application, cached = {}){

        if (installed[application.id]) return Promise.resolve(installed[application.id])
        if (installing[application.id]) return installing[application.id].promise

        var result = {}

        if (application.cantdelete){
            result.cantdelete = true
        }

        if (application.production){
            result.production = true
        }
        
        if (application.develop){
            result.develop = true
        }


        installing[application.id] = {promise : resources(application, cached).then((resourses) => {
            result.path = application.path

            installed[application.id] = {result, ...resourses}

            registerLocal(application)

            return installed[application.id]

        }).finally(() => {
            delete installing[application.id]
        }), application}

        return installing[application.id]
        
    }

    var remove = function(id){

        delete localdata[id]
        delete installed[id]

        return Promise.resolve()
    }

    var savelocaldata = function(){
        var tosave = {}

        _.each(localdata, (info, id) => {

            var saving = {
                id,
                cached : {},
                permissions : info.permissions,
                data : info.data
            }

            _.each(appfiles, (file) => {
                if(file.cache){
                    saving.cached[file.id] = (installed[id] ? installed[id][file.id] : null) || info.cached[file.id] || null
                }
            })

            tosave[id] = saving
        })

        try{
            localStorage['apps_' + key] = JSON.stringify(tosave)
        }catch(e){

        }
        
    }

    var unregisterApplication = function(application){
        delete windows[application.manifest.id]
        delete listening[application.manifest.id]
    }

    var listener = function(event){

        var application = _.find(installed, (application) => {
            return application.manifest.scope.indexOf(event.origin) == 0
        })

        if(!application) return

        windows[application.manifest.id] = event.source

        var data = event.data || {}
        var promise = null

        if(!data.data) data.data = {}

        if (data.action){

            var action = deep(actions, data.action)

            if(!action){
                promise = Promise.reject(appsError('missing:action in actions'))
            }

            else{   

                promise = requestPermissions(application, action.permissions || [], data.data).then(() => {

                    var error = validateParameters(data.data, action.parameters)


                    if (error) return Promise.reject(error)

                    return action.action({
                        data : data.data,
                        application
                    })
                })

            }
            
        }

        if (data.listener){

            listening[application.manifest.id] = data.listener

            promise = Promise.resolve('registered')
            
            //Promise.reject(appsError('todo:listeners'))
        }

        if (data.event){
            if (events[data.event]){
                events[data.event](application, data, event.source)
            }
        }

        if(!promise) return

        return promise.then((result) => {

            if (data.id){

                var response = {
                    response : data.id,
                    data : result
                }

                send(response, application)
            }

        }).catch(e => {

            if (data.id){

                var response = {
                    response : data.id,
                    error : e
                }

                send(response, application)
            }
        })
    }

    var requestPermissionForm = function(application, permission, data, p = {}){


        var meta = permissions[permission]

        if (meta.canrequest && !meta.canrequest()){
            return Promise.reject(appsError('permission:request:cantrequest:' + permission))
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return app.platform.ui.requestPermission({application, meta, permission, data}, p).then((reason) => {
                    return resolve(reason)
                }).catch(reason => {
        
                    if (reason == 'error'){
                        return Promise.reject(appsError('permission:request:error:' + permission))
                    }
        
                    return reject(reason)
                })
            }, 250)
        })

        

      
    }

    var givePermission = function(application, permission){
        if(!this.clearPermission(application, permission)) return false

        appdata.permissions.push({
            id : permission,
            state : 'granted'
        })

        savelocaldata()

        return true

    }

    var clearPermission = function(application, permission){
        var meta = permissions[permission]
        var appdata = localdata[application.manifest.id]

        if (application.manifest.permissions.indexOf(permission) == -1){
            return false
        }

        if(!meta) return false

        appdata.permissions = _.filter(appdata.permissions, (_permission) => {
            return _permission.id != permission
        })

        return true
    } 

    var removePermission = function(application, permission){
        if(!this.clearPermission(application, permission)) return false

        appdata.permissions.push({
            id : permission,
            state : 'forbid'
        })

        savelocaldata()

        return true

    }

    var requestPermission = function(application, permission, data, p){

        if (application.manifest.permissions.indexOf(permission) == -1){
            return Promise.reject(appsError('permission:notexistinmanifest:' + permission))
        }

        var meta = permissions[permission]
        var appdata = localdata[application.manifest.id]

        if(!appdata) return Promise.reject(appsError('error:code:appdata'))
        if(!meta) return Promise.reject(appsError('permission:missing'))

        if(checkPermission(application, permission)) return Promise.resolve()
        if(checkPermission(application, permission, 'forbid')) return Promise.reject(appsError('permission:denied:' + permission + '/forbid'))

        
        if (meta.auto && !meta.uniq){
            appdata.permissions.push({
                id : permission,
                state : 'granted'
            })

            savelocaldata()
    
            return Promise.resolve()
        }
        

        return requestPermissionForm(application, permission, data, p).then(state => {

            if(state == 'granted'){

                if(!meta.uniq){
                    appdata.permissions.push({
                        id : permission,
                        state
                    })

                    savelocaldata()
                }
        
                return Promise.resolve()
            }

            if (state == 'once'){
                ///maybe temp array
                return Promise.resolve()
            }

            if (state == 'forbid'){
                appdata.permissions.push({
                    id : permission,
                    state
                })

                savelocaldata()
            }

            return Promise.reject(appsError('permission:denied:' + permission + '/' + state))

        })

        ////resolve

        
        
    }

    var requestPermissions = function(application, permissions, data, p){

        if(!_.isArray(permissions)) return Promise.reject(appsError('permissions:type:array'))

        return processArray(permissions, (permission) => {
            return requestPermission(application, permission, data, p)
        })
    }

    var checkPermission = function(application, permission, state = 'granted'){
        var appdata = localdata[application.manifest.id]

        if(!appdata) return false

        return _.find(appdata.permissions, (_permission) => {
            return _permission.id == permission && _permission.state == state
        }) ? true : false
    }

    var emit = function(key, data, applicationId){

        var filteredListeners = listening

        if (applicationId){

            if(!listening[applicationId]) {
                console.warn('application:notlistening:' + applicationId)
                return
            }

            filteredListeners = {}
            filteredListeners[applicationId] = listening[applicationId]
        }

        _.each(filteredListeners, (listener, id) => {
            var application = installed[id]

            if (application){

                var emitter = emitters[key]

                if(!emitter) return

                var notgranted = _.find(emitter.permissions || [], (permission) => {
                    if(!checkPermission(application, permission)){
                        return true
                    }
                })

                if (notgranted) return

                var message = {
                    listener,
                    key,
                    data
                }

                send(message, application)
            }
        })
        
    }

    var send = function(message, application){
        if(!application) return

        if(!windows[application.manifest.id]) return

        if(!windows[application.manifest.id].window) return

        windows[application.manifest.id].window.postMessage(
            message, 
            application.manifest.scope
        )
    }

    var setlocaldata = function(data){
        var newlocaldata = {}

        try{
            newlocaldata = JSON.parse(data)
        }catch(e){

        }

        var removing = []
        var adding = []

        _.each(localdata, (info, id) => {
            if(!newlocaldata[id]) removing.push(id)
        })

        _.each(newlocaldata, (info, id) => {
            if(!localdata[id]) adding.push(info)
        })

        localdata = newlocaldata

        _.each(removing, (id) => {
            remove(id)
        })

        _.each(adding, (info => {

            return

            /// getapplication by info.id
            install(/* getapplication by info.id, */ info.cached).catch(e => {

            })
        }))

        
    }

    self.destroy = function(){
        window.removeEventListener("message", listener)
    }

    self.init = function(){

        var promises = []

        if (app.developapps){

            promises.push(Promise.all(_.map(app.developapps, (application) => {
                return install({...application, develop : true, version : numfromreleasestring(application.version)})
            })))

        }

        try{
            setlocaldata(localStorage['apps_' + key])
        }catch(e){

        }

        app.platform.sdk.syncStorage.on('change', 'apps', function(e){

            if(e.newValue == e.oldValue) return

            setlocaldata(e.newValue)

        });


        return Promise.all(promises).then(() => {
            
            window.addEventListener("message", listener)

        }).catch(e => {
            console.error(e)
            return Promise.reject(e)
        })
    }

    self.get = {
        installing : function(){
            return installing
        },
        output : function(id){
            return self.get.application(id).then(({application}) => {
                return download(application)
            })
        },
        application : function(id){
            if(installed[id]){
                return Promise.resolve({
                    application : installed[id],
                    appdata : localdata[id] || {}
                })
            }

            if (installing[id]){
                return installing[id].promise.then(() => {

                    return Promise.resolve({
                        application : installed[id],
                        appdata : localdata[id] || {}
                    })

                }).catch(e => {
                    return Promise.resolve(null)
                })
            }
        },

        installed : function(){
            return installed
        },

        resourcesForApplications : function(appsmeta){

            var results = {}

            /*

                [{
                    "id" : 'demo2.pocketnet.app',
                    "version": "0.0.1",
                    "scope" : "localhost:8081",
                    "cantdelete" : true
                }]

            */

            return Promise.all(_.map(appsmeta, (appmeta) => {

                if(!appmeta) return Promise.resolve()
                if(!appmeta.scope) return Promise.resolve()
                if(!appmeta.id) return Promise.resolve()

                return resources(appmeta).then((resources) => {
                    var result = {...resources}
                        result.path = appmeta.path

                        results[appmeta.id] = {
                            application : result,
                        }
                })
            })).then(() => {
                return Promise.resolve(results)
            })
        },

        installedAndInstalling : function(){
            var result = {}

            _.each(installing, (ins, id) => {
                result[id] = {
                    application : ins.application,
                    installing : true,
                    promise : ins.promise
                }
            })

            _.each(installed, (ins, id) => {
                result[id] = {
                    ...ins,
                    installed : true
                }
            })

            return result
        }
    }

    self.on = function(key, action){
        if(!clbks[key]) clbks[key] = []

        clbks[key].push(action)
    }

    self.off = function(key, action){
        if(!clbks[key]) clbks[key] = []

        clbks[key] = clbks[key].filter((a) => {
            return a != action
        })
    }

    self.emit = emit

    self.requestPermissions = requestPermissions
    self.givePermission = givePermission
    self.removePermission = removePermission
    self.clearPermission = clearPermission
    

    return self
}

if(typeof module != "undefined"){ module.exports = {BastyonApps}; } 
else { window.BastyonApps = BastyonApps; }