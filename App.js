import React, {Component} from 'react'
import Counter from './Counter'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import Router from './utils/Router'

const initialState = {
  counter : 0,
}

const reducer = (state = initialState, action) =>{

  switch(action.type){
    case 'INCREASE' : return { counter : state.counter+1} 
    case 'DECREASE' : return { counter : state.counter-1} 
  }
  return state
}

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
