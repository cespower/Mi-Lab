'use strict';

function MiController(){
	var _this = this;

	_this.name = 'Ces';
	_this.email = 'ces@net.com';
	_this.welcomeMsg = function(){
		return "Bienvenido " + _this.name + ", tu correo es: " + _this.email;
	};
}

module.exports = MiController;