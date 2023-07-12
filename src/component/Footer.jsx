// Import React
    import React from "react"
    import { Link } from 'react-router-dom';

// Import Style
    import {BsPaypal, BsLinkedin, BsTwitter, BsGithub, BsFacebook, BsGooglePlay, BsApple} from 'react-icons/bs'
    import {FaCcMastercard, FaCcVisa} from 'react-icons/fa'


const Footer = () => {
    return (
        <React.Fragment>
            {/* Top Footer */}
                <footer className="footer py-3">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-5 newsletter d-flex gap-lg-2 align-items-center">
                                <img src="images/newsletter.png" alt="" />
                                <span>Sign Up For Newsletter</span>
                            </div>
                            <div className="col-7">
                                <div className="input-group input-group-sm email">
                                        <input
                                            type="text"
                                            className="form-control py-2 rounded-3"
                                            placeholder="Your Email"
                                            aria-label="Your Email"
                                            aria-describedby="basic-addon2"
                                        >

                                        </input>
                                        <span className="input-group-text p-2 rounded-3" id="basic-addon2">
                                            SUBSCRIBE
                                        </span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </footer>
            {/* imm-Footer */}
                <footer className="footer py-3">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-3">
                                <h4>Contact Us</h4>
                                <div className="contactus mt-5">
                                    <address
                                        className="fs-6"
                                        >Demo Stor <br />NO. 1239 Mansoura, Cairo, 22222 <br />Egypt</address>
                                    <a 
                                        href="tel: +20 1014884138"
                                        className="text-white d-block mb-3 fs-6"
                                        >+20 1014884138</a>
                                    <a 
                                        href="mailto: usufradwan@gmail.com"
                                        className="text-white d-block mb-4 fs-6"
                                        >usufradwan@gmail.com</a>
                                    <div className="icon-media">
                                        <Link 
                                            className="btn icon-social me-3 fs-5 mb-2"
                                            to={"https://www.linkedin.com/in/yusuf-r-211b79168"}    
                                        ><BsLinkedin /></Link>
                                        <Link 
                                            className="btn icon-social me-3 fs-5 mb-2"
                                            to={"https://github.com/usufradwan"}    
                                        ><BsGithub /></Link>
                                        <Link 
                                            className="btn icon-social me-3 fs-5 mb-2"
                                            to={"https://twitter.com/usuf_Samer"}    
                                        ><BsTwitter /></Link>
                                        <Link 
                                            className="btn icon-social me-3 fs-5 mb-2"
                                            to={"https://www.facebook.com/usufsamer/"}    
                                        ><BsFacebook /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <h4>Information</h4>
                                <div className="mt-5">
                                    <Link className="text-white d-block mb-lg-4">Privacy Policy</Link>
                                    <Link className="text-white d-block mb-lg-4">Refund Policy</Link>
                                    <Link className="text-white d-block mb-lg-4">Shipping Policy</Link>
                                    <Link className="text-white d-block mb-lg-4">Terms Of Services</Link>
                                    <Link className="text-white d-block mb-lg-4">Blogs</Link>
                                </div>
                            </div>
                            <div className="col-2">
                                <h4>Account</h4>
                                <div className="mt-5">
                                    <Link className="text-white d-block mb-lg-4">Search</Link>
                                    <Link className="text-white d-block mb-lg-4">About Us</Link>
                                    <Link className="text-white d-block mb-lg-4">Faq</Link>
                                    <Link className="text-white d-block mb-lg-4">contact</Link>
                                    <Link className="text-white d-block mb-lg-4">Size Chart</Link>
                                </div>
                            </div>
                            <div className="col-2">
                                <h4>Quick Links</h4>
                                <div className="mt-5">
                                    <Link className="text-white d-block mb-lg-4">Accessories</Link>
                                    <Link className="text-white d-block mb-lg-4">Laptops</Link>
                                    <Link className="text-white d-block mb-lg-4">Headphones</Link>
                                    <Link className="text-white d-block mb-lg-4">Smart Watches</Link>
                                    <Link className="text-white d-block mb-lg-4">Tablets</Link>
                                </div>
                            </div>
                            <div className="col-3">
                                <h4>Our App</h4>
                                <div className="mt-5 app-store">
                                    <p>Download Our App and get extra 15% <br /> Discount on your first Order..!</p>
                                    <button className="btn bg-white me-3 fs-5 shadow-lg">
                                        <BsGooglePlay className="fs-3" /> Get it on <br /><span className="fw-bold">Google Play</span>
                                    </button>
                                    <button className="btn bg-white  fs-5 ">
                                        <BsApple className="fs-2" /> Get it on <br /><span className="fw-bold">App Store</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            {/* bottom Footer */}
                <footer className="footer py-3">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-6 text-white d-flex align-items-center">
                                &copy; {new Date().getFullYear()}; Powered by Developer&apos;s
                            </div>
                            <div className="col-6">
                                <div className="icon-money d-flex justify-content-end">
                                    <button className="btn me-lg-3 pe-xl-4 ps-lg-4 fs-5 bg-white">
                                        <BsPaypal className="icon" />
                                    </button>
                                    <button className="btn me-lg-3 pe-xl-4 ps-lg-4 fs-5 bg-white">
                                        <FaCcMastercard className="icon" />
                                    </button>
                                    <button className="btn me-lg-3 pe-xl-4 ps-lg-4 fs-5 bg-white">
                                        <FaCcVisa className="icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        </React.Fragment>
    )
}

export default Footer