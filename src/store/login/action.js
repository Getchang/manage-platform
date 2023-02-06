import { SWITCHLOGIN } from './action_type';

const switchLoginState = loginType => {
  // console.log(loginType)
  return {
    type: SWITCHLOGIN,
    loginType,
  };
};
export { switchLoginState };
