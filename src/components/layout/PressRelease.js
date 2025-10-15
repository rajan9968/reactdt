import React from 'react'
import Header from "../include/Header";
import Footer from '../include/Footer';
import Form from 'react-bootstrap/Form';
export default function PressRelease() {
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
                            <div className="col-lg-8">
                                <div className="text-start mb-5">
                                    <h2 className="section-title">Press Releases</h2>
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


            </main>
            <Footer />
        </div>
    )
}
