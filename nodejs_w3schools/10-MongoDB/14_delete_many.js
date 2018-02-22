var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	var myQuery = { address:/^O/ };

	db.collection("customers")
		.deleteMany(myQuery, function(err, obj){
			if(err)throw err;
			
			console.log(obj.result.n + " document(s) deleted");
			
			db.close();
		});
});