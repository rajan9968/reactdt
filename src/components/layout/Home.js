import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import * as bootstrap from 'bootstrap';




export default function Home() {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const mainOffcanvasRef = useRef(null);
    const submenuRef = useRef(null);
    const handleSubmenuOpen = (e) => {
        e.preventDefault();
        setIsSubmenuOpen(true);

        // Show submenu using Bootstrap Offcanvas
        const bsOffcanvas = new bootstrap.Offcanvas(submenuRef.current);
        bsOffcanvas.show();

        // Shift main offcanvas smoothly
        if (mainOffcanvasRef.current) {
            mainOffcanvasRef.current.style.marginRight = '21em';

            // Hide main offcanvas close button
            const mainCloseBtn = mainOffcanvasRef.current.querySelector('.btn-clos');
            if (mainCloseBtn) mainCloseBtn.style.display = 'none';
        }

        // Reset main offcanvas when submenu closes
        submenuRef.current.addEventListener('hidden.bs.offcanvas', () => {
            if (mainOffcanvasRef.current) {
                mainOffcanvasRef.current.style.marginRight = '';
                const mainCloseBtn = mainOffcanvasRef.current.querySelector('.btn-clos');
                if (mainCloseBtn) mainCloseBtn.style.display = 'block';
            }
            setIsSubmenuOpen(false);
        });
    };

    const offcanvasRef = useRef(null);

    const openOffcanvas = (e) => {
        e.preventDefault();
        offcanvasRef.current.classList.add("show");
    };

    const closeOffcanvas = () => {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
        if (bsOffcanvas) {
            bsOffcanvas.hide(); // properly triggers hide events
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (window.scrollY > 50) {
                header.classList.add("shrink");
            } else {
                header.classList.remove("shrink");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const slides = [
        {
            title: "4 GW | Solar",
            location: "Bikaner, Rajasthan",
            description:
                "Loremipsumdolorsitamet,consectetueradipiscingelit,seddiamnonummy nibheuismodtinciduntutlaoreetdoloremagnaaliquameratvolutpat.Ut wisienimadminimveniam.Seddiamnonummynibheuismodtinciduntut laoreet dolore magna aliquam erat volutpat.",
            icon: "assets/images/his-1.png",
            number: "4 GW",
            bgImage: "assets/images/prof-bg.png",
        },
        {
            title: "2 GW | Solar",
            location: "Fatehgarh, Rajasthan",
            description:
                "Loremipsumdolorsitamet,consectetueradipiscingelit,seddiamnonummy nibheuismodtinciduntutlaoreetdoloremagnaaliquameratvolutpat.Ut wisienimadminimveniam.Seddiamnonummynibheuismodtinciduntut laoreet dolore magna aliquam erat volutpat.",
            icon: "assets/images/his-1.png",
            number: "2 GW",
            bgImage: "assets/images/banner.png",
        },
        {
            title: "2 GW | Solar",
            location: "Anantapur, AP",
            description:
                "Loremipsumdolorsitamet,consectetueradipiscingelit,seddiamnonummy nibheuismodtinciduntutlaoreetdoloremagnaaliquameratvolutpat.Ut wisienimadminimveniam.Seddiamnonummynibheuismodtinciduntut laoreet dolore magna aliquam erat volutpat.",
            icon: "assets/images/his-1.png",
            number: "2 GW",
            bgImage: "assets/images/prof-bg.png",
        },
        {
            title: "5 GW | Solar",
            location: "Anantapur, AP",
            description:
                "Loremipsumdolorsitamet,consectetueradipiscingelit,seddiamnonummy nibheuismodtinciduntutlaoreetdoloremagnaaliquameratvolutpat.Ut wisienimadminimveniam.Seddiamnonummynibheuismodtinciduntut laoreet dolore magna aliquam erat volutpat.",
            icon: "assets/images/his-1.png",
            number: "2 GW",
            bgImage: "assets/images/prof-bg.png",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const slides2 = [
        { img: "assets/images/join-1.png", alt: "Join 1" },
        { img: "assets/images/join-2.png", alt: "Join 2" },
        { img: "assets/images/join-2.png", alt: "Join 2" },
        // add more slides here
    ];

    const newsData = [

        {
            img: "assets/images/news-1.png",
            date: "June 26, 2025 / News",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
        {
            img: "assets/images/news-2.png",
            date: "June 20, 2025 / Press Release",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
        {
            img: "assets/images/news-3.jpg",
            date: "June 02, 2025 / Case Studies",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
        {
            img: "assets/images/news-3.jpg",
            date: "June 02, 2025 / Case Studies",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
    ];


    return (
        <div>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="nav mt-4">
                            <div className="col-lg-4">
                                <a href="#" className="logo">
                                    <img src="assets/images/datta-logo.png" alt="" srcSet="" />
                                </a>
                            </div>
                            <div className="col-lg-8">
                                <img
                                    src="assets/images/menu-icon.jpg"
                                    className="navOpenBtn"
                                    alt=""
                                    srcSet=""
                                />
                                <div className="d-flex justify-content-end align-items-center h-100">
                                    <ul className="nav-links">
                                        <i className="uil uil-times navCloseBtn" />
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Culture</a>
                                        </li>
                                        <li>
                                            <a href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="bi bi-search search-icon" id="searchIcon" />
                                            </a>
                                        </li>
                                        <li className="ml-3">
                                            <a
                                                href="#"
                                                type="button"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasRight"
                                                aria-controls="offcanvasRight"
                                            >
                                                <img src="assets/images/menu-icon.jpg" alt="" srcSet="" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="search-box">
                                        <i className="bi bi-search search-icon" />
                                        <input type="text" placeholder="Search here..." />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="offcanvas offcanvas-end custom-off"
                                ref={mainOffcanvasRef}
                                tabIndex={-1}
                                id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel"
                            >
                                <div className="offcanvas-header justify-content-end">
                                    <button
                                        type="button"
                                        className="btn-clos text-reset custom-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    >
                                        <img src="assets/images/cross.svg" alt="" />
                                    </button>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="offcanvas-menu">
                                        <ul className="offcanvas-links">
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between">
                                                    <a
                                                        href="#"
                                                        className="submenu-toggle"
                                                        data-target="#offcanvasRight2"

                                                        onClick={handleSubmenuOpen}
                                                    >
                                                        About Us
                                                    </a>
                                                    <i className="fa fa-angle-right cross-icon" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between">
                                                    <a href="#">Business</a>
                                                    <i className="fa fa-angle-right cross-icon" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between">
                                                    <a href="#">Culture</a>
                                                    <i className="fa fa-angle-right cross-icon" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between">
                                                    <a href="#">Awards</a>
                                                    <i className="fa fa-angle-right cross-icon" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between">
                                                    <a href="#">Investors</a>
                                                    <i className="fa fa-angle-right cross-icon" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between">
                                                    <a href="#">Newsroom</a>
                                                    <i className="fa fa-angle-right cross-icon" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between">
                                                    <a href="#">Resources</a>
                                                    <i className="fa fa-angle-right cross-icon" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between">
                                                    <a href="#">Careers</a>
                                                    <i className="fa fa-angle-right cross-icon" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between">
                                                    <a href="#">Contact</a>
                                                    <i className="fa fa-angle-right cross-icon" />
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="social-icons d-flex align-items-center justify-content-between">
                                            <li>
                                                <i className="fa fa-facebook-f custom-fa" />
                                            </li>
                                            <li>
                                                <i className="bi bi-twitter-x custom-fa" />
                                            </li>
                                            <li>
                                                <i className="fa fa-linkedin custom-fa" />
                                            </li>
                                            <li>
                                                <i className="fa fa-instagram custom-fa" />
                                            </li>
                                            <li>
                                                <i className="fa fa-youtube-play custom-fa" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Submenu Offcanvas */}
                            <div
                                ref={submenuRef}
                                className="offcanvas offcanvas-end custom-off submenu-off"
                                tabIndex={-1}
                                id="offcanvasRight2"
                                aria-labelledby="offcanvasRightLabel2"
                            >
                                <div className="offcanvas-header justify-content-end m-0">
                                    <button
                                        type="button"
                                        className="btn-clos text-reset custom-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                        onClick={closeOffcanvas}
                                    >
                                        <img src="assets/images/cross.svg" alt="" />
                                    </button>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="offcanvas-menu">
                                        <ul className="offcanvas-links w-75">
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between border-0">
                                                    <a href="#" className="text-black">
                                                        Who We Are
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between border-0">
                                                    <a href="#" className="text-black">
                                                        Leadership
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-li d-flex align-items-center justify-content-between border-0">
                                                    <a href="#" className="text-black">
                                                        Project Portfolio
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasRight2"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">...</div>
            </div>
            <main>
                <section className="top-banner">
                    <div className="slider-container">
                        {/* Slide 1 */}
                        <div
                            className="slide active"
                            style={{ backgroundImage: 'url("./assets/images/banner.png")' }}
                        >
                            <div className="slide-content">
                                <h1 className="slide-title">
                                    Empowering Tomorrow with Sustainable Solutions
                                </h1>
                                <div className="stats-container">
                                    <div className="stat-item">
                                        <div className="stat-number">13 GW +</div>
                                        <div className="stat-label">
                                            Experience in
                                            <br />
                                            Pre-Development EPC
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">55000+</div>
                                        <div className="stat-label">
                                            Acres of land acquired
                                            <br />
                                            for solar projects
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">4GW</div>
                                        <div className="stat-label">
                                            Solar Park
                                            <br />
                                            Capacity
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div
                            className="slide"
                            style={{ backgroundImage: 'url("./assets/images/banner.png")' }}
                        >
                            <div className="slide-content">
                                <h1 className="slide-title">
                                    Empowering Tomorrow with Sustainable Solutions
                                </h1>
                                <div className="stats-container">
                                    <div className="stat-item">
                                        <div className="stat-number">13 GW +</div>
                                        <div className="stat-label">
                                            Experience in
                                            <br />
                                            Pre-Development EPC
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">55000+</div>
                                        <div className="stat-label">
                                            Acres of land acquired
                                            <br />
                                            for solar projects
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">4GW</div>
                                        <div className="stat-label">
                                            Solar Park
                                            <br />
                                            Capacity
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div
                            className="slide"
                            style={{ backgroundImage: 'url("./assets/images/banner.png")' }}
                        >
                            <div className="slide-content">
                                <h1 className="slide-title">
                                    Empowering Tomorrow with Sustainable Solutions
                                </h1>
                                <div className="stats-container">
                                    <div className="stat-item">
                                        <div className="stat-number">13 GW +</div>
                                        <div className="stat-label">
                                            Experience in
                                            <br />
                                            Pre-Development EPC
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">55000+</div>
                                        <div className="stat-label">
                                            Acres of land acquired
                                            <br />
                                            for solar projects
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">4GW</div>
                                        <div className="stat-label">
                                            Solar Park
                                            <br />
                                            Capacity
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slider Navigation */}
                        <div className="slider-nav">
                            <div className="slider-dot active" id="prevBtn" data-slide={0} />
                            <div className="slider-dot" id="nextBtn" data-slide={1} />
                            <div className="slider-dot" data-slide={2} />
                        </div>
                    </div>
                </section>
                {/* Our Business start  */}
                <section className="our-business my-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Our Business</h2>
                            <p className="section-text">
                                Datta Infra operates across the energy value chain with expertise in
                                pre-development EPC, turnkey EPC, grid infrastructure, and
                                independent power production, creating long-term value through
                                reliable and sustainable power solutions.
                            </p>
                        </div>
                        <div className="row g-5">
                            {/* Pre-Development EPC */}
                            <div className="col-md-6 col-lg-3 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/bussniess-icon-1.png"
                                        className="card-image"
                                        alt="Pre-Development EPC"
                                    />
                                    <h3>Pre-Development EPC</h3>
                                    <p>
                                        Laying the groundwork with site selection, approvals, and
                                        project readiness.
                                    </p>
                                </div>
                            </div>
                            {/* Turnkey EPC Projects */}
                            <div className="col-md-6 col-lg-3 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/bussniess-icon-2.png"
                                        className="card-image"
                                        alt="Turnkey EPC Projects"
                                    />
                                    <h3>Turnkey EPC Projects</h3>
                                    <p>
                                        Delivering end-to-end execution covering design, procurement,
                                        construction, and O&amp;M.
                                    </p>
                                </div>
                            </div>
                            {/* Grid Infrastructure */}
                            <div className="col-md-6 col-lg-3 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/bussniess-icon-3.png"
                                        className="card-image"
                                        alt="Grid Infrastructure"
                                    />
                                    <h3>Grid Infrastructure</h3>
                                    <p>
                                        Seamless grid integration with reliable planning, construction,
                                        and maintenance.
                                    </p>
                                </div>
                            </div>
                            {/* Independent Power Producer */}
                            <div className="col-md-6 col-lg-3 col-6">
                                <div className="card-custom">
                                    <img
                                        src="assets/images/bussniess-icon-4.png"
                                        className="card-image"
                                        alt="Independent Power Producer"
                                    />
                                    <h3>Independent Power Producer</h3>
                                    <p>
                                        Own, operate, and generate clean power with optimized sites and
                                        compliance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="trusted-section mt-5">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-3 col-md-12 d-flex align-items-center justify-content-center mb-3 mb-lg-0">
                                    <div className="trusted-title d-flex align-items-center">
                                        <div className="circle" />
                                        <h2 className="section-title mb-0 ms-2">Trusted By</h2>
                                    </div>
                                    <div className="divider" />
                                </div>
                                <div className="col-lg-9">
                                    <div className="trusted-logos d-flex justify-content-between align-items-center flex-wrap">
                                        <img
                                            src="assets/images/logo-1.png"
                                            className="img-fluid trust-logo"
                                            alt="NTPC"
                                        />
                                        <img
                                            src="assets/images/logo-2.png"
                                            className="img-fluid trust-logo"
                                            alt="Engie"
                                        />
                                        <img
                                            src="assets/images/logo-3.png"
                                            className="img-fluid trust-logo"
                                            alt="Tata Power"
                                        />
                                        <img
                                            src="assets/images/logo-4.png"
                                            className="img-fluid trust-logo"
                                            alt="SJVN"
                                        />
                                        <img
                                            src="assets/images/logo-5.png"
                                            className="img-fluid trust-logo"
                                            alt="Indian Oil"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Our Business end  */}
                {/* Progress start  */}
                <section className="powering-progress py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">
                                Powering Progress, Sustaining Tomorrow
                            </h2>
                            <p className="section-text">
                                Delivering clean energy infrastructure that drives growth,
                                resilience, and long-term value.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="power-img">
                                    <img
                                        src="assets/images/pro-1.png"
                                        className="img-fluid w-100"
                                        alt=""
                                        srcSet=""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex flex-column">
                                <div className="power-content mb-auto">
                                    <h4>
                                        Loremipsumdolorsitamet,
                                        <br /> consectetuer adipiscing ipsum
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing ipsum dolor
                                        sit amet, consectetuer adipiscing ipsum dolor sit amet Lorem
                                        ipsum dolor sit amet, consectetuer adipiscing...
                                    </p>
                                </div>
                                <div className="d-flex align-items-end justify-content-between">
                                    <div className="btn-design-new mt-3">
                                        <a href="" className="custom-btn">
                                            Read More
                                        </a>
                                        <svg
                                            viewBox="-19.04 0 75.804 75.804"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#ffffff"
                                            stroke="#ffffff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <g id="SVGRepo_iconCarrier">
                                                <g
                                                    id="Group_65"
                                                    data-name="Group 65"
                                                    transform="translate(-831.568 -384.448)"
                                                >
                                                    <path
                                                        id="Path_57"
                                                        data-name="Path 57"
                                                        d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                                                        fill="#ffffff"
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="group-icon">
                                        <img src="assets/images/Group-icon.png" alt="" srcSet="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Progress end  */}
                {/* Our Portfolio start  */}
                <section className="py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Our Portfolio</h2>
                            <p className="section-text">
                                Each project represents a milestone in Datta Infra’s growth journey,
                                underlining our expertise in delivering high-impact infrastructure
                                that combines scale, reliability, and sustainable value for
                                investors.
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className="our-portfolio mb-4"
                    style={{
                        background: `url(${slides[activeIndex].bgImage}) no-repeat center center/cover`,
                        minHeight: "80vh",
                        display: "flex",
                        alignItems: "center",
                        color: "#fff",
                        padding: "0 2rem",
                    }}
                >
                    <div className="container-fluid">
                        {/* Dynamic content-text */}
                        <div className="content-text">
                            <h3>
                                {slides[activeIndex].title} <br />
                                {slides[activeIndex].location}
                            </h3>
                            <p>{slides[activeIndex].description}</p>
                        </div>

                        <div className="btn-design">
                            <a href="" className="custom-btn">
                                View Our Portfolio
                            </a>
                            <svg
                                viewBox="-19.04 0 75.804 75.804"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#ffffff"
                                stroke="#ffffff"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)">
                                        <path
                                            id="Path_57"
                                            data-name="Path 57"
                                            d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                                            fill="#ffffff"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>

                        {/* Swiper carousel showing history-boxes */}
                        <div id="history-carousel">
                            <Swiper
                                className="history-swiper"
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={3}
                                navigation={{
                                    prevEl: '#history-carousel .swiper-button-prev',
                                    nextEl: '#history-carousel .swiper-button-next',
                                }}
                                loop
                                autoplay={{ delay: 5000 }}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                }}
                            >
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="history-box d-flex">
                                            <div className="history-image">
                                                <img src={slide.icon} alt={slide.location} />
                                            </div>
                                            <div>
                                                <div className="history-content">
                                                    <p>
                                                        {slide.title}
                                                        <br />
                                                        {slide.location}
                                                    </p>
                                                </div>
                                                <div className="number-part">
                                                    <div className="outline-text">{slide.number}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation Buttons */}
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>

                    </div>
                </section>
                {/* Our Portfolio end  */}
                {/* Join start  */}
                <section className="join-us py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title text-white">Why Join Datta Infra?</h2>
                            <p className="section-text text-white">
                                Our values shape strategy, strengthen partnerships, and sustain
                                growth
                            </p>
                            <div className="d-flex justify-content-center align-items-center mt-5 mb-4">
                                <div className="btn-design-new d-flex align-items-center">
                                    <a href="#" className="custom-btn">
                                        Explore Opportunities
                                    </a>
                                    <svg
                                        viewBox="-19.04 0 75.804 75.804"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#ffffff"
                                        stroke="#ffffff"
                                        width={28}
                                        height={28}
                                        className="ml-2"
                                    >
                                        <g id="SVGRepo_iconCarrier">
                                            <g id="Group_65" transform="translate(-831.568 -384.448)">
                                                <path
                                                    id="Path_57"
                                                    d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                                                    fill="#ffffff"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Owl Carousel */}
                        <div id="join-carousel-w" className="join-carousel-wrapper">
                            <Swiper
                                modules={[Autoplay, Pagination]} // use Pagination instead of Navigation
                                spaceBetween={20}
                                slidesPerView={3}
                                id="join-carousel"
                                loop={true}
                                autoplay={{ delay: 3000 }}
                                pagination={{ clickable: true }} // enable dots
                                breakpoints={{
                                    0: { slidesPerView: 1 },    // mobile
                                    576: { slidesPerView: 2 },  // small devices
                                    992: { slidesPerView: 2 },  // desktop
                                }}
                            >
                                {slides2.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={slide.img} className="img-fluid" alt={slide.alt} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </section>
                {/* Join end  */}
                {/* What's New start  */}
                <section className="what-new py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">What's New</h2>
                            <p className="section-text">
                                Catch the latest updates and insights reflecting Datta Infra's
                                journey and growth.
                            </p>
                        </div>
                        <div id="new-carousel" style={{ position: 'relative' }}>
                            {/* Custom Navigation Buttons */}
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>

                            <Swiper
                                className="news-swiper"
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={3}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                loop={true}
                                autoplay={{ delay: 3000 }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 }
                                }}
                            >
                                {newsData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="news-box">
                                            <div className="new-image">
                                                <img src={item.img} className="img-fluid" alt="news" />
                                            </div>
                                            <div className="news-content">
                                                <p>{item.date}</p>
                                                <p className="content-news-para">{item.text}</p>
                                                <div className="btn-design-new">
                                                    <a href="#" className="custom-btn">Read More</a>
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
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                {/* <section className="what-new py-5">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">What's New</h2>
                            <p className="section-text">
                                Catch the latest updates and insights reflecting Datta Infra’s
                                journey and growth.
                            </p>
                        </div>
                        <div id="new-carousel">
                            <Swiper
                                className="news-swiper"
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}       // gap between slides
                                slidesPerView={3}       // number of slides per view
                                navigation               // enable next/prev buttons
                                loop={true}             // infinite loop
                                autoplay={{ delay: 3000 }} // optional autoplay
                                breakpoints={{          // responsive
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 }
                                }}
                            >
                                {newsData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="news-box">
                                            <div className="new-image">
                                                <img src={item.img} className="img-fluid" alt="news" />
                                            </div>
                                            <div className="news-content">
                                                <p>{item.date}</p>
                                                <p className="content-news-para">{item.text}</p>
                                                <div className="btn-design-new">
                                                    <a href="#" className="custom-btn">Read More</a>
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
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </section> */}
                {/* What's New end  */}
                {/* ready to talk start */}
                <section className="ready">
                    <div className="container-fluid plr">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-center gap-3 align-items-center text-center">
                                    <h2>Ready to connect?</h2>
                                    <div className="btn-design-new">
                                        <a href="" className="custom-btn">
                                            Contact Us
                                        </a>
                                        <svg
                                            viewBox="-19.04 0 75.804 75.804"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#ffffff"
                                            stroke="#ffffff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g
                                                id="SVGRepo_tracerCarrier"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <g id="SVGRepo_iconCarrier">
                                                <g
                                                    id="Group_65"
                                                    data-name="Group 65"
                                                    transform="translate(-831.568 -384.448)"
                                                >
                                                    <path
                                                        id="Path_57"
                                                        data-name="Path 57"
                                                        d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
                                                        fill="#ffffff"
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ready to talk end */}
            </main>
            <footer className="footer py-5">
                <div className="container-fluid plr">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="logo-footer mb-5">
                                <img src="assets/images/footer-logo.png" alt="" srcSet="" />
                            </div>
                            <div className="footer-menu d-flex">
                                <div>
                                    <h5>About Us</h5>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#">Who We Are</a>
                                        </li>
                                        <li>
                                            <a href="#">Leadership</a>
                                        </li>
                                        <li>
                                            <a href="#">Project Portfolio</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Business</h5>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#">Pre-Development EPC</a>
                                        </li>
                                        <li>
                                            <a href="#">Turnkey EPC Projects</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Transmission Lines &amp;
                                                <br /> Pooling Sub-Stations
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Independent Power
                                                <br /> Producing
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Culture</h5>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#">Blogs</a>
                                        </li>
                                        <li>
                                            <a href="#">Case Studies</a>
                                        </li>
                                        <li>
                                            <a href="#">Project Videos</a>
                                        </li>
                                        <li>
                                            <a href="#">Client Testimonials</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQs</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>News Room</h5>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#">News and Media</a>
                                        </li>
                                        <li>
                                            <a href="#">Gallery</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Awards</h5>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#">Careers </a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-10">
                            <div className="footer-menu contact">
                                <h5>Headquarter</h5>
                                <ul className="">
                                    <li>
                                        AIPL Business Club, Tower-3, 12th Floor, Sector - 62, Gurugram -
                                        122002, Haryana
                                    </li>
                                    <li>
                                        <img src="assets/images/phone-icon.png" alt="" srcSet="" />
                                        <a href="tel:+">+91-124-448-8852</a>
                                    </li>
                                    <li>
                                        <img src="assets/images/mail-icon.png" alt="" srcSet="" />
                                        <a href="mailto:info@dattainfra.com">info@dattainfra.com</a>
                                    </li>
                                </ul>
                                <ul className="social-icons d-flex align-items-center justify-content-center gap-1 mt-4">
                                    <li>
                                        <i className="fa fa-facebook-f custom-fa" />
                                    </li>
                                    <li>
                                        <i className="bi bi-twitter-x custom-fa" />
                                    </li>
                                    <li>
                                        <i className="fa fa-linkedin custom-fa" />
                                    </li>
                                    <li>
                                        <i className="fa fa-instagram custom-fa" />
                                    </li>
                                    <li>
                                        <i className="fa fa-youtube-play custom-fa" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="copyright" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}