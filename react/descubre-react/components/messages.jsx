import React from 'react';
import Hello2 from './hello-example-2';

class Messages extends React.Component{
	render(){
		return (
			<div>
				<h1>Hello React</h1>
				<Hello2 name='CesarIn' />
			</div>
		)
	}
};

export default Messages;