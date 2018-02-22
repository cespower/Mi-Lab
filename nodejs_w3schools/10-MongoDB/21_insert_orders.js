var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	var myObj = [
		{ _id:2, product_id:155, status:1 }
	];
		

	db.collection("orders").insertMany(myObj, function(err, res){
		if(err)throw err;
		console.log(res);
		db.close();
	});
});