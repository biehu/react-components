import React from 'react';
import Slide from '../components/Slide/Slide';

export default class SlideExample extends React.Component {
	state = {
		data: [
			{
				id: 'slide1',
				imagePath: '/images/car.jpg'
			},
			{
				id: 'slide2',
				imagePath: '/images/car2.jpg'
			}
		]
	}
	
	render() {
		return <Slide data={this.state.data} />
	}
}
