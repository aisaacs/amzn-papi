var comms = require('./comms');

var makeRequest = function(credentials, operation) {
	return function(query) {
		return new Promise(function(resolve, reject) {
			comms.request(operation.getUrl(query, credentials))
				.then(function(response){
					try {
						resolve(operation.responseParser(response));
					} catch (parseError) {
						reject(parseError);
					}
				})
				.catch(reject);
		});
	};
};


var operations = [
	require('./api/itemLookup'),
	require('./api/itemSearch'),
	require('./api/browseNodeLookup')
];


module.exports = {
	createClient: function(credentials) {
		var client = {};
		operations.forEach(function(operation) {
			client[operation.operation] = makeRequest(credentials, operation);
		});
		return client;
	}
};
