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

	var sql = "INSERT INTO customers(name, address)VALUES('Michelle', 'Blue Village 1')";

	con.query(sql, function(err, result){
		if(err)throw err;

		console.log("1 record inserted, ID: " + result.insertId);

		console.log('\n\nresult=', result);
	});
});
