var request = require('request');
var queryMaker = require('./query.js');

var operation = 'ItemLookup';

var params = {
	Condition: {
		type: String,
		required: false
	},
	IdType: {
		type: String,
		required: false
	},
	IncludeReviewsSummary: {
		type: Boolean,
		required: false
	},
	ItemId: {
		type: String,
		required: true
	},
	MerchantId: {
		type: String,
		required: false
	},
	RelatedItemPage: {
		type: Number,
		required: false
	},
	RelationshipType: {
		type: String,
		required: false
	},
	SearchIndex: {
		type: String,
		required: false
	},
	TruncateReviewsAt: {
		type: Number,
		required: false
	},
	VariationPage: {
		type: String,
		required: false
	},
	ResponseGroup: {
		type: String,
		required: false,
		default: 'Large'
	}
};

module.exports = {
	operation: operation,
	getUrl: function(query, credentials) {
		return queryMaker(operation, query, params, credentials);
	},
	responseParser: function(response) {
		var base = response.ItemLookupResponse.Items[0];
		
		// Common single item case.
		if (typeof base.Item[1] === 'undefined') {
			return base.Item[0];
		}
		
		// Multiple items.
		return base.Item;
	}
};

