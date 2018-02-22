var mysql = require('mysql');

var con = mysql.createConnection({
	host:'',
	user:'',
	password:'',
	database:''
});

con.connect(function(err){
	if(err)throw err;

	var sql = "SELECT u.name AS user, p.name AS favorite FROM users u JOIN products p ON u.favorite_product=p.id";

	con.query(sql, function(err, result){
		if(err)throw err;
		console.log(result);
	});
});
