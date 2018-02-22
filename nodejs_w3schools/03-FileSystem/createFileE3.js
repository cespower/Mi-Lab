var fs = require('fs');

fs.writeFile(
	'myNewFile3.txt', 
	'Hello content, new content!', 
	function(err){
		if(err)throw err;
		console.log('Saved!');
	}
);