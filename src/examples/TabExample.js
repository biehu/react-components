import React from 'react';
import Tab from '../components/Tab/Tab';

export default class TabExample extends React.Component {
	onMount(selectedIndex, selectedPanel, selectedTabMenu) {
		console.log('on mount, show' + selectedIndex);
	}
	
	onBeforeChange(selectedIndex, selectedPanel, selectedTabMenu) {
		console.log('before the tab ' + selectedIndex);
	}
	
	onAfterChange(selectedIndex, selectedPanel, selectedTabMenu) {
		console.log('after the tab ' + selectedIndex);
	}
	
	render() {
		return (
		    <Tab
			    tabActive={2}
				onBeforeChange={this.onBeforeChange}
				onAfterChange={this.onAfterChange}
				onMount={this.onMount}>
				<div title='tab1'>
				    <h2>Content1</h2>
				</div>
				<div title='tab2'>
                    <h2>Content2</h2>
                </div>
				<div title='tab3'>
                    <h2>Content3</h2>
                </div>
			</Tab>
		);
	}
}
