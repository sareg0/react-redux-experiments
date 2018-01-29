// This is a React component that only dispatches actions to the Redux store.
// It does not read any data from store

import React, { Component } from 'react'
import { connect } from 'react-redux';

// import explicitly whatever actions you need
import { setIsLoggedIn } from '../../actions'
import './login.css';

class Login extends Component {
  handleLoginClick = () => {

    // Because of `connect`, we are able to grab `dispatch` off props
    // Then, we can just call the exact action we need. No need to worry
    // about which actual parts of Redux store to update. The action will
    // delegate as needed.
    this.props.dispatch(setIsLoggedIn(true))
  }

  render () {
    return (
      <div className="login">
        <div className="login--name-input">
          <label>What, pray tell, is your name?</label>
          <input type="text"/>
        </div>

        <button
          className="login--button"
          onClick={this.handleLoginClick}
        >
          Login
        </button>
      </div>
    )
  }
}

// Since it only dispatches actions,
// it only needs a basic connection to redux, via `connect`
const connectedLogin = connect()(Login)

export default connectedLogin
