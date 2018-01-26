import React, { Component } from 'react'
import './login.css';


class Login extends Component {
  render () {
    return (
      <div className="login">
        <div className="login--name-input">
          <label>What, pray tell, is your name?</label>
          <input type="text"/>
        </div>

        <button
          className="login--button"
          onClick={this.props.callback}
        >
          Login
        </button>
      </div>
    )
  }
}

export default Login
