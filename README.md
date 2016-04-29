# gmap_wrapper
Simple google map wrapper for Geolocation,Reverse geolocation and navigation

Before using this You will need to get a key.

To Get a key visit

https://developers.google.com/maps/documentation/geocoding/get-api-key#get-an-api-key

Example :

```javascript
gmap = require('./gmap_wrapper');

obj = gmap("your_key");
obj.getGeolocation(
	{
		address:"Delhi"
	}
	,function(err,data){
	console.log(data);
});

```
