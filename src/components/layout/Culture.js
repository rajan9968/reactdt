import React, { useEffect, useState } from "react";
import Header from "../include/Header";
import Footer from '../include/Footer';
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
export default function Culture() {
    useEffect(() => {
        const lightbox = GLightbox({
            selector: ".glightbox",
            touchNavigation: true,
            loop: true,
        });
        return () => {
            lightbox.destroy();
        };
    }, []);

    const slides = [
        {
            title: "Lorem ipsum",
            location: "Lorem ipsum",
            description:
                "Loremipsumdolorsitamet,consectetueradipiscingelit,seddiamnonummy nibheuismodtinciduntutlaoreetdoloremagnaaliquameratvolutpat.Ut wisienimadminimveniam.Seddiamnonummynibheuismodtinciduntut laoreet dolore magna aliquam erat volutpat.",
            icon: "assets/images/his-1.png",
            number: "4 GW",
            bgImage: "assets/images/prof-bg.png",
        },
        {
            title: "Lorem ipsum",
            location: "Lorem ipsum",
            description:
                "Loremipsumdolorsitamet,consectetueradipiscingelit,seddiamnonummy nibheuismodtinciduntutlaoreetdoloremagnaaliquameratvolutpat.Ut wisienimadminimveniam.Seddiamnonummynibheuismodtinciduntut laoreet dolore magna aliquam erat volutpat.",
            icon: "assets/images/his-1.png",
            number: "2 GW",
            bgImage: "assets/images/banner.png",
        },
        {
            title: "Lorem ipsum",
            location: "Lorem ipsum",
            description:
                "Loremipsumdolorsitamet,consectetueradipiscingelit,seddiamnonummy nibheuismodtinciduntutlaoreetdoloremagnaaliquameratvolutpat.Ut wisienimadminimveniam.Seddiamnonummynibheuismodtinciduntut laoreet dolore magna aliquam erat volutpat.",
            icon: "assets/images/his-1.png",
            number: "2 GW",
            bgImage: "assets/images/prof-bg.png",
        },
        {
            title: "Lorem ipsum",
            location: "Lorem ipsum",
            description:
                "Loremipsumdolorsitamet,consectetueradipiscingelit,seddiamnonummy nibheuismodtinciduntutlaoreetdoloremagnaaliquameratvolutpat.Ut wisienimadminimveniam.Seddiamnonummynibheuismodtinciduntut laoreet dolore magna aliquam erat volutpat.",
            icon: "assets/images/his-1.png",
            number: "2 GW",
            bgImage: "assets/images/prof-bg.png",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const newsData = [

        {
            img: "assets/images/cul-1.png",
            date: "June 26, 2025 / News",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
        {
            img: "assets/images/cul-1.png",
            date: "June 20, 2025 / Press Release",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
        {
            img: "assets/images/cul-1.png",
            date: "June 02, 2025 / Case Studies",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
        {
            img: "assets/images/cul-1.png",
            date: "June 02, 2025 /Case Studies",
            text: "DattaPower Rebrands As PowerSprout Solutions, Becomes Full-Fledged EPC Firm After Commissioning Two Solar Projects In Rajasthan",
        },
    ];
    return (
        <div>
            <Header />
            <main>
                <section className="leadership-banner position-relative wings-top-section">
                    <img
                        src="assets/images/culture-banner.png"
                        alt="awards"
                        className="img-fluid desktop-banner"
                        srcSet=""
                    />
                    <div className="container-fluid plr">
                        <div className="leadership-banner-caption">
                            <h2>Our Culture</h2>
                            <ul className="path-women-empow">
                                <li>
                                    <a href="index.php">Home</a>

                                </li>
                                <li className="text-white">/</li>
                                <li>
                                    <a href="#">Culture</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>
                <section className="what-new py-5 bg-white">
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Our Culture</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.</p>

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
                                        <div className="news-box rounded">
                                            <div className="new-image">
                                                <a
                                                    href={item.img} // full image path
                                                    className="glightbox"
                                                    data-gallery="news-gallery"
                                                >
                                                    <img
                                                        src={item.img}
                                                        className="img-fluid rounded"
                                                        alt="news"
                                                    />
                                                </a>
                                                {/* <img src={item.img} className="img-fluid rounded" alt="news" /> */}
                                            </div>
                                            {/* <div className="news-content rounded-bottom">
                                                <p className="award-title">Award: Lorem ipsum</p>
                                                <p className="award-title">Catagory: Lorem ipsum</p>
                                                <p className="award-title">Date: Lorem ipsum</p>
                                            </div> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className='project-section bg-white py-5'>
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Community Initatives</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.</p>

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
                                        <div className="news-box rounded">
                                            <div className="new-image">
                                                <img src={item.img} className="img-fluid rounded" alt="news" />
                                            </div>
                                            <div className="news-content rounded-bottom">
                                                <p className="award-title">Lorem ipsum</p>
                                                <p className="content-news-para">Loremipsumdolorsitamet,consectetuer adipiscingelit,seddiamnonummynibheuismod tinciduntutlaoreetdoloremagnaaliquamerat volutpat.Utwisienimadminimveniam,quis</p>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className="our-portfolio-datta pt-5 pb-4 bg-white">
                    <div className="container-fluid plr">
                        <div className="text-center">
                            <h2 className="section-title">Key Initiatives</h2>
                            <p className="section-text m-0 pb-2">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className="our-portfolio"
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
                        </div>



                        {/* Swiper carousel showing history-boxes */}
                        <div id="history-carousel" className="culture-slider">
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
                                                    <div className="outline-text"></div>
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
                <section className='project-section bg-white py-5'>
                    <div className="container-fluid plr">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Employee Initiatives</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.</p>

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
                                        <div className="news-box rounded">
                                            <div className="new-image">
                                                <img src={item.img} className="img-fluid rounded" alt="news" />
                                            </div>
                                            <div className="news-content rounded-bottom">
                                                <p className="award-title">Lorem ipsum</p>
                                                <p className="content-news-para">Loremipsumdolorsitamet,consectetuer adipiscingelit,seddiamnonummynibheuismod tinciduntutlaoreetdoloremagnaaliquamerat volutpat.Utwisienimadminimveniam,quis</p>

                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
