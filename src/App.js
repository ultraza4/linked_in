import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import FeedPage from './components/FeedPage/FeedPage';
import NetworkPage from './components/NetworkPage/NetworkPage';
import JobsPage from './components/JobsPage/JobsPage';
import ChatPageContainer from './components/ChatPage/ChatPageContainer';
import NoticesPage from './components/NoticesPage/NoticesPage';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';

function App(props) {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/ProfilePageContainer' element={<ProfilePageContainer 
            store = {props.store} />}></Route>
          <Route path='/FeedPage' element={<FeedPage />}></Route>
          <Route path='/NetworkPage' element={<NetworkPage />}></Route>
          <Route path='/JobsPage' element={<JobsPage />}></Route>
          <Route path='/ChatPageContainer' element={<ChatPageContainer store = {props.store} />}></Route>
          <Route path='/NoticesPage' element={<NoticesPage />}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
