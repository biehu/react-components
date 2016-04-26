import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

export default class Dropdown extends React.Component {
	mounted = true
	handleDocumentClick = this.handleDocumentClick.bind(this)
	fireChangeEvent = this.fireChangeEvent.bind(this)
	
	state = {
		selected: this.props.value || {
			label: props.placeholder || 'select...',
			value: ''
		},
		isOpen: false
	}
	
	componentWillReceiveProps(newProps) {
		if (newProps.value && newProps.value !== this.state.selected) {
			this.setState({selected: newProps.value});
		}
	}
	
	componentDidMount() {
		document.addEventListener('click', this.handleDocumentClick, false);
	}
	
	componentWillUnmount() {
		this.mounted = false;
		document.removeEventListener('click', this.handleDocumentClick, false);
	}
	
	handleDocumentClick(e) {
		if (this.mounted) {
			if (!ReactDOM.findDOMNode(this).contains(event.target)) {
				this.setState({isOpen: false});
			}
		}
	}
	
	handleClick(e) {
		this.setState({
			isOpen: !this.state.isOpen
		});
		
		return false;
	}
	
	fireChangeEvent(newState) {
		if (newState.selected !== this.state.selected && 
			this.props.onChange) {
			
			this.props.onChange(newState.selected);		
		}
	}
	
	setValue(value, label) {
		var newState = {
			selected: {
				value,
				label
			},
			isOpen: false
		};
		
		this.fireChangeEvent(newState);
		this.setState(newState);
	}
	
	renderOption(option) {
		var optionClass = 'option' + (this.state.selected ? 'is-selected' : '');
		var value = option.value;
		var label = option.label;
		
		return (
			<div key={value}
				className={optionClass}
				onClick={this.setValue.bind(this, value, label)}>
				
				{label}
			</div>
		);
	}
	
	buildMenu() {
		var options = this.props.options;
		
		var ops = options.map((option) => {
			return this.renderOption(option);
		});
		
		return ops.length ? ops : 
			<div className="noresults">no options found</div>;
			
	}
	
	render() {
		var placeHolderValue = typeof this.state.selected === 'string' ?
			this.state.selected : this.state.selected.label;
		var value = (
			<div className="placeholder">{placeHolderValue}</div>
		);
		
		var menu = this.state.isOpen ?
			<div className="menu">{this.buildMenu()}</div> : null;
		var dropdownClass = 'root ' + (this.state.isOpen ? 'is-open' : '');
		
		return (
			<div className={dropdownClass}>
				<div className="control"
					onClick={this.handleClick.bind(this)}>
					
					{value}
					<span className="arrow" />	
				</div>
				{menu}
			</div>
		);
	}
	
	
}
