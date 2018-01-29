import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <h1 className="header--title">Welcome to Banana Pancakes</h1>
        <p>Welcome!</p>
      </header>
    )
  }
}

export default Header
