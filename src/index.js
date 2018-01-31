import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'

// react imports index.js by default from any directory
import combinedReducers from './reducers'

import './index.css'
import App from './components/App'

// 'createStore' is boilerplate for initializing Redux
// Takes the combined reducers as an arg
let store = createStore(
  combinedReducers,

  // For use with Chrome extension 'Redux Dev Tools'
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// More Redux boilerplate... wrap your app in <Provider>
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
