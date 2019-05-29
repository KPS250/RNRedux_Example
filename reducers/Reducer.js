import initialState from '../store/Store'

export const reducer = (state = initialState, action) =>{

    switch(action.type){
      case 'INCREASE' : return { counter : state.counter+1} 
      case 'DECREASE' : return { counter : state.counter-1} 
    }
    return state
}