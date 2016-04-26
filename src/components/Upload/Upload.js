import React from 'react';

export default class Upload extends React.Component {
	state = {
		dataUrl: null,
		type: null,
		filename: null
	}
	
	handleSubmit(e) {
		e.preventDefault();
	}
	
	handleChange(e) {
		var file = e.target.files[0];
		
		this.setState({type: file.type});
		this.setState({filename: file.name});
		
		var reader = new FileReader();
		reader.onload = (upload) => {
			this.setState({dataUrl: upload.target.result});
		}
		reader.readAsDataURL(file);
	}
	
	render() {
		return (
			<div>
				<form encType="multipart-formdata" onSubmit={this.handleSubmit}>
					<input type="file" onChange={this.handleChange.bind(this)} />
				</form>
				
				<div>
					<h1>File Info</h1>
					<p>{this.state.filename}</p>
					<p>{this.state.type}</p>
					<p>{this.state.dataUrl}</p>
				</div>
				
			</div>
		);
	}
}
