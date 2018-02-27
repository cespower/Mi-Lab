webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('demoApp', []);

	//require('./directives');
	//require('./services');
	__webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(2);

	angular
		.module('demoApp')
			.controller('miController', __webpack_require__(4));

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

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

/***/ }
]);