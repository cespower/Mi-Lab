var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	var myObj = [
		{_id:154, name:"Chocolate Heaven"},
		{_id:155, name:"Tasty Lemon"},
		{_id:156, name:"Vanilla Dream"}
	];
		

	db.collection("products").insertMany(myObj, function(err, res){
		if(err)throw err;
		console.log(res);
		db.close();
	});
});