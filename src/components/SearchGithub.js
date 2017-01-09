import React,{ Component ,PropTypes} from 'react';
import {browserHistory} from 'react-router';

class SearchGithub extends Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit( event ){
		event.preventDefault();
		const username = this.username.value;
		this.username.value = '';
		const path = `/profile/${username}`;
		/*this.context.router.push(path);*/
		browserHistory.push(path);
	}
	render(){
		console.log(this.context);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group col-sm-7">
						<input type="text" className="form-control" ref={ref=>{this.username=ref;}}/>
					</div>
					<div className="form-group col-sm-5">
						<button className="btn btn-primary">github搜索</button>
					</div>
				</form>
			</div>
		)
	}
}
SearchGithub.contextTypes = {
	router: PropTypes.object
}
export default SearchGithub;