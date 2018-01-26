import React, { Component } from 'react'
import './App.css'
import Login from './components/login/login'
import Header from './components/header/header'
import Ingredients from './components/ingredients/ingredients'

class App extends Component {
  constructor () {
    super()
    this._logIn = this._logIn.bind(this)

    this.state = {
      isLoggedIn: false
    }
  }

  _logIn () {
    this.setState({
      isLoggedIn: true
    })
  }

  render () {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn}/>
        <div className="app--body">
          {
            this.state.isLoggedIn
            ? <Ingredients/>
            : <Login callback={this._logIn}/>
          }
        </div>
      </div>
    )
  }
}

export default App
