import { applyMiddleware, combineReducers, createStore } from "redux";
import ProfilePageReducer from './ProfilePageReducer';
import ChatPageReducer from './ChatPageReducer';
import NetworkPageReducer from './NetworkPageReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
   ProfilePage: ProfilePageReducer,
   ChatPage: ChatPageReducer,
   NetworkPage: NetworkPageReducer,
   Auth: authReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;