import React, { Component } from 'react';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: ''};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username= this.state.username;
    const password=this.state.password;
    this.service.login(username,password)
    .then( response => {
      console.log(response)
        this.setState({ username: "", 
                        password: ""
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
      <div className="loginPage">
        <div className="loginForm">
        <h3>Log in</h3>
        <form className="loginInput" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>

          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <button className="submitBtn" type="submit">Log in</button>
        </form>
        <p>Don't have account? 
        <Link to={"/register"} style={{ color: 'rgb(5, 5, 5)', textDecoration:"underline" }}> Register</Link>
        </p>
        </div>
      </div>
    )
  }
}

export default Login