import React, { useState, useEffect, useRef } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    const [showMainOffcanvas, setShowMainOffcanvas] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const headerRef = useRef(null);

    // Handle main offcanvas
    const handleMainOffcanvasClose = () => setShowMainOffcanvas(false);
    const handleMainOffcanvasShow = () => setShowMainOffcanvas(true);

    // Handle submenu offcanvas
    const handleSubmenuOpen = (e) => {
        e.preventDefault();
        setShowSubmenu(true);
    };

    const handleSubmenuClose = () => {
        setShowSubmenu(false);
    };

    const closeAllOffcanvas = () => {
        setShowSubmenu(false);
        setShowMainOffcanvas(false);
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
                            <Link to="/" className="logo">
                                <img src="assets/images/datta-logo.png" alt="logo" />
                            </Link>
                        </div>

                        {/* Navigation */}
                        <div className="col-lg-8">
                            <img
                                src="assets/images/menu-icon.jpg"
                                className="navOpenBtn"
                                alt="Open menu"
                                role="button"
                                tabIndex={0}
                            />
                            <div className="d-flex justify-content-end align-items-center h-100">
                                <ul className="nav-links">
                                    <i className="uil uil-times navCloseBtn" />
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/business">Business</Link></li>
                                    <li><Link to="/culture">Culture</Link></li>
                                    <li><Link to="/careers">Careers</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li>
                                        <a href="#" aria-label="Search">
                                            <i className="bi bi-search search-icon" id="searchIcon" />
                                        </a>
                                    </li>
                                    <li className="ml-3">
                                        <button
                                            type="button"
                                            onClick={handleMainOffcanvasShow}
                                            aria-label="Open navigation menu"
                                            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                                        >
                                            <img src="assets/images/menu-icon.jpg" alt="" />
                                        </button>
                                    </li>
                                </ul>

                                <div className="search-box">
                                    <i className="bi bi-search search-icon" />
                                    <input type="text" placeholder="Search here..." aria-label="Search" />
                                </div>
                            </div>
                        </div>

                        {/* Main Offcanvas */}
                        <Offcanvas
                            show={showMainOffcanvas}
                            onHide={handleMainOffcanvasClose}
                            placement="end"
                            className="custom-off"
                            style={{
                                marginRight: showSubmenu ? "21em" : "0",
                                transition: "margin-right 0.3s ease"
                            }}
                        >
                            <Offcanvas.Header className="justify-content-end">
                                <button
                                    type="button"
                                    className="btn-clos text-reset custom-close"
                                    onClick={handleMainOffcanvasClose}
                                    aria-label="Close"
                                    style={{ display: showSubmenu ? 'none' : 'block' }}
                                >
                                    <img src="assets/images/cross.svg" alt="" />
                                </button>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <div className="offcanvas-menu">
                                    <ul className="offcanvas-links">
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between">
                                                <button
                                                    onClick={handleSubmenuOpen}
                                                    className="submenu-toggle"
                                                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                                                >
                                                    About Us
                                                </button>
                                                <i className="fa fa-angle-right cross-icon" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between">
                                                <Link to="/business" onClick={closeAllOffcanvas}>Business</Link>
                                                <i className="fa fa-angle-right cross-icon" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between">
                                                <Link to="/culture" onClick={closeAllOffcanvas}>Culture</Link>
                                                <i className="fa fa-angle-right cross-icon" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between">
                                                <Link to="/awards" onClick={closeAllOffcanvas}>Awards</Link>
                                                <i className="fa fa-angle-right cross-icon" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between">
                                                <Link to="/investors" onClick={closeAllOffcanvas}>Investors</Link>
                                                <i className="fa fa-angle-right cross-icon" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between">
                                                <Link to="/newsroom" onClick={closeAllOffcanvas}>Newsroom</Link>
                                                <i className="fa fa-angle-right cross-icon" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between">
                                                <Link to="/resources" onClick={closeAllOffcanvas}>Resources</Link>
                                                <i className="fa fa-angle-right cross-icon" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between">
                                                <Link to="/careers" onClick={closeAllOffcanvas}>Careers</Link>
                                                <i className="fa fa-angle-right cross-icon" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between">
                                                <Link to="/contact" onClick={closeAllOffcanvas}>Contact</Link>
                                                <i className="fa fa-angle-right cross-icon" />
                                            </div>
                                        </li>
                                    </ul>

                                    <ul className="social-icons d-flex align-items-center justify-content-between">
                                        <li>
                                            <a href="#" aria-label="Facebook">
                                                <i className="fa fa-facebook-f custom-fa" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Twitter">
                                                <i className="bi bi-twitter-x custom-fa" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="LinkedIn">
                                                <i className="fa fa-linkedin custom-fa" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Instagram">
                                                <i className="fa fa-instagram custom-fa" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="YouTube">
                                                <i className="fa fa-youtube-play custom-fa" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>

                        {/* Submenu Offcanvas */}
                        <Offcanvas
                            show={showSubmenu}
                            onHide={handleSubmenuClose}
                            placement="end"
                            className="custom-off submenu-off"
                        >
                            <Offcanvas.Header className="justify-content-end m-0">
                                <button
                                    type="button"
                                    className="btn-clos text-reset custom-close"
                                    onClick={handleSubmenuClose}
                                    aria-label="Close"
                                >
                                    <img src="assets/images/cross.svg" alt="" />
                                </button>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <div className="offcanvas-menu">
                                    <ul className="offcanvas-links w-75">
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between border-0">
                                                <Link
                                                    to="/about-us"
                                                    className="text-black"
                                                    onClick={closeAllOffcanvas}
                                                >
                                                    Who We Are
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between border-0">
                                                <Link
                                                    to="/leadership-team"
                                                    className="text-black"
                                                    onClick={closeAllOffcanvas}
                                                >
                                                    Leadership
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-li d-flex align-items-center justify-content-between border-0">
                                                <Link
                                                    to="/project-portfolio"
                                                    className="text-black"
                                                    onClick={closeAllOffcanvas}
                                                >
                                                    Project Portfolio
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>
            </div>
        </header>
    );
}