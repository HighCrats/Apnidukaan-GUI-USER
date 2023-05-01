import { useSelector } from "react-redux";
import UserSlice from "../../redux/User-Slice";
import axios from "axios";
import apiPoint from '../../api/Web-Api';
import { Navigate, useNavigate } from "react-router-dom";

function FeaturedProduct() {

    const { productList, isLoading, error } = useSelector(state => state.product);
    const users = useSelector((state) => state.user);
    const navigate = useNavigate();
    let cartItem = []
    const addToCart = async (product) => {
        if (users.currentUser != null) {
            let productId = product._id;
            let usersId = users.currentUser._id;
            cartItem = [...cartItem,product]
            console.log(cartItem);
            let response = await axios.post(apiPoint.ADD_TO_CART, { usersId: usersId, cartItem : cartItem ,productId : productId});
            console.log(response.data);
        }
        else
            navigate("/signin");
        
    }
    return <>

        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                    {/* <h2>Portfolio</h2> */}
                    <p>Check our Featured Product</p>
                </header>
            </div>
            <div className="container">
                <div className="row">
                    {!error && productList.map((product, index) =>
                        <div key={index} className="col-12 col-md-6 col-lg-4 p-4" >
                            <div className="card">

                                <img className="card-img p-3" style={{ height: '300px', width: "90%" }} src={product.thumbnail} alt="Vans" />
                                <div className="card-body">
                                    <h4 className="card-title">{product.title}</h4>
                                    <h6 className="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
                                    <p className="card-text">
                                        {product.description.substring(0, 30)}</p>
                                    <div className="buy d-flex justify-content-between align-items-center">
                                        <div className="price text-success"><h5 className="mt-4">₹{product.price}</h5></div>
                                        <button className="btn btn-danger mt-3"><i onClick={() => addToCart(product)} className="fa-solid fa-cart-shopping "></i></button>
                                    </div><br />
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