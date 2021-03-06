import React, { Component } from 'react';
import './App.css';

import Main from 'Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HHY from 'HHY/Hhy';
import IHY from './IHY/ihy';
import SJW from 'SJW/Sjw';
import HSH from 'HSH/Hsh';
import WHS from 'WHS/Whs';


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main  />}></Route>

          <Route path="/sjw" element={<SJW />}></Route>
          <Route path="/whs" element={<WHS />}></Route>
          <Route path="/hsh" element={<HSH />}></Route> 
          <Route path="/ihy" element={<IHY />}></Route>
          <Route path="/hhy" element={<HHY />}></Route>
        </Routes>
      </BrowserRouter>
      </>
    );
  }
}

export default App;

