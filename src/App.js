import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import React from 'react';
import Mypage from './components/Mypage';
import MypageOther from './components/MypageOther';
import BuyWrite from './Buy/BuyPost/BuyWrite';
import BuyRead from './Buy/BuyPost/BuyRead';
import LoginForm from './login/login';
import Main from './Main/main';
import Buy from './Buy/Buy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/college-mate/login' element={<LoginForm />}></Route>
        <Route path='/college-mate/main' element={<Main />}></Route>
        <Route path='/college-mate/buy/read' element={<Buy />} />
        <Route path='/college-mate/buy/read/post' element={<BuyRead />} />
        <Route path='/college-mate/buy/post' element={<BuyWrite />} />
        <Route path='/college-mate/sign' element={<Signup />}></Route>
        <Route path='/college-mate/mypage' element={<Mypage />}></Route>
        <Route path='/college-mate/mypageother' element={<MypageOther />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
