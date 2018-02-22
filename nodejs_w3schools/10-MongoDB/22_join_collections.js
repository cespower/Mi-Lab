var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://10.108.156.155:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err)throw err;

	db.collection("orders").aggregate(
		[{
			$lookup:
			{
				from:'products',
				localField:'product_id',
				foreignField:'_id',
				as:'orderDetails'
			}
		}], 
		function(err, res){
			if(err)throw err;
			
			console.log(JSON.stringify(res));

			db.close();
		}
	);
});