import React, { Component } from 'react';
import '../Main/assets/css/main.css';
import '../Main/assets/css/fontawesome-all.min.css';
import '../Main/assets/css/noscript.css';

import Header from '../components/Header';
import Article from '../components/Article';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Scripts from '../components/Scripts';


class Main extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div className="wrapper">
          <Nav></Nav>
          <div id="main">
            <Article></Article>
            <Footer></Footer>
          </div>
        </div>
        <Scripts></Scripts>
      </>
    );
  }
}

export default Main;
