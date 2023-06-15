import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import apiPoint from "../../api/Web-Api";
import { setDescProduct } from "../../redux/Description-Slice";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom/dist";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function ProductByCategory() {
    const { categoryList } = useSelector((state) => state.category);
    const [productList, setProductList] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const dispatch = useDispatch();

    const location = useLocation();
    let categoryName = location.state.name;

    const loadProducts = async (category) => {
        let response = await axios.post(apiPoint.PRODUCT_BY_CATEGORY, { categoryname: categoryName });
        setCategoryProducts(response.data.result);
        return response.data.result && window.scrollTo(0,0)

    };

    useEffect(()=>{
        loadProducts(categoryName)
    },[categoryName]);

    const getProduct = (product) => {
        dispatch(setDescProduct(product));
    }

    const users = useSelector((state) => state.user);

    const navigate = useNavigate();

    return (<>
        <Header/>
            {/* ======= Products Section ======= */}
            <section id="products" className="products">
                <div className="container">
                    <header className="section-header">
                        {/* <p>Our Products</p> */}
                    </header>
                    <div className="row">
                        {isLoading && <div>Loading...</div>}
                        {!isLoading &&
                            categoryProducts?.map((product, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-4 p-4" >
                                 <div className="card border d-flex">
                                        <img className="card-img p-3" style={{ height: '300px', width: "90%", borderRadius: ' 20%', margin: 'auto' }} src={product.thumbnail} alt="Vans" />
                                        <div className="card-body" style={{ textAlign: 'center' }}>
                                            <h4 style={{ fontWeight: '800' }} className="card-title">{product.title.substring(0, 10).toUpperCase()}</h4>
                                            <h6 style={{ fontWeight: '800' }} className="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
                                            <p style={{ fontWeight: '700' }} className="card-text">
                                                {product.description.substring(0, 30)} ...</p>
                                            <div className="buy d-flex justify-content-around align-items-center">
                                                <div className="price text-success"><h4 style={{ fontWeight: '900' }} className="mt-4">₹{product.price}</h4></div>
                                                {/* <button className="btn btn-primary mt-3"><i onClick={() => addToCart(product)} className="fa-solid fa-cart-shopping "></i></button> */}
                                                <Link onClick={() => getProduct(product)} to="/new" style={{ fontWeight: '850' }} class="btn btn-primary mt-3">View More</Link>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
            </section>
            {/* End Products Section */}
            <Footer/>
        </> 
    );
}

export default ProductByCategory;