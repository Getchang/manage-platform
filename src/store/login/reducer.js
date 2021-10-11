import { SWITCHLOGIN } from "./action_type"

const defaultState = {
  swithLoginType: 'login'
}
export const loginData = (state = defaultState, action = {}) => {
  switch(action.type) {
    case SWITCHLOGIN:
      return {...state, swithLoginType: action.loginType}
    default: 
      return {...state}
  }
}