import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SideNavBar from './components/SideNavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <SideNavBar 
    
    />
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={<App />} 
        />
        <Route 
          path='/profile' 
          element={<Profile />} 
        />
        <Route 
          path='/signup' 
          element={<SignUp />} /
        >
      </Routes>
    </BrowserRouter>
  </>
);

