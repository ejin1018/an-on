import { LOGIN,LOGOUT } from "../actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userInitState = {
  email:null,
  password:null,
  nickname:null,
  calendar:null,
}

const persistConfig = {
  key: "loginUser",
  storage,
}

export function rootReducer(state = userInitState, action){
  switch(action.type){
    case LOGIN: return{...action.data};
    case LOGOUT: return {...userInitState};
    default: return state;
  }
}

export default persistReducer(persistConfig, rootReducer)