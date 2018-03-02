import React from 'react';
import ReactDOM from 'react-dom';
//import Tasks from './tasks';
import Task from './task';
import Header from './header';
import Content from './content';

class ToDo extends React.Component{

	componentDidMount(){
		const el = ReactDOM.findDOMNode(this.refs.first);
		console.log(el);
	}

	render(){
		return (
			<div>
				<Header />
				<Content>
					<Task ref='first' name='Introduction' done />
					<Task name='Chapter 1 - First component' done />
					<Task name='Chapter 2 - Properties' />
					<Task />
				</Content>
				<footer>Copyright...</footer>
			</div>
		)
	}
};

export default ToDo;