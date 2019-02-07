import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
      console.log(this.state)
    return (
      <div>
        <form>
          <label>Email:</label>
          <input type="email" name="email" onChange={this.handleLogin} />

          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleLogin} />
          <button>Login</button>
          <button>Register</button>
        </form>
      </div>
    );
  }
}
export default Login;
