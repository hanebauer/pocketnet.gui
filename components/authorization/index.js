var authorization = (function(){

	var self = new nModule();

	var essenses = {};

	//var essense = null;

	var Essense = function(p){

		var primary = deep(p, 'history');

		var id = 'secondary';
		var ext = null;

		if (primary) id = 'primary';
		if (p.inWnd) id = 'window';

		//////////////////////////////

		var el = {},
			essenseData = {},
			initialParameters;

		//var codeReader = new ZXing.BrowserQRCodeReader();

		var stayH = function(){

			localStorage['stay'] = '0';
			localStorage['mnemonic'] || '';

			self.app.user.stay = 0;

		}
		
		var activeMnemonicInput
		var autocompleteWord

		var stay = new Parameter({

			type : "BOOLEAN",
			name : "stay",
			id : 'stay',
			name : self.app.localization.e('e13027'),

			_onChange : function(v){

				if(v){

					/*new dialog({
						html : self.app.localization.e('staysafe'),

						btn1text : self.app.localization.e('dyes'),
						btn2text : self.app.localization.e('dno'),

						fail : function(){
							stay.value = 0
							stay.el.removeAttr('checked')

							stayH();
						},

						class : 'yesnodialog'
					})*/

				}
				else
				{
					stayH()
				}
			}
		})

		var validation = function(m){
			return bitcoin.bip39.validateMnemonickWithLangDetection(m)
		};

		var events = {
		
			login : function(key){
				
				var mnemonicKeyArray = []
				var mnemonicInputs = el.c.find('.mnemonicItem')
				mnemonicInputs.each(function(index){
					if(mnemonicInputs[index].value.trim()){
						mnemonicKeyArray[index] = mnemonicInputs[index].value.trim()
					}else{
						mnemonicInputs[index].classList.add('errorClass')
					}
				})
				var p = {};
				var mnemonicKey = key?.trim() || trim(el.login.val()) || mnemonicKeyArray.join(' ');

				localStorage['stay'] = boolToNumber(stay.value).toString()

				self.user.stay = stay.value

				globalpreloader(true)

				self.user.signin(mnemonicKey, function(state){

					globalpreloader(false)
				
					if(!state){

						sitemessage(self.app.localization.e('e13028'))

						

						return;
					}
				
					self.app.platform.sdk.registrations.remove()

					var _p = {};

					_p.href = essenseData.successHref;

					if(!_p.href && primary)

						_p.href = function(){

							if(self.app.user.validate()){
								
								if (app.curation()){
									return 'index';
								}

								return self.app.platform.sdk.registrations.redirect || undefined
							
							}
							else
							{

								if (self.app.errors.connection()){
									return 'userpage?id=test'
								}

								else{
									return 'registration'
								}
								
							}

						}

						_p.nav = essenseData.nav || {};		


						if(typeof _p.nav.reload == 'undefined')
							_p.nav.reload = false

						_p.clbk = function(){
							topPreloader(100);

							var close = deep(initialParameters, 'container.close')

							if (close)
								close();

							

							if (essenseData.signInClbk)
								essenseData.signInClbk();
						}


					if(deep(essenseData, 'successHref') == '_this'){

						self.app.reloadModules(function(){

							if(self.app.user.validate()){
								var close = deep(initialParameters, 'container.close')

								if (close)
									close();

								if (essenseData.signInClbk)
									essenseData.signInClbk();
							}
							else
							{
								self.nav.api.loadSameThis('filluser', p)
							}

							
						});

					}
					else
					{
						setTimeout(function(){
							self.app.reload(_p);
						}, 30)
						
					}

					

				})
				

			},

			keyAutocomplete: function(){
				const autocompleteValue = el.c.find('.loginValue').val()
				if(autocompleteValue){
					const mnemonic = autocompleteValue.split(' ')
					if(mnemonic.length === 12){
						var mnemonicInputs = el.c.find('.mnemonicItem')
						mnemonicArray.forEach((item, index)=>{
							if(item){
								mnemonicInputs[index].classList.remove('errorClass')
								mnemonicInputs[index].value = item
								mnemonicInputs[index].focus()
							}
						})
					}else{
						el.c.find('#mnemonicTab').removeClass('tabItem-active')
						el.c.find('#privateKeyTab').addClass('tabItem-active')
						el.c.find('#mnemonicInput').css({'display': 'none'})
						el.c.find('.qrcode').css({'display': 'none'})
						el.c.find('.actionButtonsWrapper').css({'display': 'table-cell'})
						el.c.find('.loginValue').css({'display': 'initial'})
						el.c.find('.loginValue').trigger( "focus" )
					}
				}
			},

			addInputControle : function(){
				el.c.find('.mnemonicItem').on('keyup',function (e) {
					var currentInputId = +activeMnemonicInput.attr("id").replace('mnemonicItem','')
					if (e.code === 'ArrowRight') { 
						var nextId = currentInputId + 1
						if(e.target.value && e.target.selectionStart !== e.target.value.length){
							return
						}
						if(autocompleteWord){
							activeMnemonicInput.val(autocompleteWord)
							el.autocomplete.css({'display': 'none'})
						}
						if(nextId <= 12 ){
							el.c.find(`#mnemonicItem${nextId}`).trigger( "focus" )
						}
					} else if (e.code === 'ArrowLeft') { 
						var nextId = currentInputId - 1
						if(e.target.value && e.target.selectionStart > 0){
							return
						}
						if(nextId > 0 ){
							el.c.find(`#mnemonicItem${nextId}`).trigger( "focus" )
						}
					}
				});	
			},

			backspaceEventHandler : function(){
				el.c.find('.mnemonicItem').on('keydown',function (e) {
					if (e.code === 'Backspace'){
						if(e.target.selectionStart < 1){
							var currentInputId = +activeMnemonicInput.attr("id").replace('mnemonicItem','')
							var nextId = currentInputId - 1
							if(nextId > 0 ){
								el.c.find(`#mnemonicItem${nextId}`).trigger( "focus" )
							}
						}
					}
				})
			},

			addAutocomlete : function(){
				el.c.find('.mnemonicItem').on('input paste focus',function (e) {
						$(this).removeClass('errorClass')
						autocompleteWord = ''
						activeMnemonicInput = $(this)
						const { top, left } = e.target.getBoundingClientRect();
						const foundWord = e.target.value.length > 1 ? 
							[
								...bitcoin.bip39.wordlists.english,
								...bitcoin.bip39.wordlists.russian,
								...bitcoin.bip39.wordlists.french,
								...bitcoin.bip39.wordlists.italian,
								...bitcoin.bip39.wordlists.spanish,
								...bitcoin.bip39.wordlists.korean,
								...bitcoin.bip39.wordlists.chinese_traditional
							].find((item) => item.includes(e.target.value) 
							&& !item.includes(e.target.value, e.target.value.length)
							&& item.slice(0, e.target.value.length) === e.target.value) 
							: '' 
						autocompleteWord = foundWord || ''
						if(autocompleteWord === e.target.value){
							el.autocomplete.css({'display': 'none'})
							return
						}
						var autocompleteWordStart = autocompleteWord && autocompleteWord.slice(autocompleteWord.indexOf(e.target.value),e.target.value.length)
						var autocompleteWordEnd = autocompleteWord && autocompleteWord.slice(autocompleteWordStart.length)
			
						el.autocomplete.css({
							'position': 'absolute',
							'top' : `${top + parseInt($(this).css("padding-top")) + 1.45}px`,
							'left' : `${left + parseInt($(this).css("padding-left")) + 2}px`,
							'font-size': $(this).css("font-size"),
							'font-weight': $(this).css("font-weight"),
							'display': 'flex',
							"z-index": "99999"
						})
						el.autocompleteEnd.css({
							'color' : `#555770`,
							'opacity': '0.6'
						})
						el.autocompleteStart.css({
							'color' : `transparent`,
						})
						
						el.autocompleteStart.html(autocompleteWordStart)
						el.autocompleteEnd.html(autocompleteWordEnd)
						// if(e.target.value.length > 2 && !autocompleteWord && $(this).attr("id") === 'mnemonicItem1'){
						// 	el.c.find('.loginValue').val($(this).val())
						// 	$(this).val('')
						// 	el.c.find('#mnemonicInput').css({'display': 'none'})
						// 	el.c.find('.qrcode').css({'display': 'none'})
						// 	el.c.find('.actionButtonsWrapper').css({'display': 'table-cell'})
						// 	el.c.find('.loginValue').css({'display': 'initial'})
						// 	el.c.find('.loginValue').trigger( "focus" )
						// }
				});	
			},

			validateMnemonicInput : function(){
				el.c.find('.mnemonicItem').on('keypress paste', function(e){
					// let isAllInputsFull = el.c.find('.mnemonicItem').filter(function () {
					// 	return $(this).val().trim().length === 0
					// }).length === 0;
					if(e.key === 'Enter' || e.key === ' '){
						autocompleteWord && activeMnemonicInput.val(autocompleteWord)
						el.autocomplete.css({'display': 'none'})
						var currentInputId = +activeMnemonicInput.attr("id").replace('mnemonicItem','')
						var nextId = currentInputId + 1
						if(nextId <= 12){
							el.c.find(`#mnemonicItem${nextId}`).trigger( "focus" )
							return false
						}else if(e.key === 'Enter'){
							return true
						} else if(e.key === ' '){
							return false
						} 
					} else{
						return /^\p{L}+$/u.test(e.key)
					}
				})
			},

			pasteMnemonicPhrase : function(){
				el.c.find('.mnemonicItem').on('paste', function(e){
					var mnemonicArray = e.originalEvent.clipboardData.getData('text/plain').split(' ')
					if(mnemonicArray.length > 1){
						var mnemonicInputs = el.c.find('.mnemonicItem')
						mnemonicArray.forEach((item, index)=>{
							if(item){
								mnemonicInputs[index].classList.remove('errorClass')
								mnemonicInputs[index].value = item
								mnemonicInputs[index].focus()
							}
						})
						return false
					}else{
						return true
					}	
				})
			},

			mnemonicInputBlurHandler : function(){
				el.c.find('.mnemonicItem').on('blur', function(e){
					el.autocomplete.css({'display': 'none'})
				})
			},

			checkAutocompleteValue : function(){
				el.autocompleteEnd.on('click', function(e){
					e.stopPropagation();
					activeMnemonicInput.val(autocompleteWord);
					el.autocomplete.css({'display': 'none'})
					var currentInputId = +activeMnemonicInput.attr("id").replace('mnemonicItem','')
					var nextId = currentInputId + 1
					if(nextId < 12 ){
						el.c.find(`#mnemonicItem${nextId}`).trigger( "focus" )
					}
				})
			},

			privateKeyInputHandler : function(){
				el.c.find('.loginValue').on('input', function(e){
					if(!e.target.value){
						el.c.find('.loginValue').css({'display': 'none'})
						el.c.find('.actionButtonsWrapper').css({'display': 'none'})
						el.c.find('#mnemonicInput').css({'display': 'flex'})
						el.c.find('.qrcode').css({'display': 'initial'})
						el.c.find('.mnemonicItem')[0].focus()
					} 
				})
			},

			privateKeyTabHandler : function(){
				el.c.find('#privateKeyTab').on('click', function(){
					var mnemonicInputs = el.c.find('.mnemonicItem')
					mnemonicInputs.each(function(index){
						mnemonicInputs[index].value = ''
					})
					el.c.find('#mnemonicTab').removeClass('tabItem-active')
					$(this).addClass('tabItem-active')
					el.c.find('#mnemonicInput').css({'display': 'none'})
					el.c.find('.qrcode').css({'display': 'none'})
					el.c.find('.actionButtonsWrapper').css({'display': 'table-cell'})
					el.c.find('.loginValue').css({'display': 'initial'})
					el.c.find('.loginValue').trigger( "focus" )
				})
			},

			mnemonicTabHandler : function(){
				el.c.find('#mnemonicTab').on('click', function(){
					el.c.find('.loginValue').val('')
					el.c.find('#privateKeyTab').removeClass('tabItem-active')
					$(this).addClass('tabItem-active')
					el.c.find('.loginValue').css({'display': 'none'})
					el.c.find('.actionButtonsWrapper').css({'display': 'none'})
					el.c.find('#mnemonicInput').css({'display': 'flex'})
					el.c.find('.qrcode').css({'display': 'initial'})
					el.c.find('.mnemonicItem')[0].focus()
				})
			},

			setFocus : function(){
				el.c.find('.mnemonicItem').on('click', function(e){
						if(!$(this).val().trim().length){
							let currentInputId = +$(this).attr("id").replace('mnemonicItem','') 
							while(currentInputId >= 1 && !el.c.find(`#mnemonicItem${currentInputId}`).val().trim().length){
								currentInputId--  
								el.c.find(`#mnemonicItem${currentInputId}`).trigger( "focus" )
							}
						}
				})
			},

			openQrScanner : function(){
				self.nav.api.load({
							open : true,
							href : 'scanorimportqr',
							inWnd : true,
							history : true,
							essenseData : {
								login: events.login
							}
						})
			},

			renderFileLoader : function(_el, closetooltip){
				initUpload({
				el : _el,
	
				ext : ['txt', 'png', 'jpeg', 'jpg'],

				notexif : true,

				dropZone : el.c,

				action : function(file, clbk){
			
					if(file.ext == 'png' || file.ext == 'jpeg' || file.ext == 'jpg'){
							const html5QrCode = new window.Html5Qrcode("reader")
								html5QrCode.scanFile(file.file, false)
								.then(decodedText => {
									el.login.val(trim(decodedText))
									el.hiddenform.submit()
								})
								.catch(err => {
									self.app.Logger.error({
										err: err.text || 'scanQrFileError',
										code: 1001,
										payload: err,
									});
									self.closeContainer()
									sitemessage(self.app.localization.e('filedamaged'))
								});
							
						// grayscaleImage(file.base64, function(image){
						// 	qrscanner.q.debug = true

						// 	qrscanner.q.callback = function(data){


						// 		if(data == 'error decoding QR Code'){
						// 			sitemessage(self.app.localization.e('filedamaged'))
						// 		}
						// 		else
						// 		{
						// 			el.login.val(trim(data))

						// 			el.hiddenform.submit()
						// 		}
						// 	}

						// 	qrscanner.q.decode(image)
						// })
					}
					else
					{
						var b = file.base64.split(",")[1]

						var data = b64_to_utf8(b)

						var ds = data.split("/")
						if (ds[1]) {


							el.login.val(trim(ds[1]))

							events.login();
							
						}
						else
						{
							sitemessage(self.app.localization.e('filedamaged'))
						}
					}
					closetooltip && closetooltip()
				}
			})},

			addMobileTooltip : function(_el){
				var d = {};
					self.fastTemplate('metmenu', function(rendered, template){
						self.app.platform.api.tooltip(_el, function(){
						
							return template(d);
	
						}, function(el, n, close){

							events.renderFileLoader(el.find('.loadqr'),close)
							el.find('.loadqr').on('click', function(){
								self.app.mobile.vibration.small()

								// close()
							})
	
							el.find('.scanqr').on('click', function(){
								self.app.mobile.vibration.small()
								events.openQrScanner()

								close()
	
							})
						})
	
					}, d)
			},

			addQrHandler : function(){
				el.c.find('.qrcode').on('click', function(){
					if (isMobile() || isTablet()){
						events.addMobileTooltip($(this))
					}
					// else{
					// 	events.renderFileLoader($(this))
					// }
				})
			}
		
		}

		var initEvents = function(p){
			
			//el.enter.on('click', events.login);
			
			el.hiddenform.on('submit', function(event) {


				event.preventDefault();
				event.stopPropagation();
				events.login()

				return false
			})

	        el.toRegistration.on('click', function(){
	        	self.nav.api.loadSameThis('registration', p)
			})
			
			el.c.find('.showformh').on('click', function(){
				el.c.toggleClass('signinshow')
			})

	     

			var v = function(){
				if(!$(this).val()){
					el.c.find('.uploadFile').removeClass('hidden');
					el.c.find('.showPassword').addClass('hidden');
				}
				else{
					el.c.find('.uploadFile').addClass('hidden');
					el.c.find('.showPassword').removeClass('hidden');
				}
			}

			el.login.on('keyup', v);
			el.login.on('change', v);

		    el.login.on('blur', function(e) {
				const focusOnShowPassword = $(e.relatedTarget).is('.showPassword');
				const val = el.login.val();

				if (focusOnShowPassword) {
					/**
					 * If new focus target is ShowPassword button,
					 * returning focus to the input, so user can
					 * proceed typing.
					 */
					el.login.focus();

					return;
				}

				if (val.length) {
					return;
				}

			
			});

			el.c.find('.showPassword').on('click', (e) => {
				const btnIcon = $(e.currentTarget).find('.icon i');
				const passwordVal = el.login.val();

				if (btnIcon.is('.fa-eye')) {
					btnIcon.removeClass('fa-eye');
					btnIcon.addClass('fa-eye-slash');

					el.login.attr('type', 'text');
				} else {
					btnIcon.addClass('fa-eye');
					btnIcon.removeClass('fa-eye-slash');

					el.login.attr('type', 'password');
				}

				/**
				 * When input type is changed, the caret will be
				 * automatically moved to the start. This
				 * code returns to the end of input.
				 *
				 * Type change is async action, so giving 10ms
				 * to the DOM to get done the change.
				 */
				setTimeout(() => {
					el.login[0].setSelectionRange(passwordVal.length, passwordVal.length);
				}, 10);
			});
		}

		var renders = {
			fastfill : function(){
				self.nav.api.load({

					open : true,
					id : 'registration',
					el : el.c.find('.filluserform'),

					essenseData : {
						inauth : true,
						successHref : essenseData.successHref,

						welcomepart : function(){
							el.c.addClass('welcomepnet')
						},

						signInClbk : function(){

							var close = deep(initialParameters, 'container.close')

							if (close)
								close();

							essenseData.signInClbk()

						},

						close : function(){
							self.closeContainer()
						}
					},
					
					clbk : function(e, p){
						ext = p
					}

				})
			},
			addMnemonicInputs : function(){
				var num = 12
				var container = el.c.find("#mnemonicInput")
				for(var i = 1; i <= num; i++) {
					$(`<input autocomplete="off" id="mnemonicItem${i}" class="mnemonicItem" type="text">`).appendTo(container);
				}
			},
			addFileLoader : function(){
				if (!(isMobile() || isTablet())){
					events.renderFileLoader(el.c.find('.qrcode'))
				}
			}
		}

		var make = function(){
			var p = parameters();
	
			ParametersLive([stay], el.c)

			if (p.restore){
				events.forgotPassword();
			}

			if(essenseData.fast){
				renders.fastfill()
			}
			renders.addMnemonicInputs()
			renders.addFileLoader()
		}

		return {

			primary : primary,

			id : id,

			getdata : function(clbk, p){

				if(p.state && primary)
				{

					self.nav.api.load({
						open : true,
						href : 'index',
						history : true,
						replaceState : true
					})
					
				}
				else
				{

					stay.value = numberToBool(self.app.user.stay)

					var mnemonic = localStorage['mnemonic'] || '';

					/*if(!stay.value) */mnemonic = ''

					var data = {
						stay : stay,
						mnemonic : mnemonic,
						fast : deep(p, 'settings.essenseData.fast') || false
					};
					
					clbk(data);
					
				}

			},

			destroy : function(){
				$("#autocomplete").remove()

				if(el.c) el.c.empty()

				el = {};

				if (ext) {
					ext.destroy(); 
					ext = null;
				}
			},
			
		

			init : function(p){


				$("body").prepend( "<span id='autocomplete'><span id='autocompleteStart'></span><span id='autocompleteEnd'></span></span>" );


				el = {};
				el.c = p.el.find('#' + self.map.id)
				el.login = el.c.find(".loginValue");
				el.pwd = el.c.find(".pwdValue");
				el.enter = el.c.find('.enter');
				el.toRegistration = el.c.find('.toRegistration');
				el.forgotPassword = el.c.find('.forgotPassword');
			
				el.autocompleteStart = $('#autocompleteStart')
				el.autocompleteEnd = $('#autocompleteEnd')
				el.autocomplete = $('#autocomplete')

				el.hiddenform = el.c.find('#loginform')

				essenseData = p.essenseData || {};
				initialParameters = p;

				initEvents(p);
				make();
				events.addInputControle()
				events.backspaceEventHandler()
				events.addAutocomlete()
				events.validateMnemonicInput()
				events.checkAutocompleteValue()
				events.mnemonicInputBlurHandler()
				events.pasteMnemonicPhrase()
				// events.privateKeyInputHandler()
				events.setFocus()
				events.addQrHandler()
				events.keyAutocomplete()
				events.privateKeyTabHandler()
				events.mnemonicTabHandler()
				p.clbk(null, p);

			},

			tooltip : {
				options : {
					position : 'left',
					functionPosition: function(instance, helper, position){
				        position.coord.top = 10;
				        position.coord.left += 10;

				        return position;
				    }
				},
				event : 'mouseenter'
				
			},

			wnd : {
				class : 'withoutButtons authwindow normalizedmobile maxheight'
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
	module.exports = authorization;
}
else{

	app.modules.authorization = {};
	app.modules.authorization.module = authorization;

}