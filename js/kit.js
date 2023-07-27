SubscribePrivate = function(){
	var self = this;

	self.address = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.validation = function(){
		if(!self.address.v){
			return 'address';
		}
	}

	self.serialize = function(){
		return self.address.v
	}

	self.export = function(alias){

		if(alias){
			return {
				type : self.type,
				vsaddress : self.address.v
			}
		}

		return {
			
			address : self.address.v
		}
	}

	self.import = function(p){

		if (p.address)
			self.address.v = p.address

		if (p.vsaddress)
			self.address.v =  p.vsaddress
			
	}

	self.type = 'subscribePrivate'

	return self;
}

Subscribe = function(){
	var self = this;

	self.address = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.validation = function(){
		if(!self.address.v){
			return 'address';
		}
	}

	self.serialize = function(){
		return self.address.v
	}

	self.export = function(alias){

		if(alias){
			return {
				type : self.type,
				vsaddress : self.address.v
			}
		}

		return {
			address : self.address.v
		}
	}

	self.import = function(p){

		if (p.address)
			self.address.v = p.address

		if (p.vsaddress)
			self.address.v =  p.vsaddress
			
	}

	self.type = 'subscribe'

	return self;
}

Unsubscribe = function(){
	var self = this;

	self.address = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.validation = function(){
		if(!self.address.v){
			return 'address';
		}
	}

	self.serialize = function(){
		return self.address.v
	}

	self.export = function(alias){

		if(alias){
			return {
				type : self.type,
				vsaddress : self.address.v
			}
		}

		return {
			type : self.type,
			address : self.address.v
		}
	}

	self.import = function(p){

		if (p.address)
			self.address.v = p.address

		if (p.vsaddress)
			self.address.v =  p.vsaddress
			
	}

	self.type = 'unsubscribe'

	return self;
}

Blocking = function(){
	var self = this;

	self.address = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.validation = function(){
		if(!self.address.v){
			return 'address';
		}
	}

	self.serialize = function(){
		return self.address.v
	}

	self.export = function(alias){

		if(alias){
			return {
				type : self.type,
				vsaddress : self.address.v
			}
		}

		return {
			address : self.address.v
		}
	}

	self.import = function(p){

		if (p.address)
			self.address.v = p.address

		if (p.vsaddress)
			self.address.v =  p.vsaddress
			
	}

	self.type = 'blocking'

	return self;
}

Unblocking = function(){
	var self = this;

	self.address = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.validation = function(){
		if(!self.address.v){
			return 'address';
		}
	}

	self.serialize = function(){
		return self.address.v
	}

	self.export = function(alias){

		if(alias){
			return {
				type : self.type,
				vsaddress : self.address.v
			}
		}

		return {
			address : self.address.v
		}
	}

	self.import = function(p){

		if (p.address)
			self.address.v = p.address

		if (p.vsaddress)
			self.address.v =  p.vsaddress
			
	}

	self.type = 'unblocking'

	return self;
}

Comment = function(txid){
	var self = this;

	self.postid = txid;

	self.id = ''
    self.parentid = ''
    self.answerid = ''

	self.amount = {
		set : function(_v){

			if(!_v){
				this.v = 0
			}
			else

				this.v = _v

			if (self.on.change)
				self.on.change('fees', this.v)
		},
		v : 0
	}

	self.fees = {
		set : function(_v){

			if(!_v){
				this.v = 0
			}
			else

				this.v = _v

			if (self.on.change)
				self.on.change('fees', this.v)
		},
		v : 0
	};

	self.message = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else

				this.v = _v

			if (self.on.change)
				self.on.change('message', this.v)
		},
		v : ''
	};

	self.images = {
		
		set : function(images){

			if(!images){
				this.v = []
			}

			else
			{
				if(_.isArray(images)){

					if(images.length > 10){
						return false;
					}

					this.v = images;
				}

				else{

					if(!images) return

					if(this.v.length > 9){
						return false;
					}

					this.v.push(images)
				}
			}


			if (self.on.change)
				self.on.change('images', this.v)

			return true;
		},
		remove : function(image){
			if(!image){
				this.v = []
			}
			else
			{
				removeEqual(this.v, image)
			}
		},
		get : function(){
			return _.map(this.v, function(image){
				return image
			})
		},
		v : []
	}

	self.donate = {
		set : function(donate){

			if(!donate){
				this.v = []
			}

			else
			{
				if(_.isArray(donate)){

					this.v = donate;
				}

				else{

					if(!donate) return

					this.v.push(donate)
				}
			}


			if (self.on.change)
				self.on.change('donate', this.v)

			return true;
		},
		remove : function(donate){
			if(!donate){
				this.v = []
			}
			else
			{
				removeEqual(this.v, donate)
			}
		},
		get : function(){
			return _.map(this.v, function(donate){
				return donate
			})
		},
		v : []
	};

	self.url = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else

				this.v = _v

			if (self.on.change)
				self.on.change('url', this.v)
		},
		v : ''
	};

	self.clear = function(){
		self.message.set()
		self.images.set()
		self.url.set()
		self.donate.set()
		self.fees.set()

		self.delete = false
	}

	self.on = {}
	self.off = function(e){
		delete self.on[e]
	}

	self.validation = function(){

		if(self.delete && self.id){
			return false
		}

		if(!self.images.v.length && !self.url.v && !self.message.v) {
			return 'content'
		}

		if(self.message.v && (self.message.v).length > 1000){
			return 'messagelength'
		}

		return null;
	}

	
	self.checkloaded = function(){
		var notloaded = _.find(self.images.v, function(i){
			return i.indexOf('data:image') > -1
		})

		return notloaded
	}

	self.uploadImages = function(app, clbk){


		lazyEach({
			//sync : true,
			array : self.images.v,
			action : function(p, index){

				var image = p.item;

				if (image.indexOf('data:image') > -1){

					app.imageUploader.upload({
						base64: image,
					}).then( url => {
	
						self.images.v[index] = url
	
						p.success();
	
					}).catch(err => {
	
						p.success();
	
					})

					
				}
				else
				{
					p.success();
				}

				

			},

			all : {
				success : function(){
					if (clbk)
						clbk()
				}
			}
		})
	}

	self.serialize = function(){

		var s = self.postid;

		if(!self.delete){

			s += (JSON.stringify({
				
				message : (self.message.v),
				url : (self.url.v),
				images : _.map(self.images.v, function(i){
					return (i)
				}),

			}))
			
		}
		
		s += (self.parentid || "") + (self.answerid || "")


		return s
	}

	self.export = function(extend){
		var r = {
			postid : self.postid,
			answerid : self.answerid || "",
			parentid : self.parentid || ""
		}

		if(!self.delete){
			if(extend){
				r.msgparsed = {
					message : self.message.v,
					url : self.url.v,
					images : self.images.v
				}
			}
			else{
				r.msg = JSON.stringify({
					message : (self.message.v),
					url : (self.url.v),
					images : _.map(self.images.v, function(i){
						return (i)
					}),
				})
			}
			
		}
		else{
			r.delete = self.delete
		}

		if(self.id){
			r.id = self.id
		}

		if (self.donate && self.donate.v.length){
			r.donate = self.donate.v
		}

 	
		if(extend){
			r.type = self.type
		}
	
		return r

	}

	self.import = function(v){

		self.postid = v.postid;
		self.answerid = v.answerid;
		self.parentid = v.parentid;

		if (v.msg){
			v.msgparsed = JSON.parse(v.msg)

			self.url.set(decodeURIComponent(v.msgparsed.url))
			self.message.set(decodeURIComponent(v.msgparsed.message))
			self.images.set(_.map(v.msgparsed.images, function(i){
				return decodeURIComponent(i)
			}))
		}

		if (v.msgparsed){
			self.url.set(v.msgparsed.url)
			self.message.set(v.msgparsed.message)
			self.images.set(v.msgparsed.images)
		}
		
		if (v.donate){
			self.donate.set(v.donate)
		}

		if (v.txid || v.id)
			self.id = v.txid || v.id

		if(v.delete) self.delete = v.delete
	}

	self.alias = function(){
		var comment = new pComment();
			comment.import(self.export(true))

			///TODO_REF_ACTIONS remove alias args

			comment.id = self.id
			comment.postid = self.postid

		if(self.delete){
			comment.deleted = true
		}

		return comment;
	}

	self.typeop = function(){

		if(self.id){
			if(self.delete){
				return 'commentDelete'
			}
			else{
				return 'commentEdit'
			}

			
		}

		return self.type
	}

	self.ustate = 'comment'
	self.type = 'comment'

	return self;
}

СScore = function(){
	var self = this;

	self.comment = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.address = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.value = {
		set : function(_v){
			this.v = _v
		},
		v : 0
	};

	self.ustate = 'comment_score'

	self.opreturn = function(){

		return self.address.v + " " + self.value.v
	}

	self.validation = function(){
		if(!self.comment.v || !self.address.v){
			return 'comment'
		}
	}

	self.serialize = function(){

		return self.comment.v + self.value.v
	}

	self.export = function(alias){
		if(!alias){
			return {
				commentid : self.comment.v,
				value : self.value.v.toString()
			}
		}
		else{
			return {
				type : self.type,
				commentid : self.comment.v,
				value : self.value.v.toString(),
				vsaddress : self.address.v
			}
		}
		
	}

	self.import = function(p){

		if(p.commentid)
			self.comment.v = p.commentid

		if (p.value)
			self.value.v = Number(p.value)

		if (p.vsaddress)
			self.address.v = p.vsaddress

	}

	self.type = 'cScore'

	return self;
}

UpvoteShare = function(){
	var self = this;

	self.share = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.address = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.value = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.ustate = 'score'

	self.opreturn = function(){

		return self.address.v + " " + self.value.v
	}

	self.validation = function(){
		if(!self.share.v || !self.value.v){
			return 'share'
		}
	}

	self.serialize = function(){

		return self.share.v + self.value.v
	}

	self.export = function(alias){

		if(!alias){
			return {
				share : self.share.v,
				value : self.value.v
			}
		}
		else{
			return {
				type : self.type,
				share : self.share.v,
				value : self.value.v,
				vsaddress : self.address.v
			}
		}

	}

	self.import = function(p){

		if (p.share)
			self.share.v =  p.share

		if (p.value)
			self.value.v = p.value

		if (p.vsaddress)
			self.address.v = p.vsaddress

	}

	self.type = 'upvoteShare'

	return self;
}

ComplainShare = function(){
	var self = this;

	self.share = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.reason = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};



	self.validation = function(){
		if(!self.share.v){
			return 'share'
		}

		if(!self.reason.v){
			return 'reason'
		}
	}

	self.serialize = function(){
		return self.share.v + '_' + self.reason.v
	}

	self.export = function(alias){

		if(alias){
			return {
				type : self.type,
				share : self.share.v,
				reason : self.reason.v
			}
			
		}
		else{
			return {
				share : self.share.v,
				reason : self.reason.v
			}
		}
		
		
	}

	self.import = function(p){

		if (p.share)
			self.share.v =  p.share

		if (p.reason)
			self.reason.v = p.reason

	}

	self.type = 'complainShare'

	return self;
}

ModFlag = function(){
	var self = this;

	self.s2 = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.s3 = {
		set: function(_v){
			this.v = _v
		},
		v : ''
	};

	self.i1 = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	

	self.validation = function(){

		if(!self.s3.v){
			return 'address'
		}

		if(!self.i1.v){
			return 'reason'
		}
	}

	self.serialize = function(){
		// return self.share.v + '_' + self.reason.v
		return self.s2.v + self.s3.v + self.i1.v
	}

	self.export = function(alias){

		if(alias){
			return {
				type : self.type,
				s2 : self.s2.v,
				s3 : self.s3.v,
				i1 : self.i1.v
			}
		}
		else{	
			return {
				s2 : self.s2.v,
				s3 : self.s3.v,
				i1 : self.i1.v
			}
		}


		
	}

	self.import = function(p){

		if (p.s2)
			self.s2.v = p.s2;

		if (p.s3)
			self.s3.v = p.s3;

		if (p.i1)
			self.i1.v = p.i1;
			
	}

	self.type = 'modFlag'
	return self;
}

ContentBoost = function(txid){
	var self = this;
	
	self.txid = txid;

	self.amount = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.ustate = 'contentBoost'

	self.validation = function(){

		if (!self.amount.v){
			return 'amount';
		}

		return false;
	}


	self.serialize = function(){

		return (self.txid)
	}

	self.export = function(alias){

		if(!alias){
			return {
				content : self.txid
			}
		}
		else{
			return {
				type : self.type,
				content : self.txid
			}
		}

	}

	self.import = function(p){

		if (p.amount && p.txid)
			self.amount.v = p.amount
			self.txid = p.txid;


	}


	self.type = 'contentBoost'


	self.typeop = function(){

        return self.type;

	}

	return self;
}

Share = function(lang){

	var self = this;

	self.clear = function(){
		
		self.message.set()
		self.images.set()
		self.tags.set()
		self.url.set()
		self.caption.set()
		self.repost.set()
		self.language.set(lang)
		self.aliasid = ""

		_.each(self.settings, function(s, k){
			self.settings[k] = null;
		})
	}

	self.repost = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}

			_.each(self.on.change || {}, function(f){
				f('repost', this.v)
			})
			

		},
		v : '',

		drag : false
	};

	self.caption = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}

			_.each(self.on.change || {}, function(f){
				f('caption', this.v)
			})
			

		},
		v : '',

		drag : false
	};
	
	self.message = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}
			
			_.each(self.on.change || {}, function(f){
				f('message', this.v)
			})

		},
		v : '',

		drag : true
	};

	self.language = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}
			
			_.each(self.on.change || {}, function(f){
				f('language', this.v)
			})

		},
		get : function(){
			return this.v
		},
		v : ''
	};

	self.poll = {
		set : function(_v){

			if(!_v){
				this.v = {}
			}
			else
			{
				this.v = _v
			}
			
			_.each(self.on.change || {}, function(f){
				f('poll', this.v)
			})

		},
		remove : function(poll){
			if(!poll){
				this.v = {}
			}
			else
			{
				removeEqual(this.v, poll)
			}

			_.each(self.on.change || {}, function(f){
				f('poll', this.v)
			})
		},
		get : function(){
			return this.v;
		},
		v : {},
		drag : true
	};

	self.ustate = function(){
		if(self.aliasid){
			return ''
		}

		if(self.itisvideo()){
			return 'video'
		}

		if(self.itisaudio()){
			return 'audio'
		}


		if(self.itisarticle()){
			return 'article'
		}

		return 'post'
	}

	self.tags = {
		have : function(tag){
			if(this.v.indexOf(tag) > -1){
				return true
			}
			else
			{
				return false
			}
		},
		/*clear : function(t){
			return t.substr(0, 25).toLowerCase().replace(/[^\w]/g, "")
		},*/
		set : function(tags){

			if(typeof tags == 'undefined'){
				this.v = [];
			}
			else{
				if(_.isArray(tags)){

					if(typeof app != 'undefined'){

						var bycategories = app.platform.sdk.categories.fromTags(tags, self.language.v)

						if (bycategories.categories.length > 2){
							return false
						}

					}

					if(tags.length > 15){
						return false;
					}

					tags = _.map(tags, function(t){
						return clearTagString(t)
					})

					this.v = tags;
				}

				else{

					if(!tags) return;

						tags = clearTagString(tags)

					var tta = _.uniq(_.clone(this.v).concat(tags))

					if(typeof app != 'undefined'){
						var bycategories = app.platform.sdk.categories.fromTags(tta, self.language.v)

						if (bycategories.categories.length > 2){
							return false
						}
					}

					


					if(tta.length > 15){
						return false;
					}

					this.v = tta

					//removeEqual(this.v, tags)

					//this.v.push(tags)
				}
			}

			_.each(self.on.change || {}, function(f){
				f('tags', this.v)
			})


			return true;
		},
		remove : function(tag){
			if(!tag){
				this.v = []
			}
			else
			{


				removeEqual(this.v, tag)

				_.each(self.on.change || {}, function(f){
					f('tags', this.v)
				})

			}
		},
		get : function(){
			return _.map(this.v, function(tag){
				return tag
			})
		},
		v : []
	}

	self.images = {
		
		set : function(images){

			if(!images){
				this.v = []
			}

			else
			{
				if(_.isArray(images)){

					if(images.length > 10){
						return false;
					}

					this.v = images;
				}

				else{

					if(!images) return

					if(this.v.length > 9){
						return false;
					}

					this.v.push(images)
				}
			}

			_.each(self.on.change || {}, function(f){
				f('images', this.v)
			})


			return true;
		},
		remove : function(image){
			if(!image){
				this.v = []
			}
			else
			{
				removeEqual(this.v, image)
			}

			_.each(self.on.change || {}, function(f){
				f('images', this.v)
			})
		},
		get : function(){
			return _.map(this.v, function(image){
				return image
			})
		},
		v : [],

		drag : true
	}

	self.url = {
		set : function(_v){
			if(!_v){
				this.v = ''
			}
			else

				this.v = _v

			self.settings.image = ''

			_.each(self.on.change || {}, function(f){
				f('url', this.v)
			})

			return true
		},
		v : '',

		drag : true
	};

	self.on = {
		change : {}
	}
	self.off = function(e){
		delete self.on[e]
	}

	self.default = {
		a : ['cm', 'r', 'i', 'u', 'p'],
		v : 'p',
		videos : [],
		image : 'a',
		f : '0',
		c : ''
	}

	self.settings = {
		a : '',
		v : '',
		videos : [],
		image : '',
		f : '0',
		c : ''
	}
	

	self.checkloaded = function(){
		var notloaded = _.find(self.images.v, function(i){
			return i.indexOf('data:image') > -1
		})

		return notloaded
	}

	self.uploadImages = function(app, clbk){


		lazyEach({
			//sync : true,
			array : self.images.v,
			action : function(p, index){

				var image = p.item;

				if (image.indexOf('data:image') > -1){

					app.imageUploader.upload({
						base64: image
					}).then( url => {

						self.images.v[index] = url;
						p.success();

					}).catch(err => {

						p.success();
					})
					
				}
				else
				{
					p.success();
				}

				

			},

			all : {
				success : function(){
					if (clbk)
						clbk()
				}
			}
		})
	}

	self.validation = function(){

		if (self.delete){
			return false;
		}

		if(!self.message.v && !self.caption.v && !self.repost.v){
			return 'message'
		}

		if(!self.language.v){
			return 'language'
		}

		if((self.itisvideo() || self.itisaudio()) && !self.caption.v) return 'videocaption'

		if(self.url.v && self.url.v.length && !self.itisvideo() && !self.itisaudio()){

			var l = trim((trim(self.message.v) + trim(self.caption.v)).replace(self.url.v, '')).length

			if (l < 30 && !self.images.v.length){
				return 'url'
			}
			
		}

		if(!self.tags.v.length && !self.repost.v){
			return 'tags'
		}


		if(self.hasexchangetag() &&
		(
			self.tags.v.length > 1 ||
			self.repost.v ||
			self.itisvideo() ||
			self.itisaudio() ||
			(self.url.v && self.url.v.length)
			
			)){

			return 'pkoin_commerce_tag'
		}

	
		return false
	}

	self.serialize = function(){

		var textvalue = self.message.v

		var articleversion2 = self.settings.v == 'a' && self.settings.version && self.settings.version >= 2

		if (articleversion2){
			textvalue = JSON.stringify(textvalue) //  Base64Helper.encode(JSON.stringify(textvalue))
		}
		
		return (self.url.v) 
		
		+ (self.caption.v) 
		+ (articleversion2 ? textvalue : (textvalue))

		+ _.map(self.tags.v, function(t){ return (t) }).join(',')
		+ self.images.v.join(',')

		+ (self.aliasid || "")
		+ (self.repost.v || "")
	}

	self.shash = function(){
		return bitcoin.crypto.sha256(self.serialize() + (self.repost.v || "") ).toString('hex')
	}
	
	self.itisvideo = function(){

		if(self.settings.v == 'a') return

		if(!self.url.v) return

		var meta = parseVideo(self.url.v)
		var ch = self.url.v.replace('peertube://', '').split('/')

		//if(meta.type) return true

		if(meta.type == 'peertube' && (!ch || ch.length <= 0 || ch[ch.length - 1] != 'audio')) return true
	}

	self.itisaudio = function(){

		if(self.settings.v == 'a') return

		if(!self.url.v) return

		var meta = parseVideo(self.url.v)
		var ch = self.url.v.replace('peertube://', '').split('/')

		if(meta.type == 'peertube' && ch && ch.length > 0 && ch[ch.length - 1] == 'audio') return true
	}

	self.itisembed = function(){
		if (self.settings.v === 'a' || !self.url?.v) {
			return;
		}

		const meta = parseVideo(self.url.v);

		const isYoutube = (meta.type === 'youtube');
		const isVimeo = (meta.type === 'vimeo');
		const isBitchute = (meta.type === 'bitchute');
		const isBrighteon = (meta.type === 'brighteon' || meta.type === 'stream.brighteon');
		const isIpfs = (meta.type === 'ipfs');

		return (isYoutube || isVimeo || isBitchute || isBrighteon || isIpfs);
	}

	self.itisipfs = function(){
		if (self.settings.v === 'a' || !self.url?.v) {
			return;
		}

		const meta = parseVideo(self.url.v);

		return (meta.type === 'ipfs');
	}

	self.itisstream = function(){

		

		if(self.settings.v == 'a') return

		if(!self.url.v) return 

		var meta = parseVideo(self.url.v)

		

		if(meta.type == 'peertube' && self.url.v.indexOf('stream') > -1) return true
	}

	self.canSend = function(app, clbk) {
		if (self.itisvideo() && !self.aliasid) {
			return app.peertubeHandler.checkTranscoding(self.url.v).then(result => clbk(result));
		}

		return clbk(true);
	}

	self.itisarticle = function(){
		return self.settings.v == 'a' && self.settings.version && self.settings.version >= 2
	}

	self.hasexchangetag = function(){
		return self.tags.have('pkoin_commerce')
	}

	self.export = function(extend){

		var textvalue = self.message.v

		var articleversion2 = self.settings.v == 'a' && self.settings.version && self.settings.version >= 2

		if (articleversion2){
			textvalue = textvalue //Base64Helper.encode(JSON.stringify(textvalue))
		}

		if (extend){

			return {
				type : self.type,
				caption : self.caption.v,
				message : textvalue,
				url : self.url.v,
				tags : self.tags.v,
				images : self.images.v,
				settings : _.clone(self.settings),
				language : self.language.v,
				txidEdit : self.aliasid || "",
				txidRepost : self.repost.v || "",
				poll : self.poll.v || {}
			}
		}

		return {
			c : (self.caption.v),
			m : articleversion2 ? textvalue : (textvalue),
			u : (self.url.v),
			p : _.clone(self.poll.v),
			t : _.map(self.tags.v, function(t){ return (t) }),
			i : self.images.v,
			s : _.clone(self.settings),
			l : self.language.v,
			txidEdit : self.aliasid || "",
			txidRepost : self.repost.v || ""
		}
	}

	self.import = function(v){

		if (v.s){
			
			try{
				self.settings = v.s
			}
			catch(e){
			
			}
		}
		else
		{
			if (v.settings){
				self.settings = v.settings
			}
		}

		var articleversion2 = self.settings.v == 'a' && self.settings.version && self.settings.version >= 2
		var textvalue = v.m || v.message

		self.caption.set(v.c || v.caption)
		self.url.set(v.u || v.url)
		self.tags.set(v.t || v.tags)
		self.message.set(textvalue)
		self.images.set(v.i || v.images)
		self.repost.set(v.r || v.txidRepost || v.repost)
		self.language.set(v.l|| v.language || 'en')
		self.poll.set(v.p || v.poll || {})

		if (v.txidEdit) self.aliasid = v.txidEdit
		
	}

	self.alias = function(txid){
		var share = new pShare();

			share.time = new Date();

			share._import(self.export(true))

			share.txid = txid || self.aliasid

		return share;
	}

	self.optstype = function(){

		if(self.itisvideo()) return 'video'
		if(self.itisaudio()) return 'audio'
		if(self.itisarticle()) return 'article'

		return self.type
	}

	self.typeop = function(){

		if (self.itisvideo()) return 'video'

		if (self.itisaudio()) return 'audio'

		if (self.itisarticle()) return 'article'

		if (self.aliasid){
			return 'share'
		}

		return self.type
	}

	self.size = function(){


		////// base64

		var obj = JSON.stringify(self.export()).replace(/base64,[^ ",]*/g, 'fileinb64').replace(/base64%2C[^ ",]*/g,'fileinb64');

		return obj.length

	}

	self.sizelimit = function(){
		if(self.itisarticle() && !window.testpocketnet){
			return 120000
		}

		return 60000
	}

	if(lang) self.language.set(lang)

	self.type = 'share'

	return self;
}

UserInfo = function(){

	var self = this;

	self.clear = function(){
		self.image.set()
		self.name.set()
		self.language.set()
		self.about.set()
		self.site.set()
		self.addresses.set()
	}

	self.checkloaded = function(){
		return self.image.v.indexOf('data:image') > -1
	}

	self.addresses = {
		set : function(_v){

			var mv = this.v;

			if(!_v) this.v = [];

			else
			{
				if(_.isArray(_v)){
					_.each(_v, function(__V){
						mv.push(__V)
					})
				}
				else
				{
					this.v.push(_v)
				}
				
			}

			if (self.on.change)
				self.on.change('addresses', this.v)
		},
		v : []
	}

	self.keys = {
		set : function(_v){

			var mv = this.v;

			if(!_v) this.v = [];

			else
			{
				if(_.isArray(_v)){
					_.each(_v, function(__V){
						if (__V)
							mv.push(__V)
					})
				}
				else
				{
					this.v.push(_v)
				}
				
			}

			if (self.on.change)
				self.on.change('keys', this.v)
		},
		v : []
	}

	self.image = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}
			

			if (self.on.change)
				self.on.change('image', this.v)
		},
		v : ''
	};
	
	self.name = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}
			

			if (self.on.change)
				self.on.change('name', this.v)
		},
		v : ''
	};

	self.ref = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}
			

			if (self.on.change)
				self.on.change('ref', this.v)
		},
		v : ''
	};

	self.language = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}
			

			if (self.on.change)
				self.on.change('language', this.v)
		},
		v : ''
	};

	self.about = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}
			

			if (self.on.change)
				self.on.change('about', this.v)
		},
		v : ''
	};

	self.site = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}
			

			if (self.on.change)
				self.on.change('site', this.v)
		},
		v : ''
	};

	self.uploadImage = function(app, clbk){

		var image = self.image.v;

		if (image.indexOf('data:image') > -1){

			var r = image.split(',');

			if (r[1]){

				app.imageUploader.upload({
					base64: image,
					type: 'avatar'
				}).then( url => {

					self.image.v = url;

					if (clbk)
						clbk();

				}).catch(err => {

					if (clbk)
						clbk(err);

				})





			}
		}
		else
		{
			if (clbk)
				clbk();
		}

	}

	self.on = {}
	self.off = function(e){
		delete self.on[e]
	}

	self.validation = function(){

		if(self.name.v.length > 20) return 'namelength'

		var hash = self.name.v.toLowerCase().replace(/[^a-z]/g,'')

		if(!app.platform.whiteList.includes(app.user.address.value)) {
			if (hash.indexOf('pocketnet') > -1) return 'pocketnet'
			if (hash.indexOf('bastyon') > -1) return 'bastyon'
		}
		
		return false

	}

	self.serialize = function(){

		return (self.name.v)
		 + (self.site.v)
		 + self.language.v
		 + (self.about.v)
		 + self.image.v + JSON.stringify(self.addresses.v) 
		 + self.ref.v
		 + self.keys.v.join(',')
	}

	self.alias = function(txid){
		var userInfo = new pUserInfo();
		

			userInfo._import(self.export())

			userInfo.txid = txid

		return userInfo;
	}

	self.export = function(extend){

		if(extend){
			return {
				type : self.type,
				name : self.name.v,
				about : self.about.v,
				site : self.site.v,
				language : self.language.v,
				image : self.image.v,
				addresses : JSON.stringify(self.addresses.v || []),
				ref : self.ref.v,
				keys : self.keys.v.join(',')
			}
		}

		return {
			n : (self.name.v),
			l : self.language.v,
			a : (self.about.v),
			s : (self.site.v),
			i : self.image.v,
			b : JSON.stringify(self.addresses.v || []),
			r : self.ref.v,
			k : self.keys.v.join(',')
		}
	}

	self.import = function(v){

		self.name.set(v.c || v.name)
		self.language.set(v.l || v.language)
		self.about.set(v.a || v.about)
		self.site.set(v.s || v.site)
		self.image.set(v.i || v.image)
		self.addresses.set( JSON.parse(v.b || v.addresses || "[]"))
		self.ref.set(v.r || v.ref)
		self.keys.set((v.k || v.keys || '').split(','))
	}

	

	self.type = 'userInfo'

	return self;
}

DeleteAccount = function(){
	var self = this;
	
	self.validation = function(){
		return false;
	}

	self.serialize = function(){
		return ''
	}

	self.export = function(alias){
		if(alias){
			return {type : self.type}
		}
		else{
			return {}
			
		}
		
	}

	self.import = function(p){

	}

	self.type = 'accDel'

	self.typeop = function(){
        return self.type;
	}
}

Transaction = function(){
	var self = this;

	self.source = {
		set : function(_v){

			this.v = _v || []

		},
		v : []
	}

	self.reciever = {
		set : function(_v){

			/*{
				address: receiver,
				amount: Number(value)
			}*/

			this.v = _.filter(_v || [], (a) => {

				return a.address && a.amount

			})
		},
		v : []
	};

	self.feemode = {
		set : function(_v){

			this.v = 'exclude'

			if (_v == 'exclude' || _v == 'include'){
				this.v = _v
			}

			
		},
		v : 'exclude'
	};

	self.message = {
		set : function(_v){
			this.v = _v || ''
		},
		v : ''
	};

	
	self.validation = function(){
		return false;
	}

	self.export = function(extend){
		return {
			type : self.type,
			reciever : self.reciever.v,
			feemode : self.feemode.v,
			message : self.message.v,
			source : self.source.v,
		}
	}

	self.import = function(p){
		self.reciever.set(p.reciever)
		self.feemode.set(p.feemode)
		self.message.set(p.message)
		self.source.set(p.source)
	}

	self.type = 'transaction'

}

pUserInfo = function(){

	var self = this;

	self.name = ''
	self.image = ''
	self.language = ''
	self.about = ''
	self.site = ''
	self.txid = '';
	self.ref = '';
	self.postcnt = 0;
	self.reputation = 0;
	self.trial = true;
	self.keys = []
	self.deleted = false

	self.subscribes = [];
	self.subscribers = [];
	self.recomendedSubscribes = [];
	self.blocking = [];
	self.regdate = new Date()

	self.subscribers_count = 0
	self.subscribes_count = 0
	self.blockings_count = 0
	self.likers_count = 0

	self.flags = {}
	self.firstFlags = {}

	self.address = ''

	self.rc = 0;

	self._import = function(v){
		self.name = v.n || v.name || '';
		self.image = v.i || v.image;
		self.about = v.a || v.about || '';
		self.language = v.l || v.language;
		self.site = v.s || v.site || '';


		self.ref = v.r || v.ref;
		self.rc = v.rc || 0;
		self.postcnt = v.postcnt || 0;
		self.reputation = v.reputation || 0;
		self.deleted = v.deleted || false

		if (v.subscribes) self.subscribes = v.subscribes;
		if (v.subscribers) self.subscribers = v.subscribers;

		if (v.subscribes_count) self.subscribes_count = v.subscribes_count;
		if (v.subscribers_count) self.subscribers_count = v.subscribers_count;

		if (v.recomendedSubscribes) self.recomendedSubscribes = v.recomendedSubscribes;

		if (v.blocking) self.blocking = v.blocking;
		if (v.flags) self.flags = v.flags;
		if (v.hash) self.hash = v.hash;
		if (v.firstFlags) self.firstFlags = v.firstFlags;

		if(v.likers_count) self.likers_count = v.likers_count

		self.keys = (v.k || v.keys || '')

		if(!_.isArray(self.keys)) self.keys = self.keys.split(',')

		self.keys = _.filter(self.keys, function(k){ return k})

		if (v.txid)
			self.txid = v.txid;


		try{
			// self.addresses = JSON.parse(v.b || v.addresses || "[]")

		
			self.addresses = [];

			var extractDeep = str => {

				var parsed = JSON.parse(str);

				if (parsed.length){

					parsed.forEach(obj => {

						if (typeof obj === 'string'){
							extractDeep(obj);
							
						} else if (typeof obj === 'object'){
							self.addresses.push(obj);
							
						}
					})
				}
			}

			extractDeep(v.b || v.addresses || '[]');

		}
		catch (e){
			self.addresses = []
			//console.log('err addresses', e);
		}

		if(typeof v.trial != 'undefined') self.trial = v.trial
		

		if (v.adr || v.address)
			self.address = v.adr || v.address

		self.temp = v.temp || null;

		self.dev = v.dev;

		if (v.regdate)
			self.regdate.setTime(v.regdate * 1000);


	}

	self.export = function(){

		var v = {};

		v.n = (self.name)
		v.image = self.image
		v.a = (self.about)
		v.l = self.language
		v.s = (self.site)
		v.r = self.ref;
		v.rc = self.rc
		v.b = JSON.stringify(self.addresses || [])
		v.adr = self.address
		v.k = self.keys.join(',')


		v.reputation = self.reputation
		v.subscribers = _.clone(self.subscribers)
		v.subscribes = _.clone(self.subscribes)
		v.recomendedSubscribes = _.clone(self.recomendedSubscribes)
		v.blocking = _.clone(self.blocking)
		v.flags = _.clone(self.flags)
		v.firstFlags = _.clone(self.firstFlags)

		v.subscribers_count = self.subscribers_count
		v.subscribes_count = self.subscribes_count
		v.blockings_count = self.blockings_count
		v.likers_count = self.likers_count

		return v
	}

	self.social = function(){
		var s = {
			image : self.image,
			images : [self.image],
			title : self.name,
			html : {
				body : self.about,
				preview : self.about
			},

			text : {
				body : self.about,
				preview : self.about
			}
		
		}

		return s
	}

	self.import = function(v){
		v = JSON.parse(v)

		self._import(v)
	}

	self.modFlag = function(reason){
		var modFlag = new ModFlag();

		modFlag.s2.set(self.hash);
		modFlag.s3.set(self.address);
		modFlag.i1.set(reason);


		return modFlag;
	}

	self.relation = function(address, key){
		if(!key) key = 'subscribes'

		return _.find(self[key], function(o){
			return (o.adddress || o.address || o) == address
		})
	}

	self.addRelation = function(obj, key){

		if(!key) key = 'subscribes'

		self[key] || (self[key] = [])

		try{
			self[key].push(obj)

			if (key === 'subscribers'){

				self['subscribers_count'] || (self['subscribers_count'] = 0);
				self['subscribers_count']++;

			}

			if (key === 'subscribes'){

				self['subscribes_count'] || (self['subscribes_count'] = 0);
				self['subscribes_count']++;
				
			}
		}
		catch(e){
			console.error(e)
		}

	}

	self.removeRelation = function(obj, key){

		if(!key) key = 'subscribes'

		removeEqual(self[key], obj)

		if (key === 'subscribers'){

			self['subscribers_count'] || (self['subscribers_count'] = 1);
			self['subscribers_count']--;

		}

		if (key === 'subscribes'){

			self['subscribes_count'] || (self['subscribes_count'] = 1);
			self['subscribes_count']--;
			
		}

	}
	
	self.clone = function(){
		var ui = new pUserInfo()

			ui._import(self.export())

		return ui
	}

	self.type = 'userInfo'

	return self;
}


pShare = function(){

	var self = this;

	self.url = ''
	self.tags = []
	self.message = ''
	self.caption = ''
	self.images = [];
	self.txid = '';
	self.repost = '';
	self.language = '';
	self.poll = {};
	self.time = new Date()

	self.comments = 0;
	self.lastComment = null;
	self.reposted = 0;
	self.score = 0
	self.scnt = 0
	self.address = ''

	self.deleted = false;

	self.on = {}
	self.off = function(e){
		delete self.on[e]
	}

	self.default = {
		a : ['cm', 'i', 'u', 'p'],
		v : 'p',
		videos : [],
		image : 'a',
		f : '0',
		c : ''
	}

	self.settings = {
		a : '',
		v : '',
		videos : [],
		image : '',
		f : '0',
		c : ''
	}

	self.isEmpty = function(){

		return !self.message && !self.caption && (self.tags.length == 0) && (self.images.length == 0) && !self.url
	}
	
	self.findComment = function(id){
		return _.find(self.comments, function(c){
			return c.txid == id
		})
	}

	self.itisvideo = function(){

		if(self.settings.v == 'a') return

		if(!self.url) return

		var meta = parseVideo(self.url)
		var ch = self.url.replace('peertube://', '').split('/')

		if(meta.type == 'peertube' && (!ch || ch.length <= 0 || ch[ch.length - 1] != 'audio')) return true
	}

	self.itisaudio = function(){

		if(self.settings.v == 'a') return

		if(!self.url) return

		var meta = parseVideo(self.url)
		var ch = self.url.replace('peertube://', '').split('/')

		if(meta.type == 'peertube' && ch && ch.length > 0 && ch[ch.length - 1] == 'audio') return true
	}

	self.itisembed = function(){
		if (self.settings.v === 'a' || !self.url?.v) {
			return;
		}

		const meta = parseVideo(self.url.v);

		const isYoutube = (meta.type === 'youtube');
		const isVimeo = (meta.type === 'vimeo');
		const isBitchute = (meta.type === 'bitchute');
		const isBrighteon = (meta.type === 'brighteon' || meta.type === 'stream.brighteon');
		const isIpfs = (meta.type === 'ipfs');

		return (isYoutube || isVimeo || isBitchute || isBrighteon || isIpfs);
	}

	self.itisipfs = function(){
		if (self.settings.v === 'a' || !self.url?.v) {
			return;
		}

		const meta = parseVideo(self.url.v);

		return (meta.type === 'ipfs');
	}

	self.itisstream = function(){

		if(self.settings.v == 'a') return

		if(!self.url) return 

		var meta = parseVideo(self.url)

		if(meta.type == 'peertube' && self.url.indexOf('stream') > -1) return true
	}

	self.hasexchangetag = function(){
		return self.tags.indexOf('pkoin_commerce') > -1
	}

	self.itisarticle = function(){
		return self.settings.v == 'a' && self.settings.version && self.settings.version >= 2
	}

	self._import = function(v){

		self.settings = v.s || v.settings || {}

		
		if(v.i && !_.isArray(v.i)) v.i = [v.i]
		if(v.t && !_.isArray(v.t)) v.t = [v.t]
		
	
		self.message = v.m || v.message || ""
		self.caption = v.c || v.caption || ""
		self.tags = v.t || v.tags || []
		self.url = v.u || v.url || '';
		self.poll = v.p || v.poll || {}
	

		if(v.myVal) self.myVal = Number(v.myVal)

		self.language = v.l || v.language || 'en'
		self.images = v.i || v.images || []
		self.repost = v.r || v.repost || v.txidRepost || ''

		self.images = self.images.filter(image => checkIfAllowedImage(image));

		if (v.deleted) self.deleted = true

		if (v.txid)
			self.txid = v.txid;

		if (v.id)
			self.id = v.id;

		if (v.txidEdit){
			self.txidEdit = v.txidEdit;	
			self.edit = true
		}

		if (v.edit){
			self.edit = true
		}

		if(v.scoreSum){
			self.score = Number(v.scoreSum)
		}

		if(v.scoreCnt){
			self.scnt = Number(v.scoreCnt)
		}


		self.temp = v.temp || null;

		if (v._time)
			self._time = v._time

		if (v.comments)
			self.comments = v.comments

		if (v.reposted)
			self.reposted = v.reposted

		
		if (v.lastComment)
			self.lastComment = v.lastComment.id || v.lastComment

		if(v.address){
			self.address = v.address
		}

		if (v.time)
			self.time.setTime(v.time * 1000);
	}

	self.clone = function(){
		var ui = new pShare()

			ui._import(self.export())

			//ui.lastComment = self.lastComment

		return ui
	}

	self.export = function(){

		var v = {}
		
		v.m = (self.message)
		v.c = (self.caption)
		v.u = (self.url)
		v.t = _.map(self.tags || [], function(t){ return (t) })
		v.i = _.clone(self.images)
		v._time = self._time || self.time;
		v.time = self.time.getTime() / 1000;
		v.s = _.clone(self.settings)
		v.l = self.language
		v.p = self.poll
		v.deleted = self.deleted

		v.scoreCnt = self.scnt
		v.scoreSum = self.score
		v.address = self.address
		v.txid = self.txid
		v.deleted = self.deleted
		v.comments = self.comments
		v.repost = self.repost
		v.txidEdit = self.txidEdit
		v.edit = self.edit

		if(self.lastComment){
			/*if(self.lastComment.export){
				v.lastComment = self.lastComment.export()
			}
			else{*/
				v.lastComment = self.lastComment
			//}
		}

		return v
	}

	self.import = function(v){

		v = JSON.parse(v)

		self._import(v)
	}

	self.social = function(app){

		var text = self.message.v;

		if (window.cordova && deep(window, 'plugins.socialsharing') && self.message.blocks){

			var name = app.platform.api.name(self.address)
			var edjs = new edjsHTML(null, app)
			var message = edjs.apply(self.message, decodeURIComponent)
			text = edjs.text(message);
			text = self.caption + `\n\n` + text;
	
		} else {

			text = self.renders.text(text);

		}

		var s = {
			image : '',
			files : self.images || [],
			title : app.localization.e('postby') + " " + name,
			html : {
				body : self.renders.messagec(),
				preview : trimHtml(self.renders.messagec(), 160).replace(/ &hellip;/g, '...').replace(/&hellip;/g, '...')
			},

			text : {
				body : text,
				preview : trimHtml(self.renders.text(), 130).replace(/ &hellip;/g, '...').replace(/&hellip;/g, '...'),
				title: self.caption
			}
		
		}

		if (self.url){
			var v = videoImage(self.url)
			if (v){
				s.image = v;
				//s.images.unshift(v)
			}
		}

		if(!s.image) s.image = self.images[0]

		return s
	}

	self.renders = {
		captionclear : function(){
			return self.caption || ''
		},
		caption : function(){
			if(!self.caption){

				if(self.message.length < 100) {
					return trimrn(self.message)
				}

				return ''

			}

			var m = trimrn(self.caption);

			return m;
		},

		message : function(){
			if(!self.caption && self.message.length < 100){
				return ''
			}

			var m = trimrn(self.message)

			//if(self.url) m = m.replace(self.url, '')

			return m
		},

		messagec : function(){
		
			var m = self.caption || trimrn(self.message)

			return m
		},

		text : function(nm){
			if(!nm) nm = self.renders.messagec()

			nm = (trimrn(filterXSS(nm, {
				whiteList: [],
				stripIgnoreTag: true,
			})));

			return nm
		},

	

		
	}

	self.upvote = function(value){

		if(self.myVal && self.myVal != '0') return null;

		var upvoteShare = new UpvoteShare();

		upvoteShare.share.set(self.txid);
		upvoteShare.value.set(value);
		upvoteShare.address.set(self.address || '')

		//self.myVal = Number(value);		

		return upvoteShare;
	}

	self.complain = function(reason){
		var complainShare = new ComplainShare();

		complainShare.share.set(self.txid);
		complainShare.reason.set(reason);

		return complainShare;
	}
	self.modFlag = function(reason){
		var modFlag = new ModFlag();

		modFlag.s2.set(self.txid);
		modFlag.s3.set(self.address);
		modFlag.i1.set(reason);

		return modFlag;
	}

	self.alias = function(){
		var share = new Share();

		share.import(self)

		share.aliasid = self.txid

		share.time = self.time

		return share;
	}

	self.visibility = function(){

		//if(rand(0, 1)) return 'sub'

		if(self.settings.f == '0') return null

		if(self.settings.f == '1') return 'sub'

		if(self.settings.f == '2') return 'reg'
	}

	self.type = 'share'

	return self;
}

pComment = function(){

	var self = this;

	self.url = ''
	self.message = ''
	self.images = [];

	self.postid = '';
	self.id = '';
	self.time = new Date();
	self.timeUpd = new Date();
	self.children = 0;

	self.amount = 0;


	self.address = '';
	self.parentid = '';
	self.answerid = '';

	self.scoreDown = 0;
	self.scoreUp = 0;
	self.myScore = 0;
	self.deleted = false;
	self.address = ''

	self.reputation = 0;

	self.my = function(app){

		if(self.address && self.address == app.user.address.value) return true

		return false
	}


	self._import = function(v){

		if (v.msgparsed){
			self.url = v.msgparsed.url;
			self.message = v.msgparsed.message
			self.images = v.msgparsed.images
		}			
		
		self.postid = v.postid;
		self.answerid = v.answerid;
		self.parentid = v.parentid;


		


		self.scoreDown = Number(v.scoreDown || '0');
		self.scoreUp = Number(v.scoreUp || '0');

		//self.donation = v.donation;
		self.amount = Number(v.amount || '0');
		self.children = Number(v.children || '0');

		if(v.donate){
			self.amount = _.reduce(v.donate, (m, n) => {
				return m + n.amount
			}, 0) * 100000000
		}

		self.address = v.address
		self.commentTo = null

		if(v.addressCommentAnswer && v.addressCommentAnswer != self.address) self.commentTo = v.addressCommentAnswer
		if(!self.commentTo && v.addressCommentParent && v.addressCommentParent != self.address) self.commentTo = v.addressCommentAnswer
		if(!self.commentTo && v.addressContent && v.addressContent != self.address) self.commentTo = v.addressContent

		if (v.rating)
			self.rating = v.rating

		if (v.myScore) self.myScore = v.myScore

		if (v.deleted) self.deleted = true

		if (v.id || v.txid)
			self.id = v.id || v.txid;

		self.setTime(v.time, v.timeUpd)

	}

	self.import = function(v){
			
		/*if (v.msg)
			v.msgparsed = JSON.parse(v.msg)*/

		self._import(v)
	}

	self.export = function(){


		var r = {
			id : self.id,
			postid : self.postid || "",
			answerid : self.answerid || "",
			parentid : self.parentid || "",
			msgparsed : {
				message : self.message,
				url : self.url,
				images : self.images,
			},
			scoreDown : self.scoreDown,
			scoreUp : self.scoreUp,
			myScore : self.myScore,
			deleted : self.deleted,
			donation: self.donation,
			amount: self.amount,
			address : self.address,
			children : self.children,
			time : self.time.getTime() / 1000,
			timeUpd: self.timeUpd.getTime() / 1000
		}

		return r
	}

	self.clone = function(){
		var ui = new pComment()

			ui._import(self.export())

		return ui
	}

	self.upvote = function(value){

		if(self.myVal && self.myVal != '0') return null;

		var upvoteComment = new СScore();

		upvoteComment.comment.set(self.id);
		upvoteComment.address.set(self.address || '');
		upvoteComment.value.set(value);

		self.myScore = Number(value);

		return upvoteComment;
	}

	self.modFlag = function(reason){
		var modFlag = new ModFlag();

		modFlag.s2.set(self.id);
		modFlag.s3.set(self.address);
		modFlag.i1.set(reason);

		return modFlag;
	}

	self.delete = function(){
		var c = new Comment(self.postid);

		c.id = self.id
		c.parentid = self.parentid
		c.answerid = self.answerid
		c.delete = true
		

		return c

	}

	self.setTime = function(t, tu){

		if(t){
			self.time = new Date()
			self.time.setTime(t * 1000);
		}
		
		if(tu){
			self.timeUpd = new Date()
			self.timeUpd.setTime(tu * 1000);
		}

		
	}	

	self.social = function(app){

		var name = app.platform.api.name(self.address)

		var s = {
			image : '',
			images : self.images || [],
			title : "Comment by " + name,
			html : {
				body : self.renders.text(),
				preview : trimHtml(self.renders.text(), 160).replace(/ &hellip;/g, '...').replace(/&hellip;/g, '...')
			},

			text : {
				body : self.renders.text(),
				preview : trimHtml(self.renders.text(), 130).replace(/ &hellip;/g, '...').replace(/&hellip;/g, '...')
			}
		
		}

		if(!s.image) s.image = self.images[0]
		if(!s.image) s.image = app.platform.psdk.userInfo.getShortForm(self.address).image
		

		return s

	}

	self.renders = {

		text : function(){
			var l = trimrn(filterXSS(self.message, {
				whiteList: [],
				stripIgnoreTag: true
			}))

			return l
		},
		
		preview : function(){
			var l = filterXSS(self.message, {
				whiteList: [],
				stripIgnoreTag: true
			})

			var m = joypixels.toImage(trimHtml(l, 90))

			return nl2br(trimrn(m))
		},

		previewEmojidis : function(){
			var l = filterXSS(self.message, {
				whiteList: [],
				stripIgnoreTag: true
			})


			var m = trimHtml(l, 90)

			return nl2br(trimrn(m))
		}
	}

	self.type = 'comment'

	return self;
}

Img = function(p){
	if(!p) p = {};
 
	var self = this;

		self.type = p.type;
		self.name = p.name;
		self.app = p.app;
		self.refId = p.refId;

	return self;
}


Remove = function(){

	var self = this;

	self.clear = function(){
		
		self.txidEdit.set()
		self.s.set()

	}

	self.txidEdit = {
		set : function(_v){
			this.v = _v
		},
		v : ''
	};

	self.ustate = function(){

		return self.type;
	}

	self.on = {
		change : {}
	}
	self.off = function(e){
		delete self.on[e]
	}


	self.checkloaded = function(){
		return false
	}


	self.validation = function(){
		return false
	}

	self.serialize = function(){

        return (self.txidEdit.v)

	}

	self.shash = function(){
		return bitcoin.crypto.sha256(self.serialize()).toString('hex')
	}
	

	self.export = function(extend){

		var r = {
			txidEdit: self.txidEdit.v || "",
		}

		if(extend){
			r.type = self.type
		}
	
		return r

	}

	self.import = function(v){
		self.txidEdit.set(v.txidEdit || ""); 
	}

	self.alias = function(){
		var remove = new pRemove();

            //remove.time = new Date();

			remove._import(self.export())


		return remove;
	}

	self.optstype = function(){

		return self.type
	}



	self.typeop = function(){

        return self.type;

	}

	self.type = 'contentDelete'

	return self;
}


pRemove = function(){

	var self = this;

	self.txidEdit = '';
	self.s = ''

	self.on = {}
	self.off = function(e){
		delete self.on[e]
	}

	self.isEmpty = function(){

		return !self.txidEdit && !self.s
	}

	self._import = function(v, notdecode){

		if (v.txidEdit)
			self.txidEdit = v.txidEdit;

		
		if (v.s)
			self.s = v.s;

	}

	self.export = function(){

		var v = {}
	
		v.txidEdit = self.txidEdit;

		if (v.s){
			v.s = self.s;
		}

		return v
	}

	self.import = function(v){

		v = JSON.parse(v)

		self._import(v)
	}


	/*self.delete = function(){
		var c = new Remove();

		c.txidEdit = self.txidEdit;
		c.c = self.c;
		

		return c

	}*/


	self.alias = function(){
		var remove = new Remove();

		remove.import(self)

		remove.txidEdit = self.txidEdit

		if (remove.s){
			remove.s = self.s;
		}

		return remove;
	}

	self.type = 'contentDelete'

	return self;
}

Settings = function(){

	var self = this;

	self.pin = {
		set : function(_v){

			if(!_v){
				this.v = ''
			}
			else
			{
				this.v = _v
			}

			_.each(self.on.change || {}, function(f){
				f('pin', this.v)
			})

		},
		get : function(){
			return this.v
		},
		v : ''
	};

	self.clear = function(){

		self.pin.set()

	}

	self.ustate = function(){

		return self.type;
	}

	self.on = {
		change : {}
	}
	self.off = function(e){
		delete self.on[e]
	}


	self.checkloaded = function(){
		return false
	}


	self.validation = function(){
		return false
	}

	self.serialize = function(){

        return JSON.stringify({
			pin: self.pin.v
		})

	}

	self.shash = function(){
		return bitcoin.crypto.sha256(self.serialize()).toString('hex')
	}

	self.export = function(alias){

		if(alias){
			return {
				type : self.type,
				d: JSON.stringify({
					pin: self.pin.v || "",
				})
			} 
		}

		return {
			d: JSON.stringify({
				pin: self.pin.v || "",
			})
		}

	}

	self.import = function(v = {}){

		if(!v.d) v.d = "{}"

		var parsed = {}
		
		if(!_.isObject(v.d)){
			try{
				parsed = JSON.parse(v.d)
			}catch(e){
				parsed = {}
			}
		}
		else{
			parsed = v.d
		}

		self.pin.set(parsed.pin || ""); 

	}

	self.optstype = function(){
		return self.type	
	}

	self.typeop = function(){

        return self.type;

	}

	self.alias = function(){
		var settings = new pSettings();
			settings.import(self.export(true))

		return settings;
	}

	self.type = 'accSet'

	return self;
}

pSettings = function(){

	var self = this;

	self.pin = '';
	self.address = ''

	self._import = function(dv = {}){

		var v = dv.d

		self.pin = (v || {}).pin || ""
		self.address = (v || {}).address || ""
	}

	self.export = function(){

		var v = {
			d : {
				pin : self.pin
			}
		}

		return v
	}

	self.import = function(v = {}){

		
		if(!v.d) v.d = "{}"

		var parsed = {}
		
		if(!_.isObject(v.d)){
			try{
				parsed = JSON.parse(v.d)
			}catch(e){
				parsed = {}
			}
		}
		else{
			parsed = v.d
		}


		self._import({
			d : parsed
		})
	}

	self.alias = function(){
		var s = new Settings();

		s.import({
			d : {
				pin : self.pin
			}
		})

		
		return s;
	}

	self.clone = function(){
		var ui = new pSettings()

			ui._import(self.export())

			ui.address = self.address

		return ui
	}

	self.type = 'accSet'

	return self;
}





kits = {
	c : {
		userInfo : UserInfo,
		share : Share,
		complainShare : ComplainShare,
		modFlag : ModFlag,
		upvoteShare : UpvoteShare,
		cScore : СScore,
		comment : Comment,
		unblocking : Unblocking,
		blocking : Blocking,
		unsubscribe : Unsubscribe,
		subscribe : Subscribe,
		subscribePrivate : SubscribePrivate,
		contentBoost : ContentBoost,
		deleteAccount : DeleteAccount,
		accDel : DeleteAccount,
		transaction : Transaction,
		contentDelete : Remove,
		accSet : Settings
	},

	ini : {

	},
	alias : {
		userInfo : pUserInfo,
		share : pShare,
		comment : pComment,
		contentDelete : pRemove,
		settings : pSettings
	}
}