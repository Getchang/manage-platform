import { SWITCHLOGIN } from './action_type';

const defaultState = {
  loginState: 'login',
};
export const loginData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case SWITCHLOGIN:
      return { ...state, loginState: action.loginType };
    default:
      return { ...state };
  }
};
