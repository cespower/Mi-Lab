var mysql = require('mysql');

var con = mysql.createConnection({
	host:'',
	user:'',
	password:'',
	database:''
});

con.connect(function(err){
	if(err)throw err;

	var name = 'Amy';
	var adr = 'Mountain 21';
	var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";

	con.query(sql, [name, adr], function(err, result){
		if(err)throw err;

		console.log('\n\nresult=', result);
	});
});
