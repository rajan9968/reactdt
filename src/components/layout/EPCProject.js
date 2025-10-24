import React, { useState } from "react";
import Header from "../include/Header";
import Footer from '../include/Footer';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
export default function EPCProject() {
    const slides2 = [
        { img: "assets/images/join-1.png", alt: "Join 1" },
        { img: "assets/images/join-2.png", alt: "Join 2" },
        { img: "assets/images/join-2.png", alt: "Join 2" },
        // add more slides here
    ];
    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/business-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2>Turnkey EPC Projects</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">Turnkey EPC Projects</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>

                <section className="powering-progres bg-white py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">
                                Overview
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="power-img">
                                    <img
                                        src="assets/images/pro-1.png"
                                        className="img-fluid w-100"
                                        alt=""
                                        srcSet=""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex flex-column">
                                <div className="power-content mb-auto">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing ipsum dolor
                                        sit amet, consectetuer adipiscing ipsum dolor sit amet Lorem
                                        ipsum dolor sit amet, consectetuer adipiscing...
                                    </p>
                                </div>
                                <div className="d-flex align-items-end justify-content-end">

                                    <div className="group-icon">
                                        <img src="assets/images/business-icon.png" alt="" srcSet="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="powering-progres key-highlights bg-white py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">
                                Key Highlights
                            </h2>

                        </div>
                        <div className="row text-center mt-4">
                            <div className="col-md-3">
                                <h3 className="display-4">XXXX</h3>
                                <p>Completed Pre-Development Projects</p>
                            </div>
                            <div className="col-md-3 pro-del border-right">
                                <h3 className="display-4">XXXX</h3>
                                <p>Completed Pre-Development Projects</p>
                            </div>
                            <div className="col-md-3 pro-del">
                                <h3 className="display-4">XXXX</h3>
                                <p>Ongoing Pre-Development Projects</p>
                            </div>
                            <div className="col-md-3">
                                <h3 className="display-4">XXXX</h3>
                                <p>In-Pipeline Pre-Development Projects</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="what-new py-5 bg-white">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Our Approch</h2>

                        </div>
                        <div className="row" id="new-carousel" style={{ position: 'relative' }}>
                            <div className="col-lg-4">
                                <div className="news-box rounded">
                                    <div className="new-image">
                                        <img src="assets/images/news-3.jpg" className="img-fluid rounded" alt="news" />
                                    </div>
                                    <div className="news-content rounded-bottom">
                                        <p className="award-title">Lorem ipsum</p>
                                        <p className="content-news-para">Loremipsumdolorsitamet,consectetuer adipiscingelit,seddiamnonummynibheuismod tinciduntutlaoreetdoloremagnaaliquamerat volutpat.Utwisienimadminimveniam,quis</p>

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <div className="news-box rounded">
                                    <div className="new-image">
                                        <img src="assets/images/news-3.jpg" className="img-fluid rounded" alt="news" />
                                    </div>
                                    <div className="news-content rounded-bottom">
                                        <p className="award-title">Lorem ipsum</p>
                                        <p className="content-news-para">Loremipsumdolorsitamet,consectetuer adipiscingelit,seddiamnonummynibheuismod tinciduntutlaoreetdoloremagnaaliquamerat volutpat.Utwisienimadminimveniam,quis</p>

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <div className="news-box rounded">
                                    <div className="new-image">
                                        <img src="assets/images/news-3.jpg" className="img-fluid rounded" alt="news" />
                                    </div>
                                    <div className="news-content rounded-bottom">
                                        <p className="award-title">Lorem ipsum</p>
                                        <p className="content-news-para">Loremipsumdolorsitamet,consectetuer adipiscingelit,seddiamnonummynibheuismod tinciduntutlaoreetdoloremagnaaliquamerat volutpat.Utwisienimadminimveniam,quis</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="join-us our-project py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Key Projects</h2>
                        </div>
                        {/* Owl Carousel */}
                        <div id="join-carousel-w" className="join-carousel-wrapper">
                            <Swiper
                                modules={[Autoplay, Pagination]} // use Pagination instead of Navigation
                                spaceBetween={20}
                                slidesPerView={3}
                                id="join-carousel"
                                loop={true}
                                autoplay={{ delay: 3000 }}
                                pagination={{ clickable: true }} // enable dots
                                breakpoints={{
                                    0: { slidesPerView: 1 },    // mobile
                                    576: { slidesPerView: 2 },  // small devices
                                    992: { slidesPerView: 2 },  // desktop
                                }}
                            >
                                {slides2.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={slide.img} className="img-fluid" alt={slide.alt} />
                                        <p className="pt-2">Lorem ipsum</p>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </section>
                {/* ready to talk start */}
                <section className="ready">
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-center gap-3 align-items-center text-center">
                                    <h2>Talk to an Expert</h2>
                                    <div className="btn-design-new">
                                        <a href="" className="custom-btn">
                                            Contact Us
                                        </a>
                                        <svg
                                            viewBox="-19.04 0 75.804 75.804"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#ffffff"
                                            stroke="#ffffff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <g id="SVGRepo_iconCarrier">
                                                <g
                                                    id="Group_65"
                                                    data-name="Group 65"
                                                    transform="translate(-831.568 -384.448)"
                                                >
                                                    <path
                                                        id="Path_57"
                                                        data-name="Path 57"
                                                        d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                                                        fill="#ffffff"
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ready to talk end */}
            </main>
            <Footer />
        </div>
    )
}
