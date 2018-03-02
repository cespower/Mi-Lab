var ProfilePage = React.createClass({
	propTypes:{
		userId: PropTypes.number.isRequired,
		user: PropTypes.object
	},

	render(){
		var { user } = this.props;
		return (<div>{user ? user.name : 'Loading'}</div>);
	}
});

ProfilePage = connectToStores(ProfilePage, [UserStore], props => ({
	user: UserStore.get(props.userId)
}));
