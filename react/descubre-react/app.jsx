import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello-example-1';
import Messages from './components/messages';
import Link from './components/link';
import ToDo from './components/todo';
import Image from './components/image';
import Count from './components/count';
import Heroes from './components/heroes.jsx'

//ReactDOM.render(, document.getElementById('container'));

class App extends React.Component{
	render(){
		const url = 'http://soyjavi.com';

		return(
			<div>
				<Hello name='CesPowerMetal' />
				<hr />
				<Messages />
				<hr />
				<nav>
					<Link url={url} caption='My site' />
					<br />
					<Link url='https://github.com/soyjavi' caption='My github' />
				</nav>
				<hr />
				<ToDo />
				<hr />
				<Image src="React-JS_logo.png" alt="Amazing Image" />
				<hr />
				<Count total='0' />
				<hr />
				<Heroes />
			</div>
		)
	}
};

ReactDOM.render(<App />, document.getElementById('container'));