import React, { Component } from 'react';
import './logout.css';

class Logout extends Component {

  render () {
    return (
      <div className="logout">
        <button
          className="logout--button"
          // this simply calls whatever function we passed in as a prop
          onClick={this.props.callback}
        >
          Logout
        </button>
      </div>
    )
  }
}

export default Logout
