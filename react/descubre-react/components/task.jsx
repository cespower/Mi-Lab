import React from 'react';

class Task extends React.Component{
	static propTypes = {
		name: React.PropTypes.string.isRequired,
		done: React.PropTypes.bool
	};

	static defaultProps = {
		/*name: 'Unknown task',*/
		done: false
	};

	state = {
		updated:false
	};

	handleClick = (event) => {
		this.setState({updated:true});
	};

	render(){
		return(
			<li className={this.props.done ? 'done' : null } onClick={this.handleClick}>
				<input type="checkbox" checked={this.props.done ? 'checked' : null } />
				{ this.props.name } 
				{ this.state.updated ? <small> Updated...</small> : null }
			</li>
		)
	}
};

export default Task;
