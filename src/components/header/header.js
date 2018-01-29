// This is a React component that only reads from the Redux store.
// It does not dispatch any actions

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './header.css'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <h1 className="header--title">Welcome to Banana Pancakes</h1>

        {
          this.props.isLoggedIn
            ? <p>Welcome!</p>
            : <p>Please login.</p>
        }
      </header>
    )
  }
}

// This is a predefined function that takes Redux state(store) and connects
// it to this component's props.
function mapStateToProps(state) {

  // This returns the "props" for the component
  return {
    isLoggedIn: state.authentication.isLoggedIn
  }
}

// Then we pass the `mapStateToProps` function to `connect`
// (don't ask why. you just do.)
const connectedHeader = connect(mapStateToProps)(Header)

export default connectedHeader
