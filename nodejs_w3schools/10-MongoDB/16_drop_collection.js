var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	db.dropCollection("customers", function(err, delOk){
			if(err)throw err;
			
			if(delOk)
				console.log("Collection deleted");
			
			db.close();
		});
});