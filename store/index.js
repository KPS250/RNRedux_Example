import {cartItems} from '../reducers/CartItem'
import { createStore } from 'redux'

export const store = createStore(cartItems);