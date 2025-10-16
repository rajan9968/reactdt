import React, { useEffect } from "react";
import Header from "../include/Header";
import Footer from '../include/Footer';
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
export default function MediaResources() {
    useEffect(() => {
        const lightbox = GLightbox({
            selector: ".glightbox",
        });
    }, []);
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
                {/* Progress start  */}
                <section className="powering-progress pt-5">
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center mb-5">
                                    <h2 className="section-title">Media Resources</h2>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section className='leader-section pb-5'>
                    <div className="container-fluid plr">
                        <ul
                            className="nav nav-pills mb-3 position-unset"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active pl-0"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    Photos
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                >
                                    Videos
                                </button>
                            </li>

                        </ul>
                        <div className="tab-content mt-4" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-home"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                            >
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="team-card shadow rounded bg-light h-100 cursor-pointer">
                                            <a
                                                href="assets/images/media-team-1.png"
                                                className="glightbox"
                                                data-gallery="projects"
                                                data-title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"
                                            >
                                                <img
                                                    src="assets/images/media-team-1.png"
                                                    alt="project"
                                                    className="img-fluid rounded-top mb-3"
                                                />

                                            </a>
                                            <div className="team-name">
                                                <p className="text-mute blog-title">
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                    nonummy nibh euismod
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-profile"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab"
                            >
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="team-card shadow rounded bg-light h-100 cursor-pointer">
                                            <a
                                                href="assets/images/project-1.png"
                                                className="glightbox"
                                                data-gallery="projects"
                                                data-title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"
                                            >
                                                <img
                                                    src="assets/images/project-1.png"
                                                    alt="project"
                                                    className="img-fluid rounded-top mb-3"
                                                />

                                            </a>
                                            <div className="team-name">
                                                <p className="text-mute blog-title">
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                    nonummy nibh euismod
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        {/* <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                        >
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="team-card shadow rounded bg-light h-100 cursor-pointer">
                                        <a
                                            href="assets/images/project-1.png"
                                            className="glightbox"
                                            data-gallery="projects"
                                            data-title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"
                                        >
                                            <img
                                                src="assets/images/project-1.png"
                                                alt="project"
                                                className="img-fluid rounded-top mb-3"
                                            />

                                        </a>
                                        <div className="team-name">
                                            <p className="text-mute blog-title">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                nonummy nibh euismod
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
