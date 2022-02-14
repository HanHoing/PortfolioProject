import React from 'react';
import './ihy.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';

const IHY=()=> {
  return (
      <>
        <Header/> 
         <Home />
         <About />
         <Skills />
         <Projects />
         <Footer/>
      </>
  );
}

export default IHY;
