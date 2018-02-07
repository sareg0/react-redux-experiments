// This React component has a component state, that keeps track of
// whether or not a user is logged in
// The state here is **only** defined for this component.

import React, { Component } from 'react'
import './App.css'
import Login from './login/login'
import Logout from './logout/logout'
import Header from './header/header'
import Ingredients from './ingredients/ingredients'

class App extends Component {
  constructor () {
    super()
    this._logIn = this._logIn.bind(this)
    this._logOut = this._logOut.bind(this)

    // This sets the initial state, when the component is first rendered
    this.state = {
      isLoggedIn: false
    }
  }

  // Even though we're passing this function to the child component,
  // when we call `this.setState`, it will update *this* component's state
  _logIn () {
    this.setState({ // `setState` is an internal React function
      isLoggedIn: true
    })
  }

  _logOut () {
    this.setState({ // `setState` is an internal React function
      isLoggedIn: false
    })
  }

  render () {
    return (
      <div className="App">

        {/* Here we pass a piece of this component's state as a prop to child component */}
        <Header isLoggedIn={this.state.isLoggedIn}/>
        <div className="app--body">
          {
            this.state.isLoggedIn
            ? <div className="container"><Logout callback={this._logOut}/><Ingredients/></div>
            : <Login callback={this._logIn}/>
          }
        </div>
      </div>
    )
  }
}

export default App
