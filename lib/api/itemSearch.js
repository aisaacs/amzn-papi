var request = require('request');
var queryMaker = require('./query.js');

var operation = 'ItemSearch';

var params = {
	Actor: {
		required: false
	},
	Artist: {
		required: false
	},
	AudienceRating: {
		required: false
	},
	Author: {
		required: false
	},
	Availability: {
		required: true
	},
	Brand: {
		required: false
	},
	BrowseNode: {
		required: false
	},
	Composer: {
		required: false
	},
	Condition: {
		required: false
	},
	Conductor: {
		required: false
	},
	Director: {
		required: false
	},
	IncludeReviewsSummary: {
		required: false
	},
	ItemPage: {
		required: false
	},
	Keywords: {
		required: false
	},
	Manufacturer: {
		required: false
	},
	MaximumPrice: {
		required: false
	},
	MerchantId: {
		required: false
	},
	MinimumPrice: {
		required: false
	},
	MinPercentageOff: {
		required: false
	},
	Orchestra: {
		required: false
	},
	Power: {
		required: false
	},
	Publisher: {
		required: false
	},
	RelatedItemPage: {
		required: false
	},
	RelationshipType: {
		required: false
	},
	SearchIndex: {
		required: true
	},
	Sort: {
		required: false
	},
	Title: {
		required: false
	},
	TruncateReviewsAt: {
		required: false
	},
	VariationPage: {
		required: false
	},
	ResponseGroup: {
		required: false
	}
};

module.exports = {
	operation: operation,
	getUrl: function(query, credentials) {
		return queryMaker(operation, query, params, credentials);
	},
	responseParser: function(response) {
		return response;
	}
};

