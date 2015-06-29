var request = require('request');
var parseXML = require('xml2js').parseString;

module.exports.request = function(url) {
	return new Promise(function(resolve, reject) {
		request(url, function(err, response) {
			if (err) {
				reject(err);
			} else {
				parseXML(response.body, function(err, parsed) {
					if (err) {
						reject(err);
					} else {
						resolve(parsed);
					}
				});
			}
		});
	});
};
