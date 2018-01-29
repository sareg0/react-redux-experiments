import React, { Component } from 'react'
import './login.css'

class Login extends Component {

  onLoginClick = () => {
    console.log("Ye ole LogIn button hath been clicked")
  }

  render () {
    return (
      <div className="login">
        <button
          className="login--button"
          onClick={this.onLoginClick}
        >
          Login
        </button>
      </div>
    )
  }
}

export default Login
