var G = 'GET';
var P = 'POST';

var API = {
	addClient: function(data, cb) {
		this.XHR('client/new', P, cb, JSON.stringify(data));
	},
	issuesGet: function(data, cb) {
		this.XHR('latestEditions.json', G, cb, JSON.stringify(data));
	},
	storiesGet: function(frag, data, cb) {
		this.XHR(frag, G, cb, JSON.stringify(data));
	},
	XHR: function(frag, method, cb, data) {
	    var xhr = new XMLHttpRequest();
	    xhr.addEventListener('load', function(data) {
			cb(JSON.parse(data.currentTarget.responseText));
	    });
	    console.log('https://robert-daly.com/dennis/twdcurl.php?url=' + frag);
	    xhr.open(method, 'https://robert-daly.com/dennis/twdcurl.php?url=' + frag, true);
	    xhr.setRequestHeader('Accept', 'application/json');
	    xhr.send();

	    return xhr;
	},
	generateQueryString: function(obj) {
		var str = [];
		for(var p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
		return str.join('&');
	}
};

module.exports = API;