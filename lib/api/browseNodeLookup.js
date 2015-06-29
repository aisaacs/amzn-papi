var request = require('request');
var queryMaker = require('./query.js');

var operation = 'BrowseNodeLookup';

var params = {
	BrowseNodeId: {
		type: String,
		required: true
	},
	ResponseGroup: {
		type: String,
		required: false,
		valid: ['MostGifted', 'NewReleases', 'MostWishedFor', 'TopSellers'],
		default: 'Large'
	}
};

module.exports = {
	operation: operation,
	getUrl: function(query, credentials) {
		return queryMaker(operation, query, params, credentials);
	},
	responseParser: function(response) {
		return response.BrowseNodeLookupResponse.BrowseNodes[0].BrowseNode[0];
	}
};

