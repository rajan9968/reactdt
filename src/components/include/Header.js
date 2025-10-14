import React, { useState, useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const mainOffcanvasRef = useRef(null);
    const submenuRef = useRef(null);
    const headerRef = useRef(null);

    const handleSubmenuOpen = (e) => {
        e.preventDefault();
        setIsSubmenuOpen(true);

        // Show submenu using Bootstrap Offcanvas
        const bsOffcanvas = new bootstrap.Offcanvas(submenuRef.current);
        bsOffcanvas.show();

        // Shift main offcanvas smoothly
        if (mainOffcanvasRef.current) {
            mainOffcanvasRef.current.style.marginRight = "21em";

            // Hide main offcanvas close button
            const mainCloseBtn = mainOffcanvasRef.current.querySelector(".btn-clos");
            if (mainCloseBtn) mainCloseBtn.style.display = "none";
        }

        // Reset main offcanvas when submenu closes
        submenuRef.current.addEventListener("hidden.bs.offcanvas", () => {
            if (mainOffcanvasRef.current) {
                mainOffcanvasRef.current.style.marginRight = "";
                const mainCloseBtn = mainOffcanvasRef.current.querySelector(".btn-clos");
                if (mainCloseBtn) mainCloseBtn.style.display = "block";
            }
            setIsSubmenuOpen(false);
        });
    };

    const closeOffcanvas = () => {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(submenuRef.current);
        if (bsOffcanvas) bsOffcanvas.hide();
    };

    // Scroll shrink logic
    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;
            if (window.scrollY > 50) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header ref={headerRef}>
            <div className="container-fluid">
                <div className="row">
                    <div className="nav mt-4">
                        {/* Logo */}
                        <div className="col-lg-4">
                            <a href="#" className="logo">
                                <img src="assets/images/datta-logo.png" alt="logo" />
                            </a>
                        </div>

                        {/* Navigation */}
                        <div className="col-lg-8">
                            <img src="assets/images/menu-icon.jpg" className="navOpenBtn" alt="" />
                            <div className="d-flex justify-content-end align-items-center h-100">
                                <ul className="nav-links">
                                    <i className="uil uil-times navCloseBtn" />
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Culture</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Contact</a></li>
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
                                            <img src="assets/images/menu-icon.jpg" alt="" />
                                        </a>
                                    </li>
                                </ul>

                                <div className="search-box">
                                    <i className="bi bi-search search-icon" />
                                    <input type="text" placeholder="Search here..." />
                                </div>
                            </div>
                        </div>

                        {/* Main Offcanvas */}
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
                                        <li><i className="fa fa-facebook-f custom-fa" /></li>
                                        <li><i className="bi bi-twitter-x custom-fa" /></li>
                                        <li><i className="fa fa-linkedin custom-fa" /></li>
                                        <li><i className="fa fa-instagram custom-fa" /></li>
                                        <li><i className="fa fa-youtube-play custom-fa" /></li>
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
                                                <Link to="/about-us" className="text-black">Who We Are</Link>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between border-0">
                                                <a href="#" className="text-black">Leadership</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between border-0">
                                                <a href="#" className="text-black">Project Portfolio</a>
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
    );
}
