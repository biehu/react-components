import React from 'react';
import Dropdown from '../components/Dropdown/Dropdown';

export default class DropdownExample extends React.Component {
	onSelect = this.onSelect.bind(this)
	
	state = {
		selected: {
			value: 'two',
			label: 'two' 
		}
	}
	
	onSelect(option) {
		console.log('you selected', option.label);
		this.setState({selected: option});
	}
	
	render() {
		var options = [
			{value: 'one', label: 'one'},
			{value: 'two', label: 'two'}
		];
		var defaultOption = this.state.selected;
		
		return (
			<div>
				<Dropdown options={options} 
					onChange={this.onSelect}
					value={defaultOption}
					placeholder="select an option" />
			</div>
		);
	}
}

