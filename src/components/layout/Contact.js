import React, { useState } from "react";
import Header from "../include/Header";
import Footer from '../include/Footer';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import Select from "../admin2/views/forms/select/Select";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        contactNo: "",
        companyName: "",
        message: "",
    });

    const [captchaValue, setCaptchaValue] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCaptcha = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert("Please verify that you are not a robot.");
            return;
        }
        console.log(formData);
        alert("Form submitted!");
        // Send form data to your backend here
    };
    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/contact-us-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2>Contact Us</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section className="powering-progress pt-5">
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center mb-5">
                                    <h2 className="section-title">Query Form</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid plr mt-5">
                        <form className="contect-form" onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter your Full name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Contact No</label>
                                    <input
                                        type="text"
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter contact number"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Type of Query</label>
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option value="1">General </option>
                                        <option value="2">Business Related</option>
                                        <option value="3">Career Related</option>
                                        <option value="3">Investor Related</option>
                                        <option value="3">Others</option>

                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-8">
                                    <label className="form-label">Remark / Message*</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter your message"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-md-4 d-flex align-items-center">
                                    <ReCAPTCHA
                                        sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                        onChange={handleCaptcha}
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-center contact-btn pb-5 my-5">
                                <div className="btn-design mb-5">
                                    <Link to="#" className="custom-btn">
                                        Submit
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="powering-progres pb-5 pt-5">
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center mb-5">
                                    <h2 className="section-title">Office Locations</h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div> <h4>Headquarter</h4>
                                    <p>AIPL Business Club, Tower-3, 12th Floor, Sector - 62, Gurugram - 122002, Haryana</p>
                                    <h4 className="mt-5">Other</h4>
                                    <p>AGF 51, Phase IV, Udyog Vihar, Sector 18, Gurugram, Shahpur, Haryana 122001</p></div>
                            </div>
                            <div className="col-lg-8">
                                <img src="assets/images/location.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
