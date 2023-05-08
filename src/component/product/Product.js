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
            //toast.warning("You must have to login first");
            navigate("/signin");
        }
    }

    const loadProducts = async () => {
        try {
            let response = await axios.get(apiPoint.PRODUCT_DATA + `?page=${page}`);
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
                    <p>Check our latest Product</p>
                </header>

                {isLoading && <Spinner />}

                <InfiniteScroll
                    dataLength={productList.length}
                    next={loadProducts}
                    hasMore={productList.length < 60}
                    loader={<Spinner />}
                    endMessage={<p>.....</p>}>

                    <div class="container">
                        <div class="row">
                            {!error && productList?.map((product, index) =>
                                <div key={index} className="col-12 col-md-6 col-lg-4 p-4" >
                                    <div className="card">

                                        <img className="card-img p-3" style={{ height: '300px', width: "90%" }} src={product.thumbnail} alt="Vans" />
                                        <div className="card-body">
                                            <h4 className="card-title">{product.title}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
                                            <p className="card-text">
                                                {product.description.substring(0, 30)}</p>
                                            <div className="buy d-flex justify-content-around align-items-center">
                                                <div className="price text-success"><h5 className="mt-4">₹{product.price}</h5></div>
                                                <button className="btn btn-primary mt-3"><i onClick={() => addToCart(product)} className="fa-solid fa-cart-shopping "></i></button>

                                                <Link onClick={() => getProduct(product)} to="/description" class="btn btn-primary mt-3"><i class="fa fa-eye" aria-hidden="true"></i></Link>

                                            </div><br />
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