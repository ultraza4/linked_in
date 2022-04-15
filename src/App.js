import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
