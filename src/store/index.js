import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import * as loginData from './login/reducer'

const store = createStore(
  combineReducers({...loginData}),
  applyMiddleware(thunk)
)

export default store