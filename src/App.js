import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './login/login';
import Main from './Main/main';
import Signup from './login/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/college-mate/login" element={<LoginForm />}></Route>
        <Route path="/college-mate/main" element={<Main />}></Route>
        <Route path="/college-mate/Sign" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
