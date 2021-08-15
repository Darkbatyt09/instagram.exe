// // you need *your own* access token and user ID if you want this to work!

var accessToken = InstagramToken;

var userId = '10729891075';

// http://instafeedjs.com

var userFeed = new Instafeed({

	target: 'profile',	get: 'user',

	userId: userId,

	limit: 18,

	accessToken: accessToken,

	template: '<a href="{{link}}" target="_blank"><span><svg viewbox="0 0 100 100"><rect x="0" y="0" width="100" height="100" fill="none"></rect></svg><img src="{{image}}" alt="{{caption}}"/></span></a>'

});

userFeed.run();

var userInfo = new Instafeed({

	target: 'info',

	get: 'user',

	userId: userId,

	limit: 1,

	accessToken: accessToken,

	// Some fields no longer available

	template: '<h2><a href="http://instagram.com/{{model.username}}">{{model.username}}</a></h2><hr/><div class="info"><div class="avatar"><img src="https://github.com/gabriellewee/portfolio/blob/netlify/static/images/photography/ellocasia-square-thumbnail.jpg?raw=true" alt="{{model.username}}"/></div><ul><li><strong>35</strong><span>posts</span></li><li><strong>268</strong><span>followers</span></li><li><strong>282</strong><span>following</span></li><li><button>Follow</button><button></button></ul><div class="desc"><p>Gabrielle Wee</p><p>🌱 aroids, succulents, and fici 🌱<br/>📸 personal: @gabriellewee 📸</p></div></div>'

});

userInfo.run();

var homeFeed = new Instafeed({

	target: 'home',

	get: 'user',

	userId: userId,

	limit: 18,

	accessToken: accessToken,

	// Some fields no longer available

	// resolution: 'standard_resolution',

	template: '<figure><header><a class="avatar" href="http://instagram.com/{{model.username}}"><img src="https://github.com/gabriellewee/portfolio/blob/netlify/static/images/photography/ellocasia-square-thumbnail.jpg?raw=true"/></a><a href="http://instagram.com/{{model.username}}">{{model.username}}</a></header><img src="{{image}}" alt="{{caption}}"/><figcaption><div><button>Like</button><button>Comment</button><button>Share</button></div><div><button>Bookmark</button></div><div class="likes">Liked by <span>{{likes}}</span> people</div><div class="caption"><a href="http://instagram.com/{{model.username}}" target="_blank">{{model.username}}</a> <span>{{caption}}</span></div><div class="view-all comment-{{comments}}"><a href="{{link}}" target="_blank">View <span>{{comments}}</span> comment</a></div><time class="stamp" data-time="{{model.timestamp}}"></time></figcaption></figure>'

});

homeFeed.run();

// https://momentjs.com

setTimeout(function(){

	var timeStamps = document.getElementsByClassName('stamp');

	for (var i = 0; i < timeStamps.length; i++) {

		var s = timeStamps[i];

		var t = s.getAttribute('data-time');

		s.innerHTML = moment(t).startOf('day').fromNow(); 

	}

}, 500);
