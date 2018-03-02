import React from 'react';

class Product extends React.Component{
	static propTypes = {
		id: React.PropTypes.number.isRequired,
		name: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func.isRequired
	};

	render(){
		return(
			<li onClick={this.props.onClick.bind(null, this.props.id)}>
				{this.props.name}
			</li>
		);
	}
};

export default Product;