// This is a boiler plate file for setting up the Redux store.
// Any new reducers created should be added to the `combineReducers` list

import { combineReducers } from 'redux'
import authentication from './authentication'

const reducers = combineReducers({
  authentication
})

export default reducers
