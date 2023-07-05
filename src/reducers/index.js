import { LOGIN,LOGOUT } from "../actions";

const userInitState = {
  email:null,
  password:null,
  nickname:null,
}

export function rootReducer(state = userInitState, action){
  switch(action.type){
    case LOGIN: return{...action.data};
    case LOGOUT: return {...userInitState};
    default: return state;
  }
}