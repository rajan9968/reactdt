import React from 'react'
import Header from "../include/Header";
import Footer from '../include/Footer';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Form from 'react-bootstrap/Form';


export default function Awards() {
    const newsData = [

        {
            img: "assets/images/award-3.png",
            date: "June 26, 2025 / News",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
        {
            img: "assets/images/award-3.png",
            date: "June 20, 2025 / Press Release",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
        {
            img: "assets/images/award-3.png",
            date: "June 02, 2025 / Case Studies",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
        {
            img: "assets/images/award-3.png",
            date: "June 02, 2025 / Case Studies",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
    ];
    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/awards-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2 className='mb-0'>Our Awards</h2>
                            <p className='text-white mb-5'>Celebrating Excellence in Clean Energy</p>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">Awards</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section className="what-new py-5 bg-white">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Spotlight</h2>

                        </div>
                        <div id="new-carousel" style={{ position: 'relative' }}>
                            {/* Custom Navigation Buttons */}
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>

                            <Swiper
                                className="news-swiper"
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={3}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                loop={true}
                                // autoplay={{ delay: 3000 }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 }
                                }}
                            >
                                {newsData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="news-box rounded">
                                            <div className="new-image">
                                                <img src={item.img} className="img-fluid rounded" alt="news" />
                                            </div>
                                            <div className="news-content rounded-bottom">
                                                <p className="award-title">Award: Lorem ipsum</p>
                                                <p className="award-title">Catagory: Lorem ipsum</p>
                                                <p className="award-title">Date: Lorem ipsum</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className='project-section py-5'>
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <div className="text-center mb-5">
                                    <h2 className="section-title">All Awards</h2>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex gap-1">
                                    <div className="search-bar">
                                        <i className="fa fa-search"></i>
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                        />
                                    </div>
                                    <Form.Select aria-label="Default select example" style={{ width: "40%" }}>
                                        <option>Year</option>
                                        <option value="1">2025</option>
                                        <option value="2">2024</option>
                                        <option value="3">2023</option>
                                        <option value="3">2022</option>
                                        <option value="3">2021</option>
                                        <option value="3">2020</option>
                                        <option value="3">2019</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-lg-4 mb-4">
                                <Link to="/#" className="text-black text-decoration-none">
                                    <div
                                        className="team-car shadow rounded bg-light h-100 cursor-pointer bg-color">
                                        <img
                                            src="assets/images/award-2.png"
                                            alt="project"
                                            className="img-fluid rounded-top mb-2"
                                        />
                                        <div className="team-name">
                                            <h5 className="mb-2 blog-date text-white">Award: Lorem ipsum</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-12 my-5 text-center d-flex justify-content-center">
                                <div className="btn-design">
                                    <a href="" className="custom-btn">
                                        Load More
                                    </a>
                                </div></div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
