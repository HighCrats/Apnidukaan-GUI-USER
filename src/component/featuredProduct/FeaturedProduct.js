import { useDispatch, useSelector } from "react-redux";
import UserSlice from "../../redux/User-Slice";
import axios from "axios";
import apiPoint from '../../api/Web-Api';
import { Link, useNavigate } from "react-router-dom";
import { setDescProduct } from "../../redux/Description-Slice";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

function FeaturedProduct() {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    const dispatch = useDispatch();

    const { productList, isLoading, error } = useSelector(state => state.product);

    const getProduct = (product) => {
        dispatch(setDescProduct(product));
    }

    const users = useSelector((state) => state.user);

    const navigate = useNavigate();

    let cartItem = []
    const addToCart = async (product) => {
        if (users.currentUser != null) {
            let productId = product._id;
            let usersId = users.currentUser._id;
            cartItem = [...cartItem, product]
            console.log(cartItem);
            let response = await axios.post(apiPoint.ADD_TO_CART, { usersId: usersId, cartItem: cartItem, productId: productId });
            toast.success(response.data.message);
        }
        else {
            toast.warning("You must have to login first");
            navigate("/signin");
        }
    }

    return <>

        <ToastContainer />

        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
            <div className="container">
                <header className="section-header">
                    {/* <h2>Portfolio</h2> */}
                    <p>Check our Featured Product</p>
                </header>
            </div>
            <div className="container">
                <div className="row">
                    {!error && productList?.map((product, index) =>
                        <div key={index} className="col-12 col-md-6 col-lg-4" >
                            <div className="card border">

                                <img className="card-img p-3" style={{ height: '300px', width: "90%", borderRadius: ' 20%', margin: 'auto' }} src={product.thumbnail} alt="Vans" />
                                <div className="card-body" style={{ textAlign: 'center' }}>
                                    <h4 style={{ fontWeight: '800' }} className="card-title">{product.title.toUpperCase().substring(0, 13)}</h4>
                                    <h6 style={{ fontWeight: '800' }} className="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
                                    <p style={{ fontWeight: '700' }} className="card-text">
                                        {product.description.substring(0, 30)} ...</p>
                                    <div className="buy d-flex justify-content-around align-items-center">
                                        <div className="price text-success"><h5 style={{ fontWeight: '950' }} className="mt-4">₹{product.price}</h5></div>
                                        {/* <button className="btn btn-primary mt-3"><i onClick={() => addToCart(product)} className="fa-solid fa-cart-shopping "></i></button> */}
                                        <Link style={{ fontWeight: '800' }} onClick={() => getProduct(product)} to="/description" class="btn btn-primary mt-3">View More</Link>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>
        {/* End Portfolio Section */}

    </>
}

export default FeaturedProduct;