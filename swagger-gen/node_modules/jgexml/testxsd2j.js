'use strict';

var fs = require('fs');
var x2j = require('./xml2json');
var xsd = require('./xsd2json');

var filename = process.argv[2];
var valueProperty = false;

var xml = fs.readFileSync(filename,'utf8');
console.log(xml);

try {
	var obj = x2j.xml2json(xml,{"attributePrefix": "@","valueProperty": valueProperty, "coerceTypes": false});
}
catch (err) {
	console.error('That is not valid JSON');
	console.error(err);
	console.log(x2j.getString());
	process.exit(1);
}

console.log(JSON.stringify(obj,null,2));

var laxUris = (filename.indexOf('.lax')>=0);
var json = xsd.getJsonSchema(obj,filename,'',laxUris,'xs:');
console.log();
//console.log(JSON.stringify(json,null,2));
//console.log();
console.log('Same (should be false): ' + (obj == json));

if (process.argv.length>3) {
	var outfile = process.argv[3];
	fs.writeFileSync(outfile,JSON.stringify(json,null,2),'utf8');
}
