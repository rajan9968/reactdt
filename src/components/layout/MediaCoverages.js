import React from 'react'
import Header from "../include/Header";
import Footer from '../include/Footer';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default function MediaCoverages() {
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
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <div className="text-center mb-5">
                                    <h2 className="section-title">Media Coverages</h2>
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
                                <Link to="/press-release-details" className="custom-btn">
                                    Load More
                                    <svg
                                        viewBox="-19.04 0 75.804 75.804"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#ffffff"
                                        stroke="#ffffff"
                                    >
                                        <g id="Group_65" transform="translate(-831.568 -384.448)">
                                            <path
                                                id="Path_57"
                                                d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                                                fill="#ffffff"
                                            ></path>
                                        </g>
                                    </svg>
                                </Link>
                            </div></div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    )
}
