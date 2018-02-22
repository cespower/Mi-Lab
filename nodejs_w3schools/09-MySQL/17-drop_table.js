var mysql = require('mysql');

var con = mysql.createConnection({
	host:'',
	user:'',
	password:'',
	database:''
});

con.connect(function(err){
	if(err)throw err;

	var sql = "DROP TABLE tabla_temp_xxx";

	con.query(sql, function(err, result){
		if(err)throw err;

		console.log('Table deleted');
		console.log('result->', result);
	});
});
