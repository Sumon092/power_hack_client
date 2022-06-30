import logo from './logo.svg';
import './App.css';
import NavBar from './pages/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
