import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

let rerenderEntireTree =(state)=> {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <BrowserRouter>
        <App state={state} 
        addPost ={store.addPost.bind(store)}
        updateNewPostText = {store.updateNewPostText.bind(store)} />
      </BrowserRouter>
  );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

