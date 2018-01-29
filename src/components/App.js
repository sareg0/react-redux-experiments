import React, { Component } from 'react'
import './App.css'
import Header from './header/header'
import MainBody from './mainBody/mainBody'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />

        <MainBody />
      </div>
    )
  }
}

export default App
