import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./style/style.scss"
import Home from "./pages/Home";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import BotNav from './components/BotNav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Splash/>} />  
          <Route path='/home' element={<Home/>} />  
          <Route path='/login' element={<Login/>} />  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
