import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello-example-1';
import Messages from './components/messages';
import Link from './components/link';
import ToDo from './components/todo';
import Image from './components/image';
import Count from './components/count';
import Heroes from './components/heroes'
import HelloMixin from './components/mixin.hello';
import PureRenderMixin from './components/hello.pure_render_mixin';
import MomentWrapper from './components/moment_wrapper';
import Cart from './components/cart';
import Cart2 from './components/cart2';
import HelloStateless from './components/hello-stateless';

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
				<hr />
				<HelloMixin />
				<hr />
				<PureRenderMixin />
				<hr />
				<MomentWrapper format="YYYY/MM/DD" /><br />
				<MomentWrapper date={new Date("04/06/1983")} format="DD-MM-YYYY" />
				<hr />
				<Cart />
				<hr />
				<Cart2 />
				<hr />
				<HelloStateless caption={'CesPowerMetal'} />
			</div>
		)
	}
};

ReactDOM.render(<App />, document.getElementById('container'));