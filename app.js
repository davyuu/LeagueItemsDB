var fs = require('fs');

var fileName = 'league_items_mobafire_image.json';

var json = JSON.parse(fs.readFileSync(fileName, 'utf8'));

json.sort(function(a, b) {
	a = a.name;
	b = b.name;

	return (a < b) ? -1 : (a > b) ? 1 : 0;
});

for (var i = 0; i < json.length; i++) {
	json[i].id = i;
}

console.log(json);
var jsonObj = JSON.stringify(json);
fs.writeFile(fileName, jsonObj, 'utf8');
