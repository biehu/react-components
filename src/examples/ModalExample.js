import React from 'react';
import Modal from '../components/Modal/Modal';

export default class ModalExample extends React.Component {
	state = {
		alert: false
	}
	
	handleAlert = () => {
		this.setState({alert: true});
	}
	
	render() {
		return (
			<div>
				<button onClick={this.handleAlert}>弹窗</button>
				<Modal 
					title="alert title"
					message="this is an alert"
					alert={this.state.alert}
					confirmSumbitText="保存"
					confirmSubmitSuc={() =>console.log('干点啥！')}
				 />
			</div>
		);
	}
};
