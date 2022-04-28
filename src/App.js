import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/college-mate/login" element={<LoginForm />}></Route> */}
        {/*  <Route path="/college-mate/main" element={<Main />}></Route> */}
        <Route path='/college-mate/sign' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
