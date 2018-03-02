import React from 'react';
import reactMixin from 'react-mixin';

import MixinES from './mixin.es.js';
import MixinFR from './mixin.fr.js';

class HelloMixin extends React.Component{
	componentDidMount(){
		console.log('Hello world');
	}

	render(){
		return(
			<span>Hello Mixin...</span>
		)
	}
}

reactMixin(HelloMixin.prototype, MixinES);
reactMixin(HelloMixin.prototype, MixinFR);

export default HelloMixin;

/*const HelloMixin = React.createClass({
	mixins:[MixinES, MixinFR],

	componentDidMount: function(){
		console.log('Hello world');
	},

	render:function(){
		return(
			<span>Hello Mixin...</span>
		)
	}
});
*/
