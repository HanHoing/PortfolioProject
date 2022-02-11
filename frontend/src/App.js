import React, { Component } from 'react';
import './App.css';

import Main from 'Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HHY from 'HHY/Hhy';
import WHS from 'WHS/Whs';  //css 중첩으로 main 흰색됨ㅎ..

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main  />}></Route>

          {/* <Route path="/sjw" element={<SJW />}></Route> */}
          {/* <Route path="/ihy" element={<IHY />}></Route> */}
          <Route path="/whs" element={<WHS />}></Route>
          {/* <Route path="/hsh" element={<HSH />}></Route>  */}
          <Route path="/hhy" element={<HHY />}></Route>
        </Routes>
      </BrowserRouter>
      </>
    );
  }
}

export default App;

