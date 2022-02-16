import React, { Component } from 'react';
import Slider from "react-slick";
import "./css/hsh.css"

class HSH extends Component {
    
    render() {
        const settings = {
            dots: true, // 캐러셀의 점을 보여줄 것인지
            infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
            speed: 500, // 넘어가는 속도는 몇으로 할 것인지
            slidesToShow: 1, 
            slidesToScroll: 1
          };
        return (  
            
            <div>     
                {/* Portfolio Section Heading */}
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content />
                <meta name="author" content />
                <title> sanghee Portfolio </title>
                {/* Favicon*/}
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                {/* Font Awesome icons (free version)*/}
                {/* Google fonts*/}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
                {/* Core theme CSS (includes Bootstrap)*/}
                <link href="css/hsh.css" rel="stylesheet" />

                {/* Navigation */}
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="#page-top">Sanghee Portfolio</a>
                    <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                    </button>
                {/* MENUBAR */}
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                    </ul>
                </div>
                </div>
            </nav>

            {/* Header */}
            {/* Masthead */}
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                 {/* Masthead Avatar Image */}
                <img class="masthead-avatar mb-5" src={ require('./assets/img/CD 민증사이즈.png') } alt="..." />
                 {/* Masthead Heading */}
                <h1 class="masthead-heading text-uppercase mb-0">개발자 한상희입니다</h1>
                
                 {/* Icon Divider */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* Masthead Subheading */}
                <p class="masthead-subheading font-weight-light mb-0">Frontend - Backend - Developer</p>
            </div>
        </header>
        
        {/* section */}
        <section class="page-section portfolio" id="portfolio">
            <div class="container">

                {/* My info */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">My Info</h2>

                {/* Icon Divider */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class = "text-center">
                <h3>이름 : 한상희 <br/>
                        생년월일 : 1999.07.19<br/>
                        전화번호 : 010-2635-9110<br/>
                        이메일 : hansh011@naver.com<br/>
                        GitHub: https://github.com/sshh0719<br/>
                </h3></div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>

                {/* My Skill */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">SKILL</h2>
                
                {/* Icon Divider */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                {/* skill icon */}
                <img class="small1" src={ require('./assets/img/css.png') } alt="..." />
                <img class="small1" src={ require('./assets/img/file.png') } alt="..." />
                <img class="small1" src={ require('./assets/img/java (1).png') } alt="..." />
                <img class="small1" src={ require('./assets/img/mysql.png') } alt="..." />
                <img class="small1" src={ require('./assets/img/php.png') } alt="..." />
                <img class="small1" src={ require('./assets/img/xml.png') } alt="..." />

<br/>           <br/><br/><br/><br/><br/><br/><br/><br/>

                
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                
                {/* Icon Divider */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                {/* Portfolio Grid Items */}
                <div class="row justify-content-center">
                    <div class = "classcenter"> 

                    {/* OLANG*/}
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>

                            {/* OLANG 제목 */}
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 text-center">OLANG</h2>
                                    {/* Icon Divider 별표 처리*/}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>

                                    {/* Portfolio1 OLANG - Image */}
                                    <Slider {...settings}>
                                    <div class = "left-pp4">
                                    <img class="img-fluid" src={ require('./assets/img/olang/올랑1.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp4">
                                    <img class="img-fluid" src={ require('./assets/img/olang/올랑2.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp4">
                                    <img class="img-fluid" src={ require('./assets/img/olang/올랑3.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp4">
                                    <img class="img-fluid" src={ require('./assets/img/olang/올랑4.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp4">
                                    <img class="img-fluid" src={ require('./assets/img/olang/올랑5.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp4">
                                    <img class="img-fluid" src={ require('./assets/img/olang/올랑6.png') } alt="..." />
                                    </div>
                                    <div >
                                    <img class="img-fluid" src={ require('./assets/img/olang/올랑7.png') } alt="..." />
                                    </div>              
                                    </Slider>

                                    {/* 올랑 설명 */}
                                    <p class="mb-4">
                                    <h4>프로젝트 상세 설명</h4><br/>
                                    코로나19로 인해 교내외 대외활동에 제한이 생겨 대학생들 사이에서는 새로운 사람과의 만남의 기회가 부족해졌고, 선후배, 동기간 소통이 단절되었다. 이에 맞춰 온라인 놀이공간을 제공하게 되었다.
                                    <br/>
                                    -  코로나19로 인한 대면 활동의 어려움<br/>
                                    -  교내, 교외 대외활동의 제한 <br/>
                                    -  대학생들 사이의 소통 부족<br/>
                                    -  새로운 사람과 만남의 기회 부족<br/>
                                    -  교내 선후배, 동기 간 소통 단절<br/>
                                    -  디지털 시대에 맞는 온라인 놀이 공간 부족<br/>
                                    -  초 연결사회에 맞추어 동시에 발전하는 인간관계의 수단<br/>
                                    <h4>진행 기간</h4>
                                    2021.03 ~ 2021.11<br/>
                                    <h4>사용 스킬</h4>
                                    Java, 
                                    XML, 
                                    Android Studio, 
                                    Google Firebase
                                    <h4>역할</h4>
                                    게시판 페이지 구현, 채팅 페이지 구현, firebase 연결
                                    </p>

                    {/* 오늘의 픽 */}
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            {/* 오늘의 픽 제목 */}
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 text-center">오늘의 픽</h2>

                                    {/* Icon Divider 별표 처리*/}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                            {/* 오늘의 픽 사진 */}
                            <Slider {...settings}>
                                    <div class = "left-pp3">
                                    <img class="img-fluid" src={ require('./assets/img/pick/오늘의픽1.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp3">
                                    <img class="img-fluid" src={ require('./assets/img/pick/오늘의픽2.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp3">
                                    <img class="img-fluid" src={ require('./assets/img/pick/오늘의픽3.png') } alt="..." />
                                    </div>
                                    </Slider>
                                    
                            {/* 오늘의 픽 설명 */}
                            <p class="mb-4">
                            
                                    <h4>프로젝트 상세 설명</h4><br/>
                                    점심시간마다 식사메뉴를 고민했던 경험을 바탕으로 내 주변 근처 식당들을 
                                    랜덤추천 및 식당의 메뉴를 쉽게 찾아볼 수 있는 식당 메뉴 조회 페이지를 제공해주는 ‘오늘의 픽’이라는 자바 GUI를 만들게 되었다.<br/>
                                    <h4>진행 기간</h4>
                                    2021.11.10 ~ 2021.12.02<br/>
                                    <h4>사용 스킬</h4>
                                    Java
                                    Eclipse
                                    Oracle
                                    <h4>역할</h4>
                                    카페,도시락 자료 찾기
                                    식당 조회 페이지 구현
                                    DB 리스트 구현하기
                                    </p>
                        
                    

                    {/* TOEBOX */}
                    
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>

                            {/* TOE BOX 제목 */}
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 text-center">TOE BOX</h2>

                                    {/* Icon Divider 별표 처리*/}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio1 toebox - Image */}
                                    <Slider {...settings}>
                                    <div class = "left-pp">
                                    <img class="img-fluid" src={ require('./assets/img/toebox/박스1.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp2">
                                    <img class="img-fluid" src={ require('./assets/img/toebox/박스3.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp3">
                                    <img class="img-fluid" src={ require('./assets/img/toebox/박스4.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp2">
                                    <img class="img-fluid" src={ require('./assets/img/toebox/박스5.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp3">
                                    <img class="img-fluid" src={ require('./assets/img/toebox/박스6.png') } alt="..." />
                                    </div>
                                    <div class = "left-pp3">
                                    <img class="img-fluid" src={ require('./assets/img/toebox/박스7.png') } alt="..." />
                                    </div>              
                                    </Slider>

                                    {/* TOEBOX 설명 */}
                            <p class="mb-4">
                            
                            <h4>프로젝트 상세 설명</h4><br/>
                            평소 영화 예매 웹을 들어갔을 때 해당 영화의 줄거리나 관련 정보들이 부족하여 예약하기 전 추가적으로 정보를 검색하고 알아본 후 영화를 선택해야해 불편하였던 기억을 되살려 편의성을 추가한 영화 예매 웹을 제작하게 되었다.<br/>
                            <h4>진행 기간</h4>
                            2021.01.03 ~ 01.07<br/>
                            <h4>사용 스킬</h4>
                            React, JavaScript, JSX, CSS, HTML, Spring Boot, HeidiSQL, Maria DB                            
                            <h4>역할</h4>
                            좌석 선택, 영화 결제 페이지 구현, DB 연결, 영화 정보 Crolling
                            </p>
                    </div>
                </div>
                </div>
        </section>

        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-white">Contact Me</h2>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                <div class="container">
                
                </div>
                {/* Contact Section Form*/}
                <div className="row justify-content-center">
                            <div className="col-lg-8 col-xl-7">
                                {/* * * * * * * * * * * * * * * **/}
                                {/* * * SB Forms Contact Form * **/}
                                {/* * * * * * * * * * * * * * * **/}
                                {/* This form is pre-integrated with SB Forms.*/}
                                {/* To make this form functional, sign up at*/}
                                {/* https://startbootstrap.com/solution/contact-forms*/}
                                {/* to get an API token!*/}
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/* Name input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label htmlFor="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    {/* Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    {/* Phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label htmlFor="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    {/* Message input*/}
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required" defaultValue={""} />
                                        <label htmlFor="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    {/* Submit error message*/}
                                    {/**/}
                                    {/* This is what your users will see when there is*/}
                                    {/* an error submitting the form*/}
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                    {/* Submit Button*/}
                                    <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                                </form>
                            </div>
                            </div>
                            </div>
                            
                </div>
                </section>
        {/* Copyright Section */}
        <div class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright &copy; Your Website 2022</small></div>
        </div>
    </div>

        );
    }
}

    export default HSH;
