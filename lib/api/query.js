var crypto = require('crypto');

var DOMAIN = 'webservices.amazon.com';

var generateSignature = function(stringToSign, awsSecret) {
	var hmac = crypto.createHmac('sha256', awsSecret);
	var signature = hmac.update(stringToSign).digest('base64');

	return signature;
};


module.exports = function(operation, query, params, credentials){
	var parts = [];

	if (!credentials || !credentials.awsId ||  !credentials.awsSecret) {
		throw new Error('Missing credentials');
	}

	parts.push('Operation=' + encodeURIComponent(operation));
	parts.push('Timestamp=' + encodeURIComponent((new Date()).toISOString()));
	parts.push('AWSAccessKeyId=' + encodeURIComponent(credentials.awsId));
	parts.push('Version=2013-08-01');

	if (credentials.awsTag) {
		parts.push('AssociateTag=' + encodeURIComponent(credentials.awsTag));
	}

	for (var param in params) {
		if (query[param]) {
			parts.push(param + '=' + encodeURIComponent(query[param]));
		}
	}

	var unsignedString = parts.sort().join('&');

	var signature = encodeURIComponent(generateSignature('GET\n' + DOMAIN + '\n/onca/xml\n' + unsignedString, credentials.awsSecret)).replace(/\+/g, '%2B');

	return 'http://' + DOMAIN + '/onca/xml?' + unsignedString + '&Signature=' + signature;

};
