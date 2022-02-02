import React, { Component } from 'react';

class Nav extends Component {
    render() {
      return (
        <>
          <nav id="nav">
            <a href="#SJW" className="icon solid fa-home"><span>SJW</span></a>
            <a href="#IHY" className="icon solid fa-home"><span>IHY</span></a>
            <a href="#WHS" className="icon solid fa-home"><span>WHS</span></a>
            <a href="#HSH" className="icon solid fa-home"><span>HSH</span></a>
            <a href="#HHY" className="icon solid fa-home"><span>HHY</span></a>
          </nav>
        </>
      );
    }
  }

  export default Nav;