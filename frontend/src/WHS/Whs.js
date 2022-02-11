import React, { Component } from 'react';
import './css/Main.css';
import './css/fontawesome-all.min.css';

import banner from "./images/banner.jpg";
import pj01 from "./images/pj01.PNG";
import pj02 from "./images/pj02.PNG";
import mimoticon from "./images/mimoticon.jpg";

import jqueryscrollex from './js/jquery.scrollex.min.js';


class WHS extends Component {
  render() {
    return (
      <div>

        {/* HEADER */}
        <section id="header">
          <header>
            <span class="image avatar"><img src={mimoticon} alt="" /></span>
            <h1 id="logo"><a href="#">Wi HaeSeo</a></h1>
            <p>안녕하세요.<br />
              프론트엔드 개발자 위해서입니다.</p>
          </header>
          <nav id="nav">
            <ul>
              <li><a href="#one" class="active">Profile</a></li>
              <li><a href="#two">Project</a></li>
              <li><a href="#three">Contact</a></li>
            </ul>
          </nav>
        </section>


        {/* CONTENT */}
        <div id="Content">

          <section id="Profile">
            <div class="image main" data-position="center">
              <img src={banner} alt="" />
            </div>
            <div class="container">
              <header class="major">
                <h2>Wi HaeSeo</h2>
                <p>Just an incredibly simple responsive site<br />
                  template freebie by <a href="http://html5up.net">HTML5 UP</a>.</p>
              </header>
              <p>Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum
                sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor
                ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac
                faucibus integer non. Adipiscing cubilia elementum.</p>
            </div>
          </section>


          <section id="two">
            <div class="container">
              <h3>Project</h3>
              <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non.
                Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
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
                    <h4>2차 프로젝트: MTW(멍트워크)</h4>
                    <p>- React, Node.js등을 이용하여 반려견 산책 커뮤니티 웹사이트 개발</p>
                  </div>
                </article>
              </div>
            </div>
          </section>


          <section id="Contact">
            <div class="container">
              <h3>Contact Me</h3>
              <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non.
                Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
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



        {/* FOOTER */}
        <section id="footer">
          <footer>
            <ul class="icons">
              <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
              <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
            </ul>
          </footer>
          <div class="container">
            <ul class="copyright">
              <li>2022 포트폴리오</li>
              <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </section>


        {/* SCRIPTS */}
        <section>
			<script src="./scripts"></script>
			<script src= {jqueryscrollex} />
			<script src="./jquery.scrolly.min.js"></script>
			<script src="./browser.min.js"></script>
			<script src="./breakpoints.min.js"></script>
			<script src="./util.js"></script>
			<script src="./main.js"></script>
            </section>

      </div>


    );
  }
};

export default WHS;
