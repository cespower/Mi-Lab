var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	var query = {address:"Park Lane 38"};

	db.collection("customers")
		.find(query)
		.toArray(function(err, result){
			if(err)throw err;
			
			console.log(result);
			
			db.close();
		});
});