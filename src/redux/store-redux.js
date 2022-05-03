import { combineReducers, createStore } from "redux";
import ProfilePageReducer from './ProfilePageReducer';
import ChatPageReducer from './ChatPageReducer';
import NetworkPageReducer from './NetworkPageReducer';

let rootReducer = combineReducers({
   ProfilePage: ProfilePageReducer,
   ChatPage: ChatPageReducer,
   NetworkPage: NetworkPageReducer
})

const store = createStore(rootReducer);

window.store = store;

export default store;