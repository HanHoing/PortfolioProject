import React from 'react';
import person from '../assets/PersonalData';

const About = () => {
  return (
    <div className="container-fluid padding" id="about">
      <div className="row headers padding">
        <div className="col-12 text-center ">
          <h1 className="display-4 animated wow slideInLeft">About Me</h1>
        </div>
        {/* <hr /> */}

        <div className="col-xs-12 col-sm-12 col-md-4 padding">
          <figure className="figure">
            <img src={person.about.profilePiPicture} width="100%" alt="profile" className="rounded-circle" />
            <figcaption className="figure-caption text-center p-3">{person.about.name}</figcaption>
          </figure>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-8">
          <ul>
            <h2 className='about-title'><span>😊안녕하세요! 백엔드 개발자에 지원합니다.</span></h2>
            {person.background.map((bg, index) => (
              <li key={index} className="lead">{`${bg.experience} `}
                <a href={bg.url} target="_blank" rel="noopener noreferrer" className="education">
                  {bg.school}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

};

export default About;