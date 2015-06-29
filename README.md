Amazon Product Advertisment API
===============================

This library allows you to access the [Amazon Product Advertising API](https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html) from your node.js application.

Usage
-----

Install the library with

`npm install amzn-papi`

Require the libray in your application

`var amazon = require('amzn-papi')`

Then instantiate a client:

```
var client = amazon.createClient({
  awsId: [YOUR AMAZON AWS ID],
  awsSecret: [YOUR AMAZON SECRET],
  awsTag: [YOUR AFFILIATE TAG]
});
```

You can now refer to the Amazon API docs for available methods and available parameters.
Each method will return a Promise.

For example:

```
client.ItemLookup({
	ItemId: 'B000BIPMC2',
	ResponseGroup: 'ItemAttributes'
}).then(function(result){
	console.log(result)
}).catch(function(error){
	console.log(err.stack);
});
```

Currently the implementer methods are:
	* [BrowseNodeLookup](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/BrowseNodeLookup.html)
	* [ItemLookup](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/ItemLookup.html)
	* [ItemSearch](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/ItemSearch.html)
	* [SimilarityLookup](http://docs.aws.amazon.com/AWSECommerceService/latest/DG/SimilarityLookup.html)

All methods related to Cart are not yet implemented - pull requests are welcome :)

