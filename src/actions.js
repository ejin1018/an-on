export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function loginAction(userData){
  return{
    type: LOGIN,
    data: userData
  }
};
export function logoutAction(){
  return{
    type: LOGOUT
  }
};