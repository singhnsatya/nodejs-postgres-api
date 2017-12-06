import React from 'react';
import { observer, inject } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {indigo800} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import List from './List';
import './home.css';

class Homes extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			age: '',
			gender: '',
			number: '',
			email: '',
			validEmail: false,
			errorText: '',
			formValid: false,
			open: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	componentWillMount() {
		$("#myTable").hide();
	}
	handleClick() {
		let data = {name: this.state.name, age: this.state.age, gender: this.state.gender, number: this.state.number, email: this.state.email};
		this.props.store.submitData(data)
		.then(res => {
			if(res.success) {
				this.setState({name: '', email: '', age: '', gender: '', number: '', open: true})		
			}
		})
	}
	handleInput(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({[name]: value}, () => {
			this.validateField(name, value)
		});
	}
	validateField(field, value) {
		if(field == "email") {
			let emailValid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value);
			emailValid == true ? this.setState({validEmail: true, errorText: null}, this.validForm) : this.setState({errorText: "Invalid Email"})
		}
	}
	validForm() {
		this.setState({formValid: this.state.validEmail})
	}
	handleReset() {
		this.setState({name: '', email: '', age: '', gender: '', number: ''})
	}
	render() {
		const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onClick={(e) => {this.setState({open: false})}}
      />]
		return (
			<div id="user-form">
			<p className="form-title">
			Enter your information:
			</p>
			<MuiThemeProvider>
			<TextField
      errorText=""
      floatingLabelText="Enter your name"
      name = "name"
      onChange = {this.handleInput}
      value={this.state.name}
    	/><br />
			<TextField
      errorText=""
      floatingLabelText="Enter your age"
      name = "age"
      value={this.state.age}
      onChange = {this.handleInput}
    	/><br />
			<TextField
      errorText=""
      floatingLabelText="Enter your gender"
      name = "gender"
      value={this.state.gender}
      onChange = {this.handleInput}
    	/><br />
			<TextField
      errorText=""
      floatingLabelText="Enter your contact number"
      name = "number"
      value={this.state.number}
      onChange = {this.handleInput}
    	/><br />
			<TextField
      errorText=""
      floatingLabelText="Enter your email"
      name = "email"
      errorText={this.state.errorText}
      onChange = {this.handleInput}
      value={this.state.email}
    	/><br />
    	<RaisedButton backgroundColor="#26C6DA" className="btn-submit" label="Submit" labelColor="#FFFFFF" onClick={this.handleClick}/>
    	<Dialog
          title="Thanks for your information."
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Data inserted successfully.
        </Dialog>
    	&nbsp;&nbsp;&nbsp;&nbsp;
    	<RaisedButton backgroundColor="#26C6DA" className="btn-reset" label="Reset" labelColor="#FFFFFF" onClick={this.handleReset}/>
			</MuiThemeProvider>
			</div>
		)
	}
}

const Home = inject('store')(observer(Homes))
export default Home;