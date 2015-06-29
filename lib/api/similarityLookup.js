var request = require('request');
var queryMaker = require('./query.js');

var operation = 'SimilarityLookup';

var params = {
	Condition: {
		type: String,
		required: false
	},
	ItemId: {
		type: String,
		required: true
	},
	MerchantId: {
		type: String,
		required: false,
		valid: 'Amazon'
	},
	SimilarityType: {
		type: String,
		required: false
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

