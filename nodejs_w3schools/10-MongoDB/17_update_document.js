var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	var myQuery = { address:"Valley 345" };
	var newValues = { name:"Mickey", address:"Canyon 123" };

	db.collection("customers")
		.updateOne(myQuery, newValues, function(err, res){
			if(err)throw err;
			
			console.log("1 document updated");
			
			db.close();
		});
});