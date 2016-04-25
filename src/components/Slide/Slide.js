import React from 'react';
import styles from './slide.css';

export default class AppSlide extends React.Component {
	state = {
		currentSlide: 0
	}
	
	toggleNext() {
		var current = this.state.currentSlide;
		var next = current + 1;
		
		if (next > this.props.data.length - 1) {
			next = 0;
		}
		
		this.setState({currentSlide: next});
	}
	
	togglePrev() {
		var current = this.state.currentSlide;
		var prev = current - 1;
		if (prev < 0) {
			prev = this.props.data.length - 1;
		}
		
		this.setState({currentSlide: prev});
	}
	
	render() {
		var slideNodes = this.props.data.map((slideNode, index) => {
			var slideNodeClassName = this.state.currentSlide === index ? 'slide-active' : 'slide'; 
			return (
				<div key={index} className={slideNodeClassName}>
					<img src={slideNode.imagePath}  />
				</div>
			);
		});
		
		return (
			<div className="slideWrap">
				<div className="slides">{slideNodes}</div>
				<div className="controls">
			        <div className="toggle toggle-prev" onClick={this.togglePrev.bind(this)}>Prev</div>
			        <div className="toggle toggle-next" onClick={this.toggleNext.bind(this)}>Next</div>
			    </div>
			</div>
		);
	}
};
