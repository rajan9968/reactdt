import React, { useState } from "react";
import Header from "../include/Header";
import Footer from '../include/Footer';
export default function BlogDetails() {
    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/blog-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2>Our Blogs</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">Datta Infra Energy wins 50 MW wind project</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                {/* Progress start  */}
                <section className="powering-progress py-5">
                    <div className="container-fluid plr">
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
                                    <h4 className="blog-details-title">
                                        Datta Infra Energy wins 50 MW wind project
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing ipsum dolor
                                        sit amet, consectetuer adipiscing ipsum dolor sit amet Lorem
                                        ipsum dolor sit amet, consectetuer adipiscing...
                                    </p>
                                </div>
                                <div className="d-flex align-items-end justify-content-end">

                                    <div className="group-icon">
                                        <img src="assets/images/Group-icon.png" alt="" srcSet="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Progress end  */}

            </main>
            <Footer />
        </div>
    )
}
