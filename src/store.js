import { createStore } from "redux";
import { rootReducer } from "./reducers"
import persistReducer from './reducers'
import { persistStore } from 'redux-persist';

export const store = createStore(persistReducer);
export const persistor = persistStore(store);