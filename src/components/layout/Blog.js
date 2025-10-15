import React, { useState } from "react";
import Header from "../include/Header";
import Footer from '../include/Footer';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

export default function Blog() {
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
                                    <a href="#">Blogs</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section className='project-section py-5'>
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="text-start mb-5">
                                    <h2 className="section-title">Read Our Latest Blogs</h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex gap-3">
                                    <div className="search-bar">
                                        <i className="fa fa-search"></i>
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                        />
                                    </div>
                                    <Form.Select aria-label="Default select example" style={{ width: "30%" }}>
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
                                <Link to="/blog-detail" className="text-black text-decoration-none">
                                    <div
                                        className="team-card shadow rounded bg-light h-100 cursor-pointer">
                                        <img
                                            src="assets/images/project-1.png"
                                            alt="project"
                                            className="img-fluid rounded-top mb-3"
                                        />
                                        <div className="team-name">
                                            <h5 className="mb-1 blog-date">January 18, 2024</h5>
                                            <p className="text-mute blog-title"> Datta Infra Energy wins 50 MW wind project</p>
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
