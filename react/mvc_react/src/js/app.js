import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SPARouter from 'spa-router';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Model from './model/task';

class App extends Component {
	constructor(){
		super();
		
		this.state = {
			context: 'all',
			pending: 0
		};
	}

	componentDidMount(){
		Model.observe(function(state){
			this.setState({ pending: Model.active().length });
		}.bind(this));

		SPARouter.listen({
			'/': this.setState.bind(this, { context: 'all' }),
			'/active': this.setState.bind(this, { context: 'active' }),
			'/completed': this.setState.bind(this, { context: 'completed' })
		});

		SPARouter.path('');
	}

	render(){
		return(
			<div>
				<Header />
				<Content dataSource={Model[this.state.context]()} />
				<Footer context={this.state.context} pending={this.state.pending} />
			</div>
		)
	}
};

export default App;

ReactDOM.render(<App />, document.getElementById('todoapp'));