var mysql = require('mysql');

var con = mysql.createConnection({
	host:'',
	user:'',
	password:'',
	database:''
});

con.connect(function(err){
	if(err)throw err;

	var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";

	con.query(sql, function(err, result){
		if(err)throw err;
		console.log(result);
	});
});
