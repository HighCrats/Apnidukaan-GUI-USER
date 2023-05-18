import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import apiPoint from '../../api/Web-Api';
import Spinner from "../spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function MyProduct() {
    const [sellerProductList, setSellerProductList] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useSelector(state => state.user);
    const { cartItems, cartError } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user);
    useEffect(() => { window.scrollTo(0, 0) }, [])
    const loadProducts = async () => {
        try {
            let response = await axios.get(apiPoint.SELLER_PRODUCT + `?page=${page}`);
            if (response.data.status) {
                setSellerProductList([...sellerProductList, ...response.data.result]);
                setPage(page + 1);
                setIsLoading(false);
            }
        }
        catch (err) {
            setError("Error");
        }
    }

    const AddedToWishlist = async (productsId) => {
        window.alert(productsId);
        let usersId = users.currentUser._id;
        console.log(usersId);
        let response = await axios.post(apiPoint.USER_WISHLIST, { usersId: usersId, productsId: productsId });
        console.log(response.data);

    };

    const addToCart = (productsId) => {
        window.alert(productsId);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return <>
        <Header />
        <section id="portfolio" className="portfolio mt-4">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                    {/* <h2>Portfolio</h2> */}
                    <p>Check Seller Product</p>
                </header>
            </div>
            <div className="container">
                <div className="row">
                    {!error && sellerProductList.map((product, index) =>
                        <div key={index} className="col-12 col-md-6 col-lg-4 p-4" >
                            <div className="card">

                                <img className="card-img p-3" style={{ height: '300px', width: "90%" }} src={"http://localhost:3010/" + product.bill} alt="Vans" />
                                <div className="card-body">
                                    <h4 className="card-title">{product.title}</h4>
                                    <p className="card-text">
                                        {product.description.substring(0, 30)}. . .</p>
                                    <div className="buy d-flex justify-content-around align-items-center">
                                        <div className="price text-success"><h5 className="mt-4">₹{product.price}</h5></div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>
        <Footer />
    </>

}

export default MyProduct;