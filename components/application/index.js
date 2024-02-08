var application = (function(){

	var self = new nModule();

	var essenses = {};

	var Essense = function(p){

		var primary = deep(p, 'history');

		var el, ed, application, appdata;

		var actions = {
			gotohome : function(){
				self.app.nav.api.load({
					open : true,
					href : 'home',
					history : true,
				})
			},
			openinfo : function(){
				app.nav.api.load({
                    open : true,
                    id : 'applicationmeta',
                    inWnd : true,

                    essenseData : {
                        application : application.manifest.id,

						onremove : function(){
							actions.gotohome()
						}
                    }
                })
			}
		}

		var events = {
			pageevents : function(p){
				p.el.find('.settings .icon').on('click', function(){
					renders.menu($(this))
				})

				var chatel = p.el.find('.chatDoubleRow')

				chatel.on('click', events.chats.click)
				events.chats.init(chatel)
			},

			loaded : function(p){
				if(!application) return

				if (p.application == application.manifest.id){
					el.c.find('.iframewrapper').addClass('loaded')

					var pid = parameters().pid;

					if (pid) {
						self.app.apps.emit('changeroute', hexDecode(pid), p.application)
					}
				}

				if (el.c)
					el.c.find('.captionRow').addClass('notactive')
			},

			historychange : function(p) {
				if(!application) return

				if (p.application == application.manifest.id){
					self.app.nav.api.history.addRemoveParameters([], {
						pid: hexEncode(p.data?.data?.path)
					}, {
						replaceState: true
					})
				}
			},

			chats : {
				click : function(){

					var show = deep(self, 'app.platform.matrixchat.core.apptochat')

					if (show) {
						self.app.mobile.vibration.small()
						show()
					}

				},

				init : function(el){

					var setH = function(c){
						if(c){
							el.addClass('amountHave')
						}else{
							el.removeClass('amountHave')
						}

						el.find('.amount').html(c)
					}

					self.app.platform.matrixchat.clbks.ALL_NOTIFICATIONS_COUNT.application = function(count){
						setH(count)
					}

					setH(self.app.platform.matrixchat.getNotificationsCount())
				},

			},
		}

		var renders = {

			menu : function(el){

				console.log("metmenu el", el)

				var d = {application}

				self.fastTemplate('metmenu', (rendered, template) => {

					self.app.platform.api.tooltip(el, function(){

						return template(d);

					}, function(el, f, close){

						el.find('.settings').on('click', function(){
							actions.openinfo()

							close()
						})

						el.find('.close').on('click', function(){
							actions.gotohome()

							close()
						})

					})

				}, d)
		  
				
			},

			error : function(error, clbk){

				self.shell({

					name :  'error',
					el :   el.c,
					data : {
						application,
						error
					},

				}, function(p){

					events.pageevents(p)
					
					if (clbk)
						clbk();
				})
			},
			frame : function(html, clbk){

				/// unsafe, no use

				/*var blb = new Blob([html], {type: "text/html"});

				var src = URL.createObjectURL(blb)*/

				self.shell({

					name :  'frame',
					el :   el.c,

					data : {
						application
					},

				}, function(p){

					//iframeElem.contentDocument.documentElement.appendChild(m);

					var frame = p.el.find('iframe')[0]

					frame.contentWindow.document.open();
					frame.contentWindow.document.write(html);
					frame.contentWindow.document.close();

					events.pageevents(p)

					if (clbk)
						clbk();
				})
			},
			frameremote : function(clbk){

				var src = application.manifest.scope + '/' + (application.manifest.start || '')

				if(window.testpocketnet){
					src = src + '?testnetwork=true'
				}

				self.shell({

					name :  'frameremote',
					el :   el.c,

					data : {
						application,
						src 
					},

				}, function(p){

					events.pageevents(p)

					if (clbk)
						clbk();
				})
			}
		}

		var state = {
			save : function(){

			},
			load : function(){
				
			}
		}

		var initEvents = function(){
			self.app.apps.on('loaded', events.loaded)
			self.app.apps.on('historychange', events.historychange)
		}

		var make = function(){

			if(!application || !appdata){
				renders.error('notexist')
				return
			}

			renders.frameremote()

			/*if (application.develop && !application.production){
				renders.frameremote()
			}
			else{

				self.app.apps.get.output(application.manifest.id).then((html) => {

					renders.frame(html)

				}).catch(e => {
					console.error(e)
					renders.error(e)
				})
				
			}*/

		}

		return {
			primary : primary,

			parametersHandler : function() {
				var
					id = parameters().id,
					pid = parameters().pid;

					if (id && application.manifest.id !== id) {
						this.destroy();
						this.init();
					} else if (pid) {
						self.app.apps.emit('changeroute', hexDecode(pid), id)
					}
			},

			getdata : function(clbk, p){
				
				window.requestAnimationFrame(() => {
					self.app.el.html.addClass('allcontent_application')
					self.app.mobile.reload.destroyparallax()
				})

				var id = parameters().id;

				console.log('self.app.apps.get.application(id)', self.app.apps.get.application(id))

				self.app.apps.get.application(id).then((f) => {

					if (f){
						application = f.application
						appdata = f.appdata
					}
					
	
					ed = p.settings.essenseData
	
					var data = {
						ed
					};
	
					clbk(data);

				}).catch(e => {

					ed = p.settings.essenseData

					var data = {
						ed
					};
	
					clbk(data);

					/*console.error(e)

					setTimeout(() => {

						self.app.nav.api.load({
							open : true,
							href : 'page404',
							history : true,
							replaceState : true,
							fade : self.app.el.content
						})

					}, 200)*/
				})

			},

			destroy : function(){
				ed = {}
				el = {};

				window.requestAnimationFrame(() => {
					self.app.el.html.removeClass('allcontent_application')
					self.app.mobile.reload.initparallax()
				})

				self.app.apps.off('loaded', events.loaded)
				self.app.apps.off('historychange', events.historychange)

				delete self.app.platform.matrixchat.clbks.ALL_NOTIFICATIONS_COUNT.application

			},
			
			init : function(p){

				state.load();

				el = {};
				el.c = p.el.find('#' + self.map.id);

				initEvents();

				make()



				p.clbk(null, p);

			
			}
		}
	};



	self.run = function(p){

		var essense = self.addEssense(essenses, Essense, p);

		self.init(essense, p);

	};

	self.stop = function(){

		_.each(essenses, function(essense){

			window.requestAnimationFrame(() => {
				essense.destroy();
			})

		})

	}

	return self;
})();


if(typeof module != "undefined")
{
	module.exports = application;
}
else{

	app.modules.application = {};
	app.modules.application.module = application;

}