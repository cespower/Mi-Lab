var fs = require('fs');

fs.writeFile('myNewFile3.txt', 'This is my text', function(err){
	if(err)throw err;
	console.log('Replaced!');
});