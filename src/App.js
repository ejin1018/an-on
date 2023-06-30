import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./style/style.scss"
import Home from "./pages/Home";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Splash/>} />  
          <Route path='/home' element={<Home/>} />  
          <Route path='/login' element={<Login/>} />  
          <Route path='/signin' element={<Signin/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
