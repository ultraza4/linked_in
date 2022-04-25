import { combineReducers, createStore } from "redux";
import ProfilePageReducer from './ProfilePageReducer';
import ChatPageReducer from './ChatPageReducer';

let rootReducer = combineReducers({
   ProfilePage: ProfilePageReducer,
   ChatPage: ChatPageReducer
})

const store = createStore(rootReducer);

export default store;