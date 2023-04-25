import { Link } from "react-router-dom";

function Header() {

    return <>

        {/* ======= Header ======= */}
        <header id="header" className="header fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt="" />
                    <span>APNI DUKAAN</span>
                </a>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Link to="/" className="nav-link scrollto active">
                                Home
                            </Link>
                        </li>
                        <li class="dropdown">
                            <a href="">
                                <span>Category</span>
                                <i class="bi bi-chevron-down"></i>
                            </a>
                            <ul>
                                <li><a href="">Drop Down 1</a></li>
                                <li><a href="">Drop Down 2</a></li>
                                <li><a href="">Drop Down 3</a></li>
                                <li><a href="">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/product" className="nav-link scrollto">
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link scrollto">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/subscription" className="nav-link scrollto">
                                Subscription
                            </Link>
                        </li>
                        <li>
                            <Link to="/wishlist" className="nav-link scrollto">
                                Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="nav-link scrollto">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link to="/order" className="nav-link scrollto">
                                Order
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link scrollto" to="/signin">
                                Log In
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link scrollto" to="/signup">
                                Register
                            </Link>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
                {/* .navbar */}
            </div>
        </header>
        {/* End Header */}

    </>

}

export default Header;