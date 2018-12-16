import React, {Component} from 'react';
import Navigation from './Navigation'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import reducers from './../reducers/index.js'

class App extends React.Component {
  render(){
    return(
      <Navigation />
    )
  }
}

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk ))
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

App.store = store;

class Application extends React.Component {

  render() {
    return <Provider store={store}>
      <App/>
    </Provider>;
  }
}

export default Application;
