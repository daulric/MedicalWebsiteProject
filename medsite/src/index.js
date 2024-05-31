import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from './Pages/Home';
import MessagePage from './Pages/MessagePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/email' element={<MessagePage />} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);