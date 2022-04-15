import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import FeedPage from './components/FeedPage/FeedPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="content_wrap">
        <ProfilePage />
        <FeedPage />
      </div>
    </div>
  );
}

export default App;
