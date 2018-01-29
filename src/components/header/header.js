// This React component has no component state defined

import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <h1 className="header--title">Welcome to Banana Pancakes</h1>

        {
          // Here, it simply reads whatever was passed in as a prop
          this.props.isLoggedIn
            ? <p>Welcome!</p>
            : <p>Please login.</p>
        }
      </header>
    )
  }
}

export default Header
