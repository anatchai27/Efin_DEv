import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js';
import React from 'react';
import { IndexPageComponent } from './Page/Index/Index';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Spiltter></Spiltter> */}
      <IndexPageComponent/>
    </>
  );
}

export default App;
