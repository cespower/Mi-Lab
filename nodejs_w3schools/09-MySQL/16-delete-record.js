var mysql = require('mysql');

var con = mysql.createConnection({
	host:'',
	user:'',
	password:'',
	database:''
});

con.connect(function(err){
	if(err)throw err;

	var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";

	con.query(sql, function(err, result){
		if(err)throw err;

		console.log('The number of records deleted: ', result.affectedRows);
	});
});
