import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route}  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import TabExample from './examples/TabExample';
import SlideExample from './examples/SlideExample';
import Modal from './examples/ModalExample';
import Form from './examples/FormExample';
import Upload from './examples/UploadExample';
import Dropdown from './examples/DropdownExample';

const history = createBrowserHistory();

ReactDOM.render(	
    <Router history={history}>
		<Route path="/tab" component={TabExample} />
		<Route path="/slide" component={SlideExample} />
		<Route path="/modal" component={Modal} />
		<Route path="/form" component={Form} />
		<Route path="/upload" component={Upload} />
		<Route path="/dropdown" component={Dropdown} />
	</Router>,
    document.getElementById('root')
);