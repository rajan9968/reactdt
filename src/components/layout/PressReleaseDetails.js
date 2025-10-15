import React from 'react'
import Header from "../include/Header";
import Footer from '../include/Footer';

export default function PressReleaseDetails() {
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
                <section className="powering-progress py-5">
                    <div className="container-fluid plr">
                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-4">
                                <img
                                    src="assets/images/newsroom-1.png"
                                    alt="awards"
                                    className="img-fluid desktop-banner rounded"
                                />
                            </div>
                            <div className='col-lg-8 newsroom'>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                <p>Date: xx/xxx/xxxx</p>
                                <p>Publication:</p>
                            </div>
                            <div className='col-lg-12'>
                                <div className='press-desc'>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Progress end  */}

            </main>
            <Footer />
        </div>
    )
}
