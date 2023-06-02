import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import axios from "axios";
import apiPoint from '../../api/Web-Api';
import Spinner from "../spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom/dist";
import { setDescProduct } from "../../redux/Description-Slice";

function Product() {

    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const getProduct = (product) => {
        dispatch(setDescProduct(product));
    }

    const users = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    let cartItem = [];
    const addToCart = async (product) => {
        if (users.currentUser != null) {
            let productId = product._id;
            let usersId = users.currentUser._id;
            cartItem = [...cartItem, product]
            let response = await axios.post(apiPoint.ADD_TO_CART, { usersId: usersId, cartItem: cartItem, productId: productId });
            toast.success(response.data.message);

        }
        else {
            toast.warning("You must have to login first");
            navigate("/signin");
        }
    }

    const loadProducts = async () => {
        try {
            let response = await axios.get("https://backend-ffna.onrender.com/product/list");
            if (response.data.status) {
                setProductList([...productList, ...response.data.result]);
                setPage(page + 1);
                setIsLoading(false);
            }
        }
        catch (err) {
            setError("Error");
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return <>

        <Header />

        <ToastContainer />

        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
            <div className="container mt-5">
                <header className="section-header">
                    {/* <h2>Portfolio</h2> */}
                    <p>Check Our latest Product</p>
                </header>

                {isLoading && <Spinner />}

                <InfiniteScroll
                    dataLength={productList.length}
                    next={loadProducts}
                    hasMore={productList.length < 120}
                    loader={<Spinner />}
                    endMessage={<p style={{textAlign : 'center'}}>.....</p>}>

                    <div class="container">
                        <div class="row">

                            {!error && productList?.map((product, index) =>
                                <div key={index} className="col-12 col-md-6 col-lg-4 p-4" >
                                    <div className="card border">
                                        <img className="card-img p-3" style={{ height: '300px', width: "90%", borderRadius: ' 20%', margin: 'auto' }} src={product.thumbnail} alt="Vans" />
                                        <div className="card-body" style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '800' }} className="card-title">{product.title.substring(0, 14).toUpperCase()}</h4>
                                            <h6 style={{ fontWeight: '800' }} className="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
                                            <p style={{ fontWeight: '700' }} className="card-text">
                                                {product.description.substring(0, 30)}</p>
                                            <div className="buy d-flex justify-content-around align-items-center">
                                                <div className="price text-success"><h5 style={{ fontWeight: '900' }} className="mt-4">₹{product.price}</h5></div>
                                                {/* <button className="btn btn-primary mt-3"><i onClick={() => addToCart(product)} className="fa-solid fa-cart-shopping "></i></button> */}
                                                <Link style={{ fontWeight: '700' }} onClick={() => getProduct(product)} to="/new" class="btn btn-primary mt-3">View More</Link>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </section >
        {/* End Portfolio Section */}

        < Footer />

    </>

}

export default Product;
