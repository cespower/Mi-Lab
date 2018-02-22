var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	var myQuery = { address:"Highwat 37" };

	db.collection("customers")
		.deleteOne(myQuery, function(err, result){
			if(err)throw err;
			
			console.log("1 document deleted");
			
			db.close();
		});
});