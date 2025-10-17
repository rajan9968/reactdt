import React, { useState } from "react";
import Header from "../include/Header";
import Footer from '../include/Footer';
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
export default function Career() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/career-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2>Careers</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="work-with-us-card p-4 text-center">
                            <div className="d-flex justify-content-center">
                                <h2 className="font-weight-bold">Work with Us</h2>
                            </div>
                            <div className="d-flex justify-content-center mt-1">
                                <div className="btn btn-design">
                                    <Link to="/press-release-details" className="custom-btn">
                                        View Latest Jobs
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="our-business join-datta py-5 bg-white">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Why Join Datta Infra ?</h2>
                            <p className="section-text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                            </p>
                        </div>
                        <div className="row" id="new-carousel" style={{ position: 'relative' }}>
                            {/* Custom Navigation Buttons */}
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                            <Swiper
                                className="news-swiper"
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={4}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                loop={true}
                                // autoplay={{ delay: 3000 }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 2 },
                                    992: { slidesPerView: 4 },
                                }}
                            >
                                {/* Impactful Work */}
                                <SwiperSlide>
                                    <div className="card-custom">
                                        <img
                                            src="assets/images/impact-icon.png"
                                            className="card-image"
                                            alt="Impactful Work"
                                        />
                                        <h3>Impactful Work</h3>
                                        <p>
                                            Be part of a company at the forefront of India's renewable energy
                                            revolution. Every project you work on at Datta Infra contributes
                                            to a sustainable future for generations to come.
                                        </p>
                                    </div>
                                </SwiperSlide>

                                {/* Professional Growth */}
                                <SwiperSlide>
                                    <div className="card-custom">
                                        <img
                                            src="assets/images/professional-icon.png"
                                            className="card-image"
                                            alt="Professional Growth"
                                        />
                                        <h3>Professional Growth</h3>
                                        <p>
                                            We believe in nurturing talent and providing opportunities for
                                            career advancement. Whether you're an experienced professional or
                                            just starting your career, Datta Infra offers a supportive
                                            environment where you can learn, grow, and excel.
                                        </p>
                                    </div>
                                </SwiperSlide>

                                {/* Innovative Culture */}
                                <SwiperSlide>
                                    <div className="card-custom">
                                        <img
                                            src="assets/images/innovative-icon.png"
                                            className="card-image"
                                            alt="Innovative Culture"
                                        />
                                        <h3>Innovative Culture</h3>
                                        <p>
                                            Innovation is at the heart of everything we do. At Datta Infra,
                                            you'll collaborate with like-minded individuals passionate about
                                            pushing boundaries and finding creative solutions to complex
                                            challenges.
                                        </p>
                                    </div>
                                </SwiperSlide>

                                {/* Commitment to Excellence */}
                                <SwiperSlide>
                                    <div className="card-custom">
                                        <img
                                            src="assets/images/commitment-icon.png"
                                            className="card-image"
                                            alt="Commitment to Excellence"
                                        />
                                        <h3>Commitment to Excellence</h3>
                                        <p>
                                            We take pride in delivering projects of the highest quality, on
                                            time and within budget. Joining Datta Infra means joining a team
                                            committed to excellence in everything we do.
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
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
                <section className="powering-progres key-highlights bg-white py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">
                                Employee Testimonial
                            </h2>

                        </div>
                        <div className="row text-center mt-4">
                            <div className="col-lg-12">
                                <div className="position-relative" onClick={handleShow} style={{ cursor: "pointer" }}>
                                    <img
                                        src="assets/images/test-1.png"
                                        alt="thumbnail"
                                        className="img-fluid desktop-banner rounded w-100"
                                    />

                                    <p
                                        className="media-text position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                                        style={{ margin: 0 }}
                                    >
                                        <img
                                            src="assets/images/play-white-icon.png"
                                            alt="play"
                                            className="play-icon"
                                        />
                                    </p>
                                </div>

                                {/* Modal */}
                                <Modal show={show} onHide={handleClose} size="lg" centered>
                                    <Modal.Body className="p-0 position-relative">
                                        <button
                                            type="button"
                                            className="btn-close position-absolute end-0 m-2"
                                            onClick={handleClose}
                                            aria-label="Close"
                                        ></button>
                                        <div className="ratio ratio-16x9">
                                            <iframe
                                                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                                                title="YouTube video"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="ready">
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-center gap-3 align-items-center text-center">
                                    <h2>Be a part of Datta Infra</h2>
                                    <div className="btn-design-new">
                                        <a href="" className="custom-btn">
                                            Apply Now
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
            </main>
            <Footer />
        </div >
    )
}
