var fs = require('fs');
var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://test:test@ds111469.mlab.com:11469/league_items');

var itemSchema = new mongoose.Schema({
	_id: Number,
	item_name: String,
	item_total_price: String,
	item_recipe_price: String,
	item_stats: String,
	item_builds_from: Array,
	item_builds_into: Array,
	item_maps: Array,
	item_image_src: String
});

var Item = mongoose.model('Item', itemSchema);

var fileName = 'league_items_mobafire.json';

var json = JSON.parse(fs.readFileSync(fileName, 'utf8'));

for (var i = 0; i < json.length; i++) {
	var item = Item({
		_id: json[i]._id,
		item_name: json[i].item_name,
		item_total_price: json[i].item_total_price,
		item_recipe_price: json[i].item_recipe_price,
		item_stats: json[i].item_stats,
		item_builds_from: JSON.parse(json[i].item_builds_from),
		item_builds_into: JSON.parse(json[i].item_builds_into),
		item_maps: JSON.parse(json[i].item_maps),
		item_image_src: json[i].item_image_src
	}).save(function(err) {
		if (err) throw err;
		console.log("item saved: " + i);
	});
}

console.log('done');
