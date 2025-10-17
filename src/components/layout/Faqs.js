import React, { useState } from "react";
import Header from "../include/Header";
import Footer from '../include/Footer';
import Accordion from 'react-bootstrap/Accordion';


export default function Faqs() {
    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/faq-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2>Our FAQs</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">FAQs</a>
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
                                    <h2 className="section-title">FAQs</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Accordion>
                                    <Accordion.Item className="mb-3" eventKey="0">
                                        <Accordion.Header>What are the key steps in developing a solar power project?</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Feasibility study and site assessment</li>
                                                <li>Securing land and obtaining necessary permits</li>
                                                <li>Designing the system and selecting equipment</li>
                                                <li>Financing the project</li>
                                                <li>Construction and installation</li>
                                                <li>Commissioning and connecting to the grid</li>
                                                <li>Operation and maintenance</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item className="mb-3" eventKey="1">
                                        <Accordion.Header>What permits and approvals are needed for a solar project?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item className="mb-3" eventKey="2">
                                        <Accordion.Header>What are Power Purchase Agreements (PPAs)?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            <div className="col-lg-6">
                                <Accordion>
                                    <Accordion.Item className="mb-3" eventKey="0">
                                        <Accordion.Header>What are the key steps in developing a solar power project?</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Feasibility study and site assessment</li>
                                                <li>Securing land and obtaining necessary permits</li>
                                                <li>Designing the system and selecting equipment</li>
                                                <li>Financing the project</li>
                                                <li>Construction and installation</li>
                                                <li>Commissioning and connecting to the grid</li>
                                                <li>Operation and maintenance</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item className="mb-3" eventKey="1">
                                        <Accordion.Header>What permits and approvals are needed for a solar project?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item className="mb-3" eventKey="2">
                                        <Accordion.Header>What are Power Purchase Agreements (PPAs)?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>

                    </div>
                </section>



            </main>
            <Footer />
        </div>
    )
}
