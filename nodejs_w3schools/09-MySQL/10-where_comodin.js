var mysql = require('mysql');

var con = mysql.createConnection({
	host:'',
	user:'',
	password:'',
	database:''
});

con.connect(function(err){
	if(err)throw err;

	var sql = "SELECT * FROM customers WHERE address LIKE 'S%'";

	con.query(sql, function(err, result){
		if(err)throw err;

		console.log('\n\nresult=', result);
	});
});
