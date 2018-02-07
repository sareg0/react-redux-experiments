// This is a React component that only dispatches actions to the Redux store.
// It does not read any data from store

import React, { Component } from 'react'
import { connect } from 'react-redux';

// import explicitly whatever actions you need
import { setIsLoggedOut } from '../../actions'
import './logout.css';

class Logout extends Component {
  handleLogoutClick = () => {

    // Because of `connect`, we are able to grab `dispatch` off props
    // Then, we can just call the exact action we need. No need to worry
    // about which actual parts of Redux store to update. The action will
    // delegate as needed.
    this.props.dispatch(setIsLoggedOut())
  }

  render () {
    return (
      <div className="logout">
        <button
          className="logout--button"
          onClick={this.handleLogoutClick}
        >
          Logout
        </button>
      </div>
    )
  }
}

// Since it only dispatches actions,
// it only needs a basic connection to redux, via `connect`
const connectedLogout = connect()(Logout)

export default connectedLogout
