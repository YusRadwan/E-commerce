//Import React 
    import { Fragment } from "react"
    import { Link, NavLink } from 'react-router-dom';

//Import Style
    import { BsSearch } from 'react-icons/bs';  

const Header = () => {
    return (
        <Fragment>
            {/* Top Header */}
                <header className="header-top-strip py-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-white mb-0">
                                    Free Shipping Over $100 & Free Returns
                                </p>
                            </div>
                            <div className="col-6">
                                <p className="text-end text-white mb-0">
                                    <a className="text-white" href="tel:+20">+20 1014884138</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

            {/* Imm-Header */}
                <header className="header-upper py-3">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <h2 className="mt-1">
                                    <Link className="text-white">Radwan</Link>
                                </h2>
                            </div>
                            <div className="col-5">
                                <div className="input-group input-group-sm">
                                    <input
                                        type="text"
                                        className="form-control py-1"
                                        placeholder="Search Product Here"
                                        aria-label="Search Product Here"
                                        aria-describedby="basic-addon2"
                                    />
                                    <span className="input-group-text p-2" id="basic-addon2">
                                        <BsSearch className="fs-6"/>
                                    </span>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="header-upper-links d-flex align-items-center justify-content-between">
                                    <div className="me-3">
                                        <Link className="d-flex align-items-center gap-lg-2 text-white">
                                            <img src="images/compare.svg" alt="Compare"/>
                                            <p className="mb-0 lh-sm fw-light">Compare <br /> Products</p>
                                        </Link>
                                    </div>
                                    <div className="me-3">
                                        <Link className="d-flex align-items-center gap-lg-2 text-white">
                                            <img src="images/wishlist.svg" alt="wishlist"/>
                                            <p className="mb-0 lh-sm fw-light">Favourite <br /> wishlist</p>
                                        </Link>
                                    </div>
                                    <div className="me-3">
                                        <Link className="d-flex align-items-center gap-lg-2 text-white">
                                            <img src="images/user.svg" alt="user"/>
                                            <p className="mb-0 lh-sm fw-light">Log in <br /> Account</p>
                                        </Link>
                                    </div>
                                    <div className="me-3">
                                        <Link className="d-flex align-items-center gap-lg-2 text-white">
                                            <img src="images/cart.svg" alt="cart"/>
                                            <div className="d-flex flex-column gap-lg-2">
                                                <span className="mt-2 badge bg-white text-dark rounded-pill">0</span>
                                                <p className="mb-0 lh-sm fw-light">$500</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            {/* Bottom Header */}
                <header className="header-bottom py-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-3">
                                <div className="dropdown d-flex align-items-center">
                                    <img src="images/menu.svg" alt="menu" />
                                    <button 
                                        className="btn btn-secondary dropdown-toggle" 
                                        type="button" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                    <div className="vr"></div>
                                    {/* <div className="slash">|</div> */}
                                </div>
                            </div>
                            <div className="col-9 d-flex align-items-center">
                                <div className="menu-links d-flex gap-lg-3">
                                        <NavLink className="link" to="/">Home</NavLink>
                                        <NavLink className="link" to="/">Our Store</NavLink>
                                        <NavLink className="link" to="/">Blogs</NavLink>
                                        <NavLink className="link" to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        </Fragment>
    )
}

export default Header