import React from 'react';
import Form, {Input} from '../components/Form/Form';

export default class FormExample extends React.Component {
	handleSubmit(params) {
		console.log(params);
	}
	
	render() {
		return (
			<Form submit={this.handleSubmit}>
				<div className="form-group">
					<label>Email</label>
					<Input
						name="email" 
						validations="isEmail" 
						validationErrors="this is not a valid email"
					/>
				</div>
				<div className="form-group">
					<label>QQ</label>
					<Input 
						name="qq" 
						validations="isNumber" 
						validationErrors="this is not a valid qq"
					/>
				</div>
			</Form>
		);
	}
};
