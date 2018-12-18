'use strict';

var yaml = '';

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function encodeKey(s) {
	var quote = false;
	if (s.indexOf('@')>=0) quote = true;
	if (s.indexOf('"')>=0) quote = true;
	if (quote) s = '"' + s.replaceAll('"','\\"') + '"';
	return s;
}

function encodeValue(s) {
	var quote = false;
	if (typeof s == 'string') {
		if (s.indexOf(' ')>=0) quote = true;
		if (s.indexOf('"')>=0) quote = true;
		if (quote) s = '"' + s.replaceAll('"','\\"') + '"';
	}
	return s;
}

function traverse(obj,parent,depth) {

var result = [];

	var array = Array.isArray(obj);
	for (var key in obj) {
		// skip loop if the property is from prototype
		if (!obj.hasOwnProperty(key)) continue;

		var output = array ? parent : key;

		if (typeof obj[key] !== 'object'){
			yaml += new Array(depth*2+1).join(' ');
			yaml += encodeKey(key) + ': ' + encodeValue(obj[key])+'\n';
		}
		else {
			if (!array) {
				yaml += new Array(depth*2+1).join(' ');
				yaml += encodeKey(output) + ':\n';
			}
			else {
				yaml += new Array(depth*2+1).join(' ');
				yaml += '-\n';
			}
			
			traverse(obj[key],output,depth+1);
		}
	}
	return result;
}

module.exports = {
	getYaml : function(obj) {
		yaml = '---\n';
		traverse(obj,'',0);
		return yaml;
	}
};