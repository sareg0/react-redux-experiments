import React, { Component } from 'react'
import './login.css';


class Login extends Component {
  render () {
    return (
      <div className="login">
        <button
          className="login--button"
          // this simply calls whatever function we passed in as a prop
          onClick={this.props.callback}
        >
          Login
        </button>
      </div>
    )
  }
}

export default Login
