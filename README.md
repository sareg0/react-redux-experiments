# Banana Pancakes *or: How I Learned to Stop Worrying and Love Redux*

This is a basic React app, that demonstrates various ways to keep track of application state.

Check out the different branches listed below, to explore the evolution of managing state in a 
growing React web application.

Start the app locally with `yarn start` and visit `localhost:3000`

*Created using Facebook's create-react-app*

## master

`$ git checkout master`

Default branch, that has no state management implemented.

Start here to see the basic React components and app structure.

## component-state-login

`$ git checkout component-state-login`

Branch with component state implemented.

This branch uses pure React to handle state in individual components.

See [the docs](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class) for
more information on adding basic state management to a component.

## redux-login

`$ git checkout redux-login`

Branch with Redux state management implemented.

This branch uses only Redux to handle global state. It's a bit of an overkill to use Redux for this
basic example, but it gives a pretty good picture of the differences between the different ways to
handle state in your web application.
