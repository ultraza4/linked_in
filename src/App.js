import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import FeedPage from './components/FeedPage/FeedPage';
import NetworkPage from './components/NetworkPage/NetworkPageContainer';
import JobsPage from './components/JobsPage/JobsPage';
import ChatPageContainer from './components/ChatPage/ChatPageContainer';
import NoticesPage from './components/NoticesPage/NoticesPage';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='ProfilePageContainer' element={<ProfilePageContainer />} />
          <Route path='ProfilePageContainer/:userId' element={<ProfilePageContainer />} />
          <Route path='FeedPage' element={<FeedPage />} />
          <Route path='NetworkPageContainer/*' element={<NetworkPage />} />
          <Route path='JobsPage' element={<JobsPage />} />
          <Route path='ChatPageContainer' element={<ChatPageContainer />} />
          <Route path='NoticesPage' element={<NoticesPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
