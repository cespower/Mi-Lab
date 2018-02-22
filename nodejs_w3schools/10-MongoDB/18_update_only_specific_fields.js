var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	var myQuery = { address:"Highwat 37" };
	var newValues = { $set:{ address:"Canyon 123" }};

	db.collection("customers")
		.updateOne(myQuery, newValues, function(err, res){
			if(err)throw err;
			
			console.log("1 document updated");
			
			db.close();
		});
});