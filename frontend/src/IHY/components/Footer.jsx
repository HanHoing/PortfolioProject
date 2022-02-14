import React from 'react';
import person from '../assets/PersonalData'

const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <div className="container-fluid padding">
          <div className='contactfooter'>

            <h1 className='contact-title'><span>Contact</span></h1>
            <hr className="light" />
            <h1 className='contact-email'>
              <p>010-5439-3419</p>
              <p>younge1009@gmail.com</p>
            </h1>
            <div className='logo'>
              <ul className="col-12 media d-flex justify-content-center list-inline">
                {person.socialMedias.map((media, index) => (
                  <li key={index} className='list-inline-item'>
                    <a href={media.url} target="_blank" rel="noopener noreferrer">
                      <i className={media.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
            </div>
            <div className="col-12">
              <h5 className="footer-media">&copy;2022 <a href="https://berihu.netlify.app/" target="_blank" rel="noopener noreferrer">
              </a>
              </h5>
            </div>
          </div>
        </div>
      </footer>
    </div>


  )

};

export default Footer;


