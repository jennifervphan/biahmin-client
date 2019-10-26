import React, { Component } from 'react';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout';

class Register extends Component {
  constructor(props){
    super(props);
    this.formRef = React.createRef();
    this.state = { username:"",email:"", password:"", confirmPassword:""};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username= this.state.username;
    const email= this.state.email;
    const password= this.state.password;
    const confirmPassword= this.state.confirmPassword;
    this.service.signup(username, email, password, confirmPassword)
    .then(response => {
      console.log(response)
        this.setState({
            username: "", 
            email:"",
            password: "",
            confirmPassword:""
        });

        this.props.history.push('/profile')
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      
  render(){
    return(
      <Mainlayout>
        <div className="loginPage">
          <div className="signupForm">
          <h3>Register</h3>
          <form className="loginInput" ref={this.formRef} onSubmit={this.handleFormSubmit}>
            <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
            
            <input placeholder="Email" type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
            
            <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            
            <input placeholder="Confirm password" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={ e => this.handleChange(e)} />
            
            <button className="submitBtn" type="submit">Register</button>
          </form>
    
          <p>Already have account? 
              <Link to={"/login"} style={{ color: 'rgb(5, 5, 5)', textDecoration:"underline" }}> Login</Link>
          </p>
          </div>
        </div>
      </Mainlayout>
    )
  }
}

export default Register