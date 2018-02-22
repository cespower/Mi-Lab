var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	db.collection("customers").find({}).toArray(function(err, result){
		if(err)throw err;
		
		console.log(result);
		
		db.close();
	});
});