import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Header from "../include/Header";
import Footer from '../include/Footer';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Leadership() {
    const teamMembers = [
        {
            id: 1,
            name: "Mr. Varchasvi Gagal",
            position: "CEO & MD",
            image: "assets/images/team-1.png",
            description:
                "Bringing dynamic vision and a relentless drive for excellence, Mr. Singh continues to set industry benchmarks, leading Datta Infra's growth, innovation, and stakeholder value creation.",
        },
        {
            id: 2,
            name: "Mr. Kuldeep Singh",
            position: "Chairman",
            image: "assets/images/team-2.png",
            description:
                "Leading Datta Infra with innovation and strategic insight, Mr. Gagal drives growth and sets new standards for excellence in the infrastructure sector.",
        }
    ];

    const [show, setShow] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleClose = () => setShow(false);

    const handleShow = (member) => {
        setSelectedMember(member);
        setShow(true);
    };


    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/leadership-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2>Leadership Team</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">Leadership Team</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>


                <section className='leader-section py-5'>
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
                                    Key Management
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
                                    Board of Directors
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-contact-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                >
                                    Head of Department
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
                                    {teamMembers.map((member) => (
                                        <div
                                            className="col-lg-4 mb-4"
                                            key={member.id}
                                            onClick={() => handleShow(member)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="team-card shadow rounded bg-light">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="img-fluid rounded-top mb-3"
                                                />
                                                <div className="team-name">
                                                    <h5 className="mb-1">{member.name}</h5>
                                                    <p className="">{member.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Dynamic Offcanvas */}
                                <Offcanvas
                                    show={show}
                                    onHide={handleClose}
                                    placement="end"
                                    className="custom-offcanvas"
                                >
                                    {selectedMember && (
                                        <>
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title></Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body className="p-4">
                                                <div className="row g-0">
                                                    <div className="col-md-5">
                                                        <img
                                                            src={selectedMember.image}
                                                            alt={selectedMember.name}
                                                            className="img-fluid h-100 object-fit-cover"
                                                        />
                                                    </div>
                                                    <div className="col-md-7 p-4">
                                                        <h3 className="member-name">{selectedMember.name}</h3>
                                                        <h6 className="member-position mb-3">
                                                            {selectedMember.position}
                                                        </h6>
                                                        <div className="social-icons mt-3">
                                                            <a
                                                                href="#"
                                                                className="btn btn-outline-secondary btn-sm rounded-circle me-2"
                                                            >
                                                                <i className="bi bi-linkedin"></i>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn btn-outline-secondary btn-sm rounded-circle me-2"
                                                            >
                                                                <i className="bi bi-twitter-x"></i>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn btn-outline-secondary btn-sm rounded-circle me-2"
                                                            >
                                                                <i className="bi bi-instagram"></i>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn btn-outline-secondary btn-sm rounded-circle"
                                                            >
                                                                <i className="bi bi-facebook"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3">{selectedMember.description}</p>
                                            </Offcanvas.Body>
                                        </>
                                    )}
                                </Offcanvas>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                        >
                            ...
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-contact"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                        >
                            ...
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
