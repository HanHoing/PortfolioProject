import React, { Component } from 'react';
import './css/Main.css';
// import './css/fontawesome-all.min.css';

import banner from "./images/banner.jpg";
import pj01 from "./images/pj01.PNG";
import pj02 from "./images/pj02.PNG";
import mimoticon from "./images/mimoticon.jpg";

import front from "./images/front.png";
import back from "./images/back.png";
import spring from "./images/spring.png";
import react from "./images/react.png";




class WHS extends Component {
  render() {
    return (
      <div>



        {/* Banner */}
        <head>
          <title>WHS Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        </head>

        <div class="image main" data-position="center">
          <img src={banner} alt="" />
        </div>


        {/* HEADER */}
        <section id="header">
          <header>
            <span class="image avatar"><img src={mimoticon} alt="" /></span>
            <h1 id="logo"><a href="#">위해서</a></h1>
            <p>안녕하세요.<br />
              프론트엔드 개발자 위해서입니다.</p><br />
            <p2>제 포트폴리오 페이지에 오신 걸 환영합니다&nbsp;☻</p2>
          </header>
          <nav id="nav">
            <ul>
              <li><a href="#one" class="active">Profile</a></li>
              <li><a href="#two">Skills</a></li>
              <li><a href="#three">Project</a></li>
              <li><a href="#four">Contact</a></li>
            </ul>
          </nav>
          <footer>
            <ul class="icons">
              <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
              <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
            </ul>
          </footer>
        </section>


        {/* <!-- Wrapper --> */}
        <div id="wrapper">

          {/* CONTENT */}
          <div id="one">

            <section id="Profile">
              <div class="container">
                <header class="major">
                  <h2>Wi HaeSeo</h2>
                  <div class="profile"><p1>이름:&nbsp;위해서 
                  <br />생년월일:&nbsp;1998.07.05
                  <br />주소지:&nbsp;경기도 김포시
                  </p1>
                  </div>
                  <div class="profile"><p2>연락처:&nbsp;010-3282-2410
                  <br />이메일:&nbsp;gotj999@naver.com
                  <br />깃허브:&nbsp;https://github.com/haeseo
                  </p2>
                  </div>
                  {/*<hr class="one"></hr>*/}
                </header>
              </div>
            </section>


            {/* Two */}
            <div id="two">

              <section id="Skills">
                <div class="container">
                  <h3>Skills</h3>
                  
                  <img src={front} className='front-image'></img>
                  <img src={react} className='react-image'></img>
                  <img src={back} className='back-image'></img>
                  <img src={spring} className='spring-image'></img>
                  
                  <hr class="one"></hr>
                </div>
              </section>


              {/* Three */}
              <div id="three">

                <section id="project">
                  <div class="container">
                    <h3>Project</h3>
                    <div class="features">
                      <article>
                        <a href="#" class="image"><img src={pj01} alt="" /></a>
                        <div class="inner">
                          <h4>1차 프로젝트: KioKio</h4>
                          <p>- JavaSwing을 이용한 카페 키오스크 프로그램 기능 구현</p>
                        </div>
                      </article>
                      <article>
                        <a href="#" class="image"><img src={pj02} alt="" /></a>
                        <div class="inner">
                          <h4>2차 프로젝트: MTW(멍!트워크)</h4>
                          <p>- React, Node.js등을 이용하여 반려견 산책 커뮤니티 웹사이트 개발</p>
                        </div>
                        <hr class="one"></hr>
                      </article>
                    </div>
                  </div>
                </section>
              </div>


              {/* Four */}
              <div id="four">

                <section id="Contact">
                  <div class="container">
                    <h3>Contact Me</h3>
                    <p>아래로 연락 바랍니다.</p>
                    <form method="post" action="#">
                      <div class="row gtr-uniform">
                        <div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                        <div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div class="col-12"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
                        <div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea>
                        </div>
                        <div class="col-12">
                          <ul class="actions">
                            <li><input type="submit" class="primary" value="Send Message" /></li>
                            <li><input type="reset" value="Reset Form" /></li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>



          {/* FOOTER */}
          <section id="footer">
            
            <div class="container">
              <ul class="copyright">
                <li>2022 포트폴리오</li>
                <li>위해서</li>
              </ul>
            </div>
          </section>
        </div>
      </div>


    );
  }
};

export default WHS;
