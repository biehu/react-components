import React from 'react';
import styles from './modal.css';

export default class Modal extends React.Component {
	static propTypes = {
		title:  React.PropTypes.string,
		message: React.PropTypes.string,
		alert: React.PropTypes.bool,
		confirmSumbitText: React.PropTypes.string,
		confirmSubmitSuc: React.PropTypes.func
	}
	
	static defaultProps = {
		title: 'title',
		message: 'content',
		alert: false,
		confirmSubmitText: 'save'
	}
	
	state = {
		alert: this.props.alert
	}
	
	handleClose() {
		this.setState({alert: false});
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			alert: nextProps.alert
		});
	}
	
	handleConfirm() {
		this.props.confirmSubmitSuc();
		this.handleClose();
	}
	
	render() {
		var alert, buttons;
		
		var {confirmSubmitText, title, message}  = this.props;
		
		if (confirmSubmitText) {  
			buttons = (
				<div>
					<div className="btn-confirm" onClick={this.handleConfirm.bind(this)}>
						{confirmSubmitText}
					</div>
					<div className="btn-cancel" onClick={this.handleClose.bind(this)}>取消</div>
				</div>
			);
		} else { 
			buttons = (
				<div className="btn-default" onClick={this.handleClose.bind(this)}>关闭</div>
			);
		}
		
		if (this.state.alert) {
			alert = (
				<div className="alert-wrap">
					<div className="alert-mask"></div>
					<div className="alert">
						<div className="alert-header">
							{title}
							<div className="alert-close" onClick={this.handleClose.bind(this)}>x</div>
						</div>
						<div className="alert-main">
							{message}
						</div>
						<div className="alert-footer">
							{buttons}
						</div>
						
					</div>
				</div>
			);
		}
		
		return  (
			<div>
				{alert}
			</div>
		);
	}
};
