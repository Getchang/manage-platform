import { SWITCHLOGIN } from "./action_type";

const switchLoginType = (loginType) => {
  // console.log(loginType)
  return {
    type: SWITCHLOGIN,
    loginType
  }
}
export {
  switchLoginType
}