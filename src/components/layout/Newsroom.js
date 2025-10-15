import React from 'react'
import Header from "../include/Header";
import Footer from '../include/Footer';
import { Link } from "react-router-dom";

export default function Newsroom() {
    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/newsroom-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2>Our Newsroom</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">Newsroom</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section className='project-section py-5'>
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center mb-5">
                                    <h2 className="section-title">Press Releases</h2>
                                </div>
                            </div>

                        </div>


                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-4">
                                <img
                                    src="assets/images/newsroom-1.png"
                                    alt="awards"
                                    className="img-fluid desktop-banner rounded"
                                />
                            </div>
                            <div className='col-lg-8 newsroom'>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p>Date: xx/xxx/xxxx</p>
                                <p>Publication:</p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-4">
                                <img
                                    src="assets/images/newsroom-1.png"
                                    alt="awards"
                                    className="img-fluid desktop-banner rounded"
                                />
                            </div>
                            <div className='col-lg-8 newsroom'>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p>Date: xx/xxx/xxxx</p>
                                <p>Publication:</p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-4">
                                <img
                                    src="assets/images/newsroom-1.png"
                                    alt="awards"
                                    className="img-fluid desktop-banner rounded"
                                />
                            </div>
                            <div className='col-lg-8 newsroom'>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p>Date: xx/xxx/xxxx</p>
                                <p>Publication:</p>
                            </div>
                        </div>
                        <div className="my-3 text-center d-flex justify-content-center">
                            <div className="btn-design">
                                <a href="" className="custom-btn">
                                    Load More
                                </a>
                            </div></div>
                    </div>
                </section>
                <section className='project-section py-5'>
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center mb-5">
                                    <h2 className="section-title">Media Coverages</h2>
                                </div>
                            </div>

                        </div>


                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-4">
                                <img
                                    src="assets/images/newsroom-1.png"
                                    alt="awards"
                                    className="img-fluid desktop-banner rounded"
                                />
                            </div>
                            <div className='col-lg-8 newsroom'>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p>Date: xx/xxx/xxxx</p>
                                <p>Publication:</p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-4">
                                <img
                                    src="assets/images/newsroom-1.png"
                                    alt="awards"
                                    className="img-fluid desktop-banner rounded"
                                />
                            </div>
                            <div className='col-lg-8 newsroom'>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p>Date: xx/xxx/xxxx</p>
                                <p>Publication:</p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-4">
                                <img
                                    src="assets/images/newsroom-1.png"
                                    alt="awards"
                                    className="img-fluid desktop-banner rounded"
                                />
                            </div>
                            <div className='col-lg-8 newsroom'>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p>Date: xx/xxx/xxxx</p>
                                <p>Publication:</p>
                            </div>
                        </div>
                        <div className="my-3 text-center d-flex justify-content-center">
                            <div className="btn-design">
                                <a href="" className="custom-btn">
                                    Load More
                                </a>
                            </div></div>
                    </div>
                </section>
                <section className='project-section py-5'>
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center mb-5">
                                    <h2 className="section-title">Media Resources</h2>
                                </div>
                            </div>

                        </div>


                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4">
                                <img
                                    src="assets/images/media-1.png"
                                    alt="awards"
                                    className="img-fluid desktop-banner rounded"
                                />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <img
                                    src="assets/images/media-2.png"
                                    alt="awards"
                                    className="img-fluid desktop-banner rounded"
                                />
                            </div>
                        </div>
                        <div className="mt-3 pb-5 text-center d-flex justify-content-center">
                            <div className="btn-design">
                                <a href="" className="custom-btn">
                                    Load More
                                </a>
                            </div></div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
