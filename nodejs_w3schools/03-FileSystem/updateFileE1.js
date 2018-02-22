var fs = require('fs');

fs.appendFile('myNewFile1.txt', '\nThis is my text.\n', function(err){
	if(err)throw err;
	console.log('Updated!')
});