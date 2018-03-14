import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			data: props.data,
			editing: false,
			value: props.data.name
		};

		this.handleToggle = this.handleToggle.bind(this);
		this.handleDestroy = this.handleDestroy.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleToggle(event){
		try{
			let dataAux = this.state.data;//Object.assign({}, this.state.data);
			dataAux.completed = !this.state.data.completed;

			this.setState({data: dataAux});
		}catch(e){
			console.log(e);
		}
	};

	handleEdit(event){
		this.setState({ editing: true });
	};

	handleDestroy(event){
		this.state.data.destroy();
	};

	handleKeyDown(event){
		if(event.keyCode === 13){
			this.state.data.name = event.target.value;
			this.setState({ editing: false });
		}
	};

	handleChange(event){
		this.setState({ value: event.target.value });
	};

	render(){
		let className = '';
		if(this.state.data.completed){ className += ' completed' }
		if(this.state.editing){ className += ' editing' }

		return(
			<li className={className}>
				<div className='list-group-item'>
					<div className="row">
						<div className="col-sm">
							<input
								className='form-check-inputl'
								checked={this.state.data.completed}
								onChange={this.handleToggle}
								type='checkbox'
								/>
							<label onDoubleClick={this.handleEdit}>{this.state.value}</label>
						</div>
						<div className="col-sm">
							<button className='btn btn-danger btn-sm' onClick={this.handleDestroy}>
							<span className="fa fa-trash"></span> Trash
							</button>
						</div>
						<div className="col-sm">
							<input
								className='form-control'
								onChange={this.handleChange}
								onKeyDown={this.handleKeyDown}
								type='text'
								value={this.state.value}
								/>
						</div>

					</div>
				</div>
			</li>
		)
	}
};

Todo.propTypes = {
	data: PropTypes.object
};

export default Todo;