var feed = require('feed-read');

module.exports = {
	getfeed: function (url, callback){
		feed(url, function(err, articles) {
  			if (err) throw err;
  			console.log(articles);
  			callback(articles);
		});
    }
}
