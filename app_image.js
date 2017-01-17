var fs = require('fs');
var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://test:test@ds111469.mlab.com:11469/league_items');

var imageSchema = new mongoose.Schema({
	_id: Number,
	item_name: String,
	item_image_src: String
});

var Image = mongoose.model('Image', imageSchema);

var fileName = 'league_items_mobafire_image.json';

var json = JSON.parse(fs.readFileSync(fileName, 'utf8'));

for (var i = 0; i < json.length; i++) {
	var image = Image({
		_id: json[i]._id,
		item_name: json[i].item_name,
		item_image_src: json[i].item_image_src
	}).save(function(err) {
		if (err) throw err;
		console.log("item saved");
	})
}

console.log('done');
