// This is a React component that only reads from the Redux store.
// It does not dispatch any actions

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../login/login'
import Logout from '../logout/logout'
import Ingredients from '../ingredients/ingredients'

class mainBody extends Component {
  render () {
    return (
      <div className="main-body">
        {
          this.props.isLoggedIn
            ? <div><Logout/><Ingredients/></div>
            : <Login/>
        }
      </div>
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
const connectedMainBody = connect(mapStateToProps)(mainBody)


export default connectedMainBody
