import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import apiPoint from '../../api/Web-Api';
import Spinner from "../spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer, toast } from "react-toastify";
import { addItemInToCart, updateCartItems } from "../../redux/Cart-Slice";

function Product() {

    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useSelector(state => state.user);
    const { cartItems, cartError } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user);

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

    const AddedToWishlist = async (productsId) => {
        window.alert(productsId);
        let usersId = users.currentUser._id;
        console.log(usersId);
        let response = await axios.post(apiPoint.USER_WISHLIST, { usersId: usersId, productsId: productsId });
        console.log(response.data);

    };

    const addToCart = (productsId) => {
        window.alert(productsId);
        // if (!currentUser)
        //     toast.warning("please login to perform this action");
        // else {
        //     let status = true;
        //     if (cartItems.length != 0)
        //         status = cartItems.some((item) => item.productId._id == productsId._id);
        //     else
        //         status = false;
        //     if (status)
        //         toast.info("Item is already added in cart");
        //     else {
        //         dispatch(addItemInToCart({ userId: currentUser._id, productId: productsId._id }));
        //         if (!cartError) {
        //             dispatch(updateCartItems(productsId));
        //             toast.success("Item successfully added in cart");
        //         }
        //         else
        //             toast.error("Oops! something went wrong");
        //     }
        // }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return <>

        <Header />

        <ToastContainer />

        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
            <div className="container mt-5" data-aos="fade-up">
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
                            {!error && productList.map((product, index) =>
                                <div key={index} class="col-12 col-md-6 col-lg-4 p-4" >
                                    <div class="card">
                                        <img class="card-img p-4" style={{ height: '300px', width: "90%" }} src={product.thumbnail} alt="Vans" />
                                        <div class="card-img-overlay d-flex justify-content-end">
                                            <a class="card-link text-danger like">
                                                <span id="heart"><i onClick={() => AddedToWishlist(product.id)} class="fa fa-heart-o"></i></span>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <h4 class="card-title">{product.title}</h4>
                                            <h6 class="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
                                            <p class="card-text">
                                                {product.description.substring(0, 30)}</p>
                                            <div class="buy d-flex justify-content-between align-items-center">
                                                <div class="price text-success"><h5 class="mt-4">₹{product.price}</h5></div>
                                                <a class="btn btn-danger mt-3"><i onClick={() => addToCart(product.id)} class="fa-solid fa-cart-shopping "></i>
                                                </a>
                                            </div><br />
                                        </div>
                                    </div>
                                </div>)}
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