import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Header from "../include/Header";
import Footer from "../include/Footer";




export default function Home() {
    const logos = [
        { src: "assets/images/logo-1.png", alt: "NTPC" },
        { src: "assets/images/logo-2.png", alt: "Engie" },
        { src: "assets/images/logo-3.png", alt: "Tata Power" },
        { src: "assets/images/logo-4.png", alt: "SJVN" },
        { src: "assets/images/logo-5.png", alt: "Indian Oil" },
    ];
    const slidesData = [
        {
            bg: "./assets/images/banner.png",
            title: "Empowering Tomorrow with Sustainable Solutions",
            stats: [
                { number: "13 GW +", label: "Experience in\nPre-Development EPC" },
                { number: "55000+", label: "Acres of land acquired\nfor solar projects" },
                { number: "4GW", label: "Solar Park\nCapacity" },
            ],
        },
        {
            bg: "./assets/images/home-banner-2.jpg",
            title: "Empowering Tomorrow with Sustainable Solutions",
            stats: [
                { number: "50 +", label: "Projects Completed\nin IndiaC" },
                { number: "5", label: "States Presence\nin India" },
                {
                    number: "XX", label: "Marquee\nclients"
                },
            ],
        },
        {
            bg: "./assets/images/banner.png",
            title: "Empowering Tomorrow with Sustainable Solutions",
            stats: [
                { number: "13 GW +", label: "Experience in\nPre-Development EPC" },
                { number: "55000+", label: "Acres of land acquired\nfor solar projects" },
                { number: "4GW", label: "Solar Park\nCapacity" },
            ],
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef(null);
    const sliderRef = useRef(null);

    const totalSlides = slidesData.length;

    const showSlide = (n) => {
        setCurrentSlide((n + totalSlides) % totalSlides);
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    // Auto slide
    useEffect(() => {
        slideInterval.current = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval.current);
    }, [currentSlide]);

    // Pause on hover
    useEffect(() => {
        const sliderEl = sliderRef.current;
        if (!sliderEl) return;

        const handleMouseEnter = () => clearInterval(slideInterval.current);
        const handleMouseLeave = () => (slideInterval.current = setInterval(nextSlide, 5000));

        sliderEl.addEventListener("mouseenter", handleMouseEnter);
        sliderEl.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            sliderEl.removeEventListener("mouseenter", handleMouseEnter);
            sliderEl.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [currentSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === "ArrowRight") nextSlide();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    });
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
            <Header />
            <main>
                <section className="top-banner">
                    <div className="slider-container" ref={sliderRef}>
                        {slidesData.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide ${index === currentSlide ? "active" : ""}`}
                                style={{ backgroundImage: `url(${slide.bg})` }}
                            >
                                <div className="slide-content">
                                    <h1 className="slide-title">{slide.title}</h1>
                                    <div className="stats-container">
                                        {slide.stats.map((stat, i) => (
                                            <div key={i} className="stat-item">
                                                <div className="stat-number">{stat.number}</div>
                                                <div className="stat-label">
                                                    {stat.label.split("\n").map((line, idx) => (
                                                        <span key={idx}>
                                                            {line}
                                                            <br />
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Navigation Arrows */}
                        <button className="slider-arrow prev" onClick={prevSlide}>
                            &#10094;
                        </button>
                        <button className="slider-arrow next" onClick={nextSlide}>
                            &#10095;
                        </button>

                        {/* Dots */}
                        <div className="slider-nav">
                            {slidesData.map((_, index) => (
                                <span
                                    key={index}
                                    className={`slider-dot ${index === currentSlide ? "active" : ""}`}
                                    onClick={() => showSlide(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Our Business start  */}
                <section className="our-business py-5 bg-white">
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
                                    <div className="trusted-logos">
                                        <Swiper
                                            modules={[Autoplay]}
                                            spaceBetween={30}
                                            slidesPerView={3}
                                            loop={true}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: false,
                                            }}
                                            breakpoints={{
                                                320: { slidesPerView: 2 },
                                                576: { slidesPerView: 3 },
                                                992: { slidesPerView: 4 },
                                                1200: { slidesPerView: 5 },
                                            }}
                                            className="mySwiper"
                                        >
                                            {logos.map((logo, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                        src={logo.src}
                                                        alt={logo.alt}
                                                        className="img-fluid trust-logo"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
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
                <section className="our-portfolio-datta pt-5 pb-4 bg-white">
                    <div className="container-fluid plr">
                        <div className="text-center">
                            <h2 className="section-title">Our Portfolio</h2>
                            <p className="section-text m-0 pb-2">
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
                                // autoplay={{ delay: 5000 }}
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
                <section className="what-new py-5 bg-white">
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
                                // autoplay={{ delay: 3000 }}
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
                                                <p className="news-title">{item.date}</p>
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
            <Footer />
        </div>
    )
}