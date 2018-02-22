var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	var myQuery = { address:/^S/ };
	var newValues = { $set:{ name:"Minnie" }};

	db.collection("customers")
		.updateMany(myQuery, newValues, function(err, res){
			if(err)throw err;
			
			console.log(res.result.nModified + " document(s) updated");
			
			db.close();
		});
});