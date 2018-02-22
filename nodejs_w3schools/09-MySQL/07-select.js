var mysql = require('mysql');

var con = mysql.createConnection({
	host:'',
	user:'',
	password:'',
	database:''
});

con.connect(function(err){
	if(err)throw err;

	console.log("Connected!");

	var sql = "SELECT * FROM customers";

	con.query(sql, function(err, result, fields){
		if(err)throw err;

		console.log('\n\nresult=', result);
	});
});
