//Import React
    import {Fragment} from 'react'
    import Marquee from 'react-fast-marquee';
    import BlogCard from './../component/BlogCard';
    import ProductCard from './../component/ProductCard';

const Home = () => {
    return (
        <Fragment>
            {/* 1- Wrapper - 1 */}
            <section className='home-wrapper-1 py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner">
                                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button 
                                            type="button" 
                                            data-bs-target="#carouselExampleCaptions" 
                                            data-bs-slide-to="0" 
                                            className="active main-carousel rounded-circle" 
                                            aria-current="true" 
                                            aria-label="Slide 1"
                                        ></button>
                                        <button
                                            type="button" 
                                            data-bs-target="#carouselExampleCaptions" 
                                            data-bs-slide-to="1"
                                            className='main-carousel rounded-circle'
                                            aria-label="Slide 2"
                                        ></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="images/main-banner.jpg" className="d-block w-100" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h4>SUPERCHARGED FOR PROS.</h4>
                                                <h5>ipad S13+ Pro.</h5>
                                                <p>
                                                    From $999.00 or $41.62/mo. <br />
                                                    for 24 mo. Footnote*
                                                </p>
                                                <button className='button shadow'>BUY NOW</button>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="images/main-banner-1.jpg" className="d-block w-100" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h4>SUPERCHARGED FOR PROS.</h4>
                                                <h5>ipad S13+ Pro.</h5>
                                                <p>
                                                    From $999.00 or $41.62/mo. <br />
                                                    for 24 mo. Footnote*
                                                </p>
                                                <button className='button shadow'>BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex flex-wrap text-align-center">
                                {/* banner-1 */}
                                <div className="small-banner position-relative">
                                    <img 
                                        src="images/catbanner-01.jpg" 
                                        className="img-fluid rounded-3" 
                                        alt="main banner" 
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p>
                                            From $1699.00 or $64.62/mo. <br />
                                            for 24 mo. Footnote*
                                        </p>
                                    </div>
                                </div>
                                {/* banner-2 */}
                                <div className="small-banner position-relative  pt-4">
                                    <img 
                                        src="images/catbanner-02.jpg" 
                                        className="img-fluid rounded-3" 
                                        alt="main banner" 
                                    />
                                    <div className="small-banner-content bottBanner position-absolute">
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p>
                                            Shop the latest band <br />
                                            styles and colors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex flex-wrap text-align-center">
                                {/* banner-3 */}
                                <div className="small-banner position-relative">
                                    <img 
                                        src="images/catbanner-03.jpg" 
                                        className="img-fluid rounded-3" 
                                        alt="main banner" 
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>
                                            From $599 or  <br />
                                            $49.91/mo. for 12 mo. *
                                        </p>
                                    </div>
                                </div>
                                {/* banner-4 */}
                                <div className="small-banner position-relative pt-4">
                                    <img 
                                        src="images/catbanner-04.jpg" 
                                        className="img-fluid rounded-3" 
                                        alt="main banner" 
                                    />
                                    <div className="small-banner-content bottBanner position-absolute">
                                        <h4>FREE ENGRAVING</h4>
                                        <h5>AirPods Max</h5>
                                        <p>
                                            High-fidelity playback & <br />
                                            ultra-low distortion
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2- Wrapper - 2 */}
            <section className='home-wrapper-2 py-5'>
                <div className="container-xxl">

                    {/* 1- Wrapper-2 Services */}
                    <section className="services">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                <div className="services-item d-flex gap-4">
                                    <img src="images/service.png" alt="Service" />
                                    <div className="services-content">
                                        <h6>Free Shipping</h6>
                                        <p>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className="services-item d-flex gap-4">
                                    <img src="images/service-02.png" alt="Service" />
                                    <div className="services-content">
                                        <h6>Daily Surprise Offers</h6>
                                        <p>Save up to 25% off</p>
                                    </div>
                                </div>
                                <div className="services-item d-flex gap-4">
                                    <img src="images/service-03.png" alt="Service" />
                                    <div className="services-content">
                                        <h6>Support 24/7</h6>
                                        <p>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className="services-item d-flex gap-4">
                                    <img src="images/service-04.png" alt="Service" />
                                    <div className="services-content">
                                        <h6>Affordable Prices</h6>
                                        <p>Get Factory direct price</p>
                                    </div>
                                </div>
                                <div className="services-item d-flex gap-4">
                                    <img src="images/service-05.png" alt="Service" />
                                    <div className="services-content">
                                        <h6>Secure Payments</h6>
                                        <p>100% Protected Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2 -Wrapper-2  Categories */}
                    <section className='categories'>
                        <div className="top">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6 style={{fontSize: "15px"}}>Computer & Laptop</h6>
                                            <p>8 Items</p>
                                        </div>
                                        <img src="images/laptop.jpg" alt="laptop" />
                                    </div>
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6>Cameras & Videos</h6>
                                            <p>10 Items</p>
                                        </div>
                                        <img src="images/camera.jpg" alt="camera" />
                                    </div>
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6>Smart Television</h6>
                                            <p>12 Items</p>
                                        </div>
                                        <img src="images/tv.jpg" alt="TV" />
                                    </div>
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6>Smartwatches</h6>
                                            <p>13 Items</p>
                                        </div>
                                        <img src="images/smartwatch1.png" alt="smartwatch" />
                                    </div>
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6>Music & Gaming</h6>
                                            <p>4 Item</p>
                                        </div>
                                        <img src="images/gamepad.png" alt="gamepad"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='m-0'/>
                        <div className="bottom">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center  justify-content-between">
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6>Mobiles & Tablets</h6>
                                            <p>5 Items</p>
                                        </div>
                                        <img className='h-75' src="images/mobile.png" alt="mobile" />
                                    </div>
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6>Headphones</h6>
                                            <p>6 Items</p>
                                        </div>
                                        <img src="images/headphone.jpg" alt="headPhone" />
                                    </div>
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6>Accessories</h6>
                                            <p>10 Items</p>
                                        </div>
                                        <img src="images/acc.jpg" alt="accessories" />
                                    </div>
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6>Portable Speakers</h6>
                                            <p>8 Items</p>
                                        </div>
                                        <img src="images/speaker.jpg" alt="speaker" />
                                    </div>
                                    <div className='categories-items'>
                                        <div className="categories-content">
                                            <h6>Home Appliances</h6>
                                            <p>6 Items</p>
                                        </div>
                                        <img src="images/homeapp.jpg" alt="homeApp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3 - Wrapper-2 Featured Collection */}
                    <section className='wrapper-2-product mb-5'>
                        <div className="row">
                            <h1>Featured Collection</h1>
                            <div className="col-12 mt-4 d-flex align-items-center justify-content-between flex-wrap">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>
                    </section>

                    {/* 4 - Wrapper-2 Marquee */}
                    <section className='wrapper-2-marque py-3'>
                        <div className="row">
                            <div className="col-12">
                                <div className="marquee-item-wrapper shadow">
                                    <Marquee delay={"0.2"}>
                                        <div className='mx-4'><img src="images/brand-01.png" alt="brand" /></div>
                                        <div className='mx-4'><img src="images/brand-02.png" alt="brand" /></div>
                                        <div className='mx-4'><img src="images/brand-03.png" alt="brand" /></div>
                                        <div className='mx-4'><img src="images/brand-04.png" alt="brand" /></div>
                                        <div className='mx-4'><img src="images/brand-05.png" alt="brand" /></div>
                                        <div className='mx-4'><img src="images/brand-06.png" alt="brand" /></div>
                                        <div className='mx-4'><img src="images/brand-07.png" alt="brand" /></div>
                                        <div className='mx-4'><img src="images/brand-08.png" alt="brand" /></div>
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5 - Wrapper-2 Blog */}
                    <section className='wrapper-2-blog'>
                        <h1 style={{marginTop: "20px"}}>Blog Card</h1>
                        <div className="row">
                            <div className="col-12 mt-4 d-flex align-items-center justify-content-between flex-wrap">
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                            </div>
                        </div>
                    </section>



                </div>
            </section>

        </Fragment>
    )
}

export default Home;