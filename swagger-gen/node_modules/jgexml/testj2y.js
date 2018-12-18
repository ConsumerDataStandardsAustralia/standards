'use strict';

var fs = require('fs');
var j2y = require('./json2yaml');

var filename = process.argv[2];

var json = fs.readFileSync(filename,'utf8');
console.log(json);

var obj = {};
try {
	obj = JSON.parse(json);
}
catch (err) {
	console.error('That is not valid JSON');
	console.error(err);
	process.exit(1);
}

var yaml = j2y.getYaml(obj);
console.log();
console.log(yaml);
console.log();
console.log(true);
