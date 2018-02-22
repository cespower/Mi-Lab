var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	db.collection("customers").findOne({}, function(err, result){
		if(err)throw err;
		console.log(result);
		console.log("\n");
		console.log(result.name);
		db.close();
	});
});