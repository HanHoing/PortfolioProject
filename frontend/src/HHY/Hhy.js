import { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation'; //양쪽 화살표
import 'swiper/css/pagination'; //밑에 쩜쩜쩜 

//절대경로 설정 
import HOING from "./assets/img/hoing.png";
import HOING2 from "./assets/img/hoing2.png";

import EDIT from "./assets/img/projects/edit.png";
import PImage from "./assets/img/projects/projectImage.png";

import BImage from "./assets/img/skills/Back-end.png";
import CImage from "./assets/img/skills/certificate.png";
import DImage from "./assets/img/skills/deployment.png";
import FImage from "./assets/img/skills/front-end.png";
import VImage from "./assets/img/skills/versioncontrol.png";
import './css/hhy.css';


class HHY extends Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content />
                <meta name="author" content />
                <title> Hoing's Portfolio </title>
                {/* Favicon*/}
                <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
                {/* Font Awesome icons (free version)*/}
                {/* Google fonts*/}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
                {/* Core theme CSS (includes Bootstrap)*/}
                <link href="css/hhy.css" rel="stylesheet" />
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg bg-secondary  fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand" href="#page-top">2022 Hoing's Portfolio</a>
                        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#About">About</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#Skills">Skills</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#Projects">Projects</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Masthead*/}
                <header className="masthead bg-primary text-white text-center">
                    <div className="container d-flex align-items-center flex-column">
                        {/* Masthead Avatar Image*/}
                        <img className="masthead-avatar mb-5" src={HOING} alt="..." />
                        {/* Masthead Heading*/}
                        <h1 className="masthead-heading text-uppercase mb-0">개발자 한혜영입니다</h1>
                        {/* Masthead Subheading*/}
                        <p className="masthead-subheading font-weight-light mb-0">Front-end   Back-end</p>
                    </div>
                </header>



                {/* ------------------------------------------------------------------ */}
                {/* About Section*/}
                <section className="page-section" id="About">
                    <div className="container">
                        {/* About Section Heading*/}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 ">About</h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                        </div>
                        {/* About Section Content*/}
                        <div className="row">
                            <div className="col-lg-4 ms-auto"><p className="about"> 이름: 한혜영<br /><br /> 생년월일 : 1999.08.10 <br /><br /> 주소지: 경기도 의정부시</p></div>
                            <div className="col-lg-6 ms-auto"><p className="about"> 연락처: 010-9169-6899 <br /><br /> 이메일: hhy990810@naver.com <br /> <br />GitHub: github.com/HanHoing </p></div>
                        </div>
                    </div>
                </section>



                {/* ---------------------------------------------------------------- */}
                {/* Skills Section*/}
                <section className="page-section portfolio bg-primary text-white mb-0" id="Skills">
                    <div className="container">
                        {/* Portfolio Section Heading*/}
                        <h2 className="page-section-heading text-center text-uppercase text-white">Skills</h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                        </div>
                        {/* Skills Grid Items*/}
                        <div className="row justify-content-center">
                            {/* Skills Item 1*/}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" >
                                    <img className="img-fluid" src={FImage} alt="..." />
                                </div>
                            </div>
                            {/* Skills Item 2*/}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" >
                                    <img className="img-fluid" src={BImage} alt="..." />
                                </div>
                            </div>
                            {/* Skills Item 3*/}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" >
                                    <img className="img-fluid" src={DImage} alt="..." />
                                </div>
                            </div>
                            {/* Skills Item 4*/}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" >
                                    <img className="img-fluid" src={VImage} alt="..." />
                                </div>
                            </div>
                            {/* Skills Item 5*/}
                            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                                <div className="portfolio-item mx-auto" >
                                    <img className="img-fluid" src={CImage} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* ---------------------------------------------------------------- */}
                {/* Projects Section*/}
                <section className="page-section   " id="Projects">
                    <div className="container">
                        {/* Projects Section Heading*/}
                        <h2 className="page-section-heading text-center text-uppercase ">Projects</h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                        </div>
                        {/* Projects Grid Items*/}
                        <div className="row justify-content-center mx-auto">

                            {/* Projects Item 1*/}
                            <hr/><h2 className=" text-center ">1. School Guide</h2> <hr/>
                            <Swiper 
                            
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={40}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                            </Swiper>
                            <div className="col-md-12 col-lg-12 mb-6">
                                <div className="portfolio-item mx-auto" >
                                    <img className="img-fluid" src={EDIT} alt="..." />
                                </div>
                            </div>


                            {/* Projects Item 2*/}
                            <hr/><h2 className=" text-center">2. Smart Drive</h2> <hr/>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                           </Swiper>
                            <div className="col-md-12 col-lg-12 mb-6">
                                <div className="portfolio-item mx-auto" >
                                    <img className="img-fluid" src={EDIT} alt="..." />
                                </div>
                            </div>


                            {/* Projects Item 3*/}
                            <hr/> <h2 className=" text-center">3. Student Management</h2> <hr/>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                            </Swiper>
                            <div className="col-md-12 col-lg-12 mb-6">
                                <div className="portfolio-item mx-auto" >
                                    <img className="img-fluid" src={EDIT} alt="..." />
                                </div>
                            </div>


                             {/* Projects Item 4*/}
                             <hr/>   <h2 className=" text-center">4. 멍!트워크</h2>  <hr/>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                                <SwiperSlide>  <img src={PImage} alt="..." />  </SwiperSlide>
                           </Swiper>
                            <div className="col-md-12 col-lg-12 mb-6">
                                <div className="portfolio-item mx-auto" >
                                    <img className="img-fluid" src={EDIT} alt="..." />
                                </div>
                            </div>


                        </div>
                    </div>
                </section>



                {/* ------------------------------------------------------------------------------ */}
                {/* Contact Section*/}
                <section className="page-section bg-primary text-white mb-0" id="contact">
                    <div className="container">
                        {/* Contact Section Heading*/}
                        <h2 className="page-section-heading text-center text-uppercase text-white">Contact Me</h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
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
                </section>
                {/* Footer */}
                <footer className="footer text-center">
                    <div className="container">
                        <div className="row">
                            {/* Footer Location*/}
                            {/* Footer About Text*/}
                            <div className="col-lg-20">
                                <h4 className="text-uppercase mb-4">About Page</h4>
                                <p className="lead mb-0">
                                    본 페이지는 개인 프로젝트용으로 제작되었습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>



                {/* ----------------------------------------------------------------------------------- */}
                {/* Copyright Section*/}
                <div className="copyright py-4 text-center text-white">
                    <div className="container"><small>Copyright © Your Website 2021</small></div>
                </div>



                {/* Bootstrap core JS*/}
                {/* Core theme JS*/}
                {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
                {/* * *                               SB Forms JS                               * **/}
                {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
                {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
            </div>
        );
    }
}


export default HHY;