import logo from './logo.svg';
import React from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './App.css';

import HSHPage from "./HSH/components/HSHPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/hsh" element={<HSHPage/>}></Route>
      </Routes>
      </BrowserRouter>
      
      {/* <header className="App-header">
       
      </header> */}
    </div>
  );
}

export default App;
