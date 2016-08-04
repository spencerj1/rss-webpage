var FeedParser = require('feedparser')
var request = require('request');


module.exports = {
	getfeed: function (url, callback){
		var req = request(url)
  		var feedparser = new FeedParser();

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
		  var item_array = [];

		  function reader(){
		  	if (item = stream.read()){
		  		console.log(item);
		  		item_array.push(item);
		  		callback(item_array);
		  	}else{
		  	}
		  }
		});
    }
}
