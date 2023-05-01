import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../redux/User-Slice";

function Header() {

    const { categoryList, error, isLoading } = useSelector((state) => state.category);
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const userSignOut = ()=>{
        dispatch(signOut()); 
    }
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
                                <div className="navbar-nav w-100">
                                    {!error && categoryList.map((category, index) => <a key={index} href="" className="nav-item nav-link">
                                        {category.name.toUpperCase()}
                                    </a>)}
                                </div>
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
                        {currentUser && <>
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
                                <Link className="nav-link scrollto" onClick={userSignOut}>
                                    Log Out
                                </Link>
                            </li>
                        </>}

                        {!currentUser && <>
                            <li>
                                <Link className="nav-link scrollto" to="/signin">
                                    Log In
                                </Link>
                            </li><li>
                                <Link className="nav-link scrollto" to="/signup">
                                    Register
                                </Link>
                            </li></>}
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