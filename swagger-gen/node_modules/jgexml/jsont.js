'use strict';

var jpath = require('./jpath');

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function transform(obj,rules) {
	var objName = '$';
	var isArray = false;

	for (var n in obj) {
		objName = n;
		break;
	}

	var arrRules = [];

	for (var r in rules) {
		var rule = {};
		rule.rule = rules[r];
		rule.ruleName = r;
		rule.processed = false;
		arrRules.push(rule);
	}

	for (var r=arrRules.length-1;r>=0;r--) {
		var inner = arrRules[r].rule;

		if (arrRules[r].ruleName.indexOf('[*]') > 0) {
			isArray = true;
		}

		for (var o in obj) {
			var newObjName = objName;
			if (isArray) {
				newObjName = o;
			}
			var elements;
			if (typeof inner === 'function') {
				if (o == arrRules[r].ruleName) {
					elements = [inner(obj[arrRules[r].ruleName])];
				}
				else {
					elements = [];
				}
			}
			else {
				elements = inner.split(/[\{\}]+/);
			}

			for (var i=1;i<elements.length;i=i+2) {
				elements[i] = elements[i].replaceAll('$',arrRules[r].ruleName);
				elements[i] = elements[i].replaceAll('[*]','['+o+']'); //specify the current index
				elements[i] = elements[i].replaceAll('self','');
				elements[i] = jpath.fetchFromObject(obj,elements[i]);

				if (elements[i] == null) {
					elements = []; //abort
				}

				if (Array.isArray(elements[i])) {
					elements[i] = elements[i].join(''); // avoid commas being output
				}
			}
			if (elements.length>0) {
				obj[newObjName] = elements.join('');
			}
			if (!isArray) continue;
		}
		arrRules[r].processed = true;
	}
	if (Array.isArray(obj)) return obj[0]
	else return obj[objName];
}

module.exports = {
	transform : transform
};