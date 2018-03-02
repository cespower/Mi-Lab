//hello.pure_render_mixin
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class HelloPureRenderMixin extends React.Component{
	state = {
		message:'Hi!'
	};

	componentDidUpdate(){
		console.log('Component updated!');
	};

	handleClick = (value, event) => {
		console.log('click event', value);
		this.setState({ message:value });
	};

	render(){
		console.log('Component rendered!');
		return(
			<div>
				<h1>Greeting: {this.state.message}</h1>
				<button onClick={ this.handleClick.bind(null, 'Hi!') }>Hello</button>
				<button onClick={ this.handleClick.bind(null, 'Bye!') }>Goodbye</button>
			</div>
		) 
		//<div className={this.props.className}>foo</div>
	}
};

//reactMixin(HelloPureRenderMixin.prototype, PureRenderMixin);

export default HelloPureRenderMixin;