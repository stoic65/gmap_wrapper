var request = require('request');

//Assigning the key to the object
function mapWrapper(key)
{
	this.key = key;
}
//Function for finding geolocation
mapWrapper.prototype.getGeolocation = function(opts,callback)
{
	//Address is the only parameter which should not be null
	if(!opts.address){
		callback(new Error("Address can't be null"));
		return;
	}
	var options = 
	{
		url:"https://maps.googleapis.com/maps/api/geocode/json",
		qs:
		{
			address:opts.address,
			key:this.key,
			region:"in"
		}
	}

	request(options,function(err,response,body){
		callback(null,body);
	});
}



module.exports = function(key)
{
	var Obj = new mapWrapper(key);
	return Obj;
}