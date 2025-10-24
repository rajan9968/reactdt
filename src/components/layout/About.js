import React from 'react'
import Header from "../include/Header";
import Footer from '../include/Footer';
import { FaLocationDot } from "react-icons/fa6";


export default function About() {
    const timelineData = [
        {
            year: '1987',
            title: 'Start of the Journey',
            description: 'Aiming to contribute 30 GW to India’s green energy future by 2030 through large- scale renewable projects, while strengthening our position as a key partner in achieving the nation’s sustainability goals.',
            employees: '10',
            img: 'assets/images/timeline-1.png',
        },
        {
            year: '2019',
            title: 'New Milestone',
            description: 'Aiming to contribute 30 GW to India’s green energy future by 2030 through large- scale renewable projects, while strengthening our position as a key partner in achieving the nation’s sustainability goals.',
            employees: '20+',
            img: 'assets/images/timeline-1.png',
        },
        {
            year: '2020 – 2021',
            title: 'Consolidation Phase',
            description: 'Aiming to contribute 30 GW to India’s green energy future by 2030 through large- scale renewable projects, while strengthening our position as a key partner in achieving the nation’s sustainability goals.',
            employees: '35',
            img: 'assets/images/timeline-1.png',
        },
        {
            year: '2022',
            title: 'Global Growth',
            description: 'Aiming to contribute 30 GW to India’s green energy future by 2030 through large- scale renewable projects, while strengthening our position as a key partner in achieving the nation’s sustainability goals.',
            employees: '50+',
            img: 'assets/images/timeline-1.png',
        },
        {
            year: '2024',
            title: 'Vision 2024',
            description: 'Aiming to contribute 30 GW to India’s green energy future by 2030 through large- scale renewable projects, while strengthening our position as a key partner in achieving the nation’s sustainability goals.',
            employees: '55+',
            img: 'assets/images/timeline-1.png',
        },
    ];
    return (
        <div>
            <Header />
            <main>
                <section className="about-banner position-relative wings-top-section">
                    <img
                        src="assets/images/about-us-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="about-banner-caption">
                            <h2>Who we are</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li>
                                    <a href="#">Who we are</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                {/* Progress start  */}
                <section className="powering-progress vision-section py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Overview</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="power-img">
                                    <img
                                        src="assets/images/join-1.png"
                                        className="img-fluid w-100 rounded"
                                        alt="Team working together"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-between">
                                <div className="power-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                        volutpat.
                                    </p>
                                    <p>
                                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className="d-flex align-items-end justify-content-end">
                                    <div className="group-icon">
                                        <img src="assets/images/Group-icon.png" alt="Decorative group icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Progress end  */}
                <section className="our-business vision-section my-5">
                    <div className="container-fluid plr">
                        <div className="row g-5">
                            {/* Turnkey EPC Projects */}
                            <div className="col-md-6 col-lg-4 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/Vision-icon.png"
                                        className="card-image"
                                        alt="Turnkey EPC Projects"
                                    />
                                    <h3>Vision</h3>
                                    <p>
                                        powers India’s sustainable goals and shapes its clean
                                        Driving climate action by building infrastructure that
                                        energy future.
                                    </p>
                                </div>
                            </div>
                            {/* Grid Infrastructure */}
                            <div className="col-md-6 col-lg-4 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/mission-icon.png"
                                        className="card-image"
                                        alt="Grid Infrastructure"
                                    />
                                    <h3>Mission</h3>
                                    <p>
                                        Driving the transition to sustainable energy by developing
                                        ground-breaking technologies, addressing challenges
                                        head-on, and l eading the way to a cleaner, greener
                                        future.
                                    </p>
                                </div>
                            </div>
                            {/* Independent Power Producer */}
                            <div className="col-md-6 col-lg-4 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/pur-icon.png"
                                        className="card-image"
                                        alt="Independent Power Producer"
                                    />
                                    <h3>Purpose</h3>
                                    <p>
                                        purpose-built to contribute to these targets, supporting
                                        At Datta Infra, our projects and partnerships are
                                        India’s ‘2030 sustainability vision’ and the broader
                                        ambition of ‘Viksit Bharat 2047’.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="our-business core-values my-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Core Values</h2>
                        </div>
                        <div className="row g-5">
                            {/* Pre-Development EPC */}
                            <div className="col-md-6 col-lg-3 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/sustainability-icon.png"
                                        className="card-image"
                                        alt="Pre-Development EPC"
                                    />
                                    <h3>Sustainability</h3>
                                    <p>
                                        Commitment to building a cleaner
                                        future through sustainable energy
                                        to India’s green transition and goals.
                                        solutions, contributing meaningfully
                                    </p>
                                </div>
                            </div>
                            {/* Turnkey EPC Projects */}
                            <div className="col-md-6 col-lg-3 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/innovation-icon.png"
                                        className="card-image"
                                        alt="Turnkey EPC Projects"
                                    />
                                    <h3>Innovation</h3>
                                    <p>
                                        Redefining possibilities through
                                        forward-thinking solutions in
                                        infrastructure and renewable energy.
                                    </p>
                                </div>
                            </div>
                            {/* Grid Infrastructure */}
                            <div className="col-md-6 col-lg-3 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/collaboration-icon.png"
                                        className="card-image"
                                        alt="Grid Infrastructure"
                                    />
                                    <h3>Collaboration</h3>
                                    <p>
                                        Achieving shared goals to drive
                                        impactful change.
                                    </p>
                                </div>
                            </div>
                            {/* Independent Power Producer */}
                            <div className="col-md-6 col-lg-3 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/tntegrity-icon.png"
                                        className="card-image"
                                        alt="Independent Power Producer"
                                    />
                                    <h3>Integrity</h3>
                                    <p>
                                        Ensuring transparency, ethics, and
                                        compliance with the highest
                                        standards of Environment, Health,
                                        and Safety (EHS).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="timeline-banner">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Our Journey</h2>
                        </div>
                        <div className="timeline">
                            {timelineData.map((item, index) => (
                                <div className="timeline-item-wrapper" key={index}>
                                    <div className="timeline-dot"></div> {/* <-- Circle marker */}
                                    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                        <div className="timeline-content p-3 mb-5">
                                            <h4 className="year">{item.year}</h4>
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                            <p><strong>Number of Employees:</strong> {item.employees}</p>
                                        </div>
                                        <div className="timeline-image">
                                            <img src={item.img} alt={item.year} className="img-fluid rounded w-100" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="timeline-line"></div>
                        </div>

                    </div>
                </section>
                <section className="timeline-banner py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Our Presence</h2>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='text-center'>
                                    <img
                                        src="assets/images/our-presence-map.png"
                                        alt="awards"
                                        className="img-fluid"
                                        srcSet=""
                                    />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-start pl-4">
                                    <ul className="list-unstyled m-0">
                                        <li className="d-flex align-items-start gap-2 mb-4">
                                            <FaLocationDot className="text-color mt-1 fs-5" />
                                            <div>
                                                <span className="fw-semibold">Haryana</span>
                                                <p className="mb-0 text-muted small">Gurgaon (Head Office)</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start gap-2 mb-4">
                                            <FaLocationDot className="text-color mt-1 fs-5" />
                                            <div>
                                                <span className="fw-semibold">Rajasthan</span>
                                                <p className="mb-0 text-muted small">Jaisalmer | Devada | Masooriya | Devikot | Bhagwa
                                                    Asadi | Bikaner | Merta | Degana | Kalasar</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start gap-2 mb-4">
                                            <FaLocationDot className="text-color mt-1 fs-5" />
                                            <div>
                                                <span className="fw-semibold">Madhya Pradesh</span>
                                                <p className="mb-0 text-muted small">Mandsaur</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start gap-2 mb-4">
                                            <FaLocationDot className="text-color mt-1 fs-5" />
                                            <div>
                                                <span className="fw-semibold">Maharashtra</span>
                                                <p className="mb-0 text-muted small">Dhule</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start gap-2 mb-4">
                                            <FaLocationDot className="text-color mt-1 fs-5" />
                                            <div>
                                                <span className="fw-semibold">Andhra Pradesh</span>
                                                <p className="mb-0 text-muted small">Anantpur | Kurnool</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
