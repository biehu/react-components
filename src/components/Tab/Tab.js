import React from 'react';
import styles from './tab.css';

export default class Tab extends React.Component {
	static propTypes = {
		tabActive: React.PropTypes.number,
		onMount: React.PropTypes.func,
		onBeforeChange: React.PropTypes.func,
		onAfterChange: React.PropTypes.func
	}
	
	static defaultProps = {
		tabActive:  1
	}
	
	state = {
		tabActive: this.props.tabActive
	}
	
	componentDidMount() {
		var index = this.state.tabActive;
		var selectedPanel = this.refs['tab-panel'];
		var selectedMenu = this.refs[`tab-menu-${index}`];
		
		if (this.props.onMount) {
			this.props.onMount(index, selectedPanel, selectedMenu);
		}
	};
	
	componentWillReceiveProps(newProps) {
		if (newProps.tabActive && 
		    newProps.tabActive !== this.props.tabActive) {
				
		    this.setState({
		       tabActive: newProps.tabActive
		    });  	
	     }
	};
	
	setActive(index, e) {
		e.preventDefault();
		
		var onAfterChange = this.props.onAfterChange;
		var onBeforeChange = this.props.onBeforeChange;
		var selectedPanel = this.refs['tab-panel'];
		var selectedTabMenu = this.refs[`tab-menu-${index}`];
		var cancel;
		
		if (onBeforeChange) {
			cancel = onBeforeChange(index, selectedPanel, selectedTabMenu);
			if (cancel === false) return;
		}
		
		this.setState({tabActive: index},  function () {
		    if (onAfterChange) {
				onAfterChange(index, selectedPanel, selectedTabMenu);
			}	
		});
	};
	
	getMenuItems() {
		if (!Array.isArray(this.props.children)) {
			this.props.children = [this.props.children];
		}
		
		var menuItems = this.props.children
			.map((panel, index) => {
				var ref = `tab-menu-${index + 1}`;
				var title =  panel.props.title;
				return (
				    <li 
					   ref={ref} 
					   key={index} 
					   className={'tabs-menu-item ' + (this.state.tabActive === (index + 1) && 'is-active')}
				    >
					   <a onClick={this.setActive.bind(this, index + 1)}>
					       {title}
					   </a>
				   </li>
				);
			});
		return (
		  <nav className="tabs-navigation">
		      <ul className="tabs-menu">{menuItems}</ul>
		  </nav>
		);
	};
	
	getSelectedPanel() {
		var index = this.state.tabActive - 1;
		var panel = this.props.children[index];
		
		return (
		  <article ref='tab-panel' className='tab-panel'>
		      {panel}
		  </article>
		);
	}
	
	render() {
		return (
		  <div className="tabs">
		      {this.getMenuItems()}
			  {this.getSelectedPanel()}  
	      </div>
	    );
	};
};
