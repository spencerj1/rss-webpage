var FeedParser = require('feedparser')
  , request = require('request');


module.exports = {
	getfeed: function (url, callback){
		var req = request('http://www.bitpipe.com/data/bpXchange?b=ka_bp_manageit&d=31&f=rss&u=rss')
  		var feedparser = new FeedParser([options]);

		req.on('error', function (error) {
  		// handle any request errors
		});
		req.on('response', function (res) {
		  var stream = this;

		  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

		  stream.pipe(feedparser);
		});

		feedparser.on('error', function(error) {
		  callback("error");
		});
		feedparser.on('readable', function() {
		  // This is where the action is!
		  var stream = this
		  var meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
		  var item;

		  while (item = stream.read()) {
		    console.log(item);
		  }
		  callback();
		});
    };
}
