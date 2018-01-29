import React, { Component } from 'react'
import './App.css'
import Login from './login/login'
import Header from './header/header'
import Ingredients from './ingredients/ingredients'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header/>

        <div className="app--body">
          <Login/>
          <Ingredients/>
        </div>
      </div>
    )
  }
}

export default App
