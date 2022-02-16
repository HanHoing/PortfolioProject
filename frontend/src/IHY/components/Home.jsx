import React from 'react';
// import Typical from 'react-typical'
import person from '../assets/PersonalData'

const Home = () => {
  return (
    <div id="home" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={person.backgroundSlides.slideOne} alt="background-1" />
          <div className="carousel-caption">
            <h3>안녕하세요! 개발자 임해영 입니다. <span role="img" aria-label="hi-emoji">😊 </span></h3>
            <h3>{` `} 
            {/* <Typical steps={person.about.profession} loop={1} wrapper="span" />  */}
            </h3>
            <a href="#footer"><button type="button" className="btn btn-outline-light btn-lg">Contact Me</button></a>
            <a href="#projects"><button type="button" className="btn btn-primary-blue btn-lg ml-3">See Projects</button></a>
            <div className="dropdown animate__animated animate__bounce animate__repeat-3 animate__slower">
              <a href="#about"><i className="fas fa-arrow-alt-circle-down" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;