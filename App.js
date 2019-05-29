import React, {Component} from 'react'
//import Counter from './Counter'

import { createStore } from 'redux'
import {Provider} from 'react-redux'

import Router from './utils/Router'
import {reducer} from './reducers/Reducer'

const store = createStore(reducer);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
     
    );
  }
}
