var nodemailer = require('nodemailer');

console.log('intentando enviar correo...');

var transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'',
		pass:''
	}
});

var mailOptions = {
	from:'',
	to:'',//para mas de un receptor: 'correo@dir.com, crroe2@dir.net'
	subject:'Sending Email using Node.js',
	text:'That was easy!'
	//Para envio de HTML= html:'codigo html'
};

transporter.sendMail(
	mailOptions,
	function(error, info){
		if(error){
			console.log(error);
			console.log(error.message);
		}else{
			console.log('Email sent: ' + info.response);
		}
	}
);
