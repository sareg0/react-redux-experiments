// A very basic reducer.
// The main purpose of a reducer is simply to update the Redux store.
// It listens for a specified action type, then updates store as needed.

// You can set an default state here, for when the app first loads
const initialState = {
  isLoggedIn: false,
}

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_LOGGED_IN':
      return {
        isLoggedIn: true,
      }
    default:
      return state
  }
}

// Redux will wrap the returned store in this file under `authentication`
// The final store will look like this:

// {
//   authentication: {
//     isLoggedIn: true,
//   }
// }

export default authentication
