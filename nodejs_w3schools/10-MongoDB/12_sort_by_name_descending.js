var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	var mySort = { name:-1 };

	db.collection("customers")
		.find()
		.sort(mySort)
		.toArray(function(err, result){
			if(err)throw err;
			
			//console.log(result);
			for(var i=0; i<result.length; i++){
				console.log("*************************************");
				console.log(i, result[i]);
				/*
				console.log('_id: ' + result[i]._id);
				console.log('name: ' + result[i].name);
				console.log('address: ' + result[i].address);
				*/
			}

			db.close();
		});
});