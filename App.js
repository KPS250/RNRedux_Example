import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Router from './utils/Router'
import {store} from './store/index'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
