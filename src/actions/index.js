// Actions are what are directly called in your React components.
// Their main purpose is to send the correct data to the correct reducer.
// Conventionally, actions do the data manipulation, and send the results
// to a reducer. A reducer's only job then is to update state.

// use a verb for naming actions
export const setIsLoggedIn = () => {
  return {
    type: 'SET_IS_LOGGED_IN',
    // this action receives no data, only the action type
    // otherwise the data would go here, like
    // `true`
  }
}
