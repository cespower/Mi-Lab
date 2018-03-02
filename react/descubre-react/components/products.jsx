import React from 'react';

class Products extends React.Component{
	static propTypes = {
		store: React.PropTypes.array.isRequired,
		onClick: React.PropTypes.func.isRequired
	};

	render(){
		return(
			<ul>
				{
					this.props.store.map(function(product, index){
						return(
							<li onClick={this.props.onClick.bind(null, product.id)}>
								{product.name}
							</li>
						);
					}.bind(this))
				}
			</ul>
		)
	};
};

export default Products;