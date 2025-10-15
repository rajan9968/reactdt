import React, { useState } from "react";
import Header from "../include/Header";
import Footer from '../include/Footer';
import { Link } from "react-router-dom";

export default function ProjectPortfolio() {
    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/project-profolio-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2>Project Portfolio</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">Project Portfolio</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section className='project-section py-5'>
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Overview</h2>
                            <p className="section-text m-0 pb-2">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                erat volutpat.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-4">
                                <Link to="/project-details" className="text-black text-decoration-none">
                                    <div
                                        className="team-card shadow rounded bg-light cursor-pointer">
                                        <img
                                            src="assets/images/project-1.png"
                                            alt="project"
                                            className="img-fluid rounded-top mb-3"
                                        />
                                        <div className="team-name">
                                            <h5 className="mb-1">Bikaner, Rajasthan</h5>
                                            <p className="text-mute"> Solar (Single Location)</p>
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
