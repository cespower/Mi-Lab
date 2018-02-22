import React from 'react';

class Count extends React.Component{
	static propTypes = {
		total:React.PropTypes.number
	};

	state = {
		count: this.props.total
	};

	handleClick = (event) => {
		this.setState({count: parseInt(this.state.count) + 1});
	};

	render(){
		return <small onClick={this.handleClick}>Contador: {this.state.count}</small>
	}
};

export default Count;