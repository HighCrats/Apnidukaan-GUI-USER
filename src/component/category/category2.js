import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import apiPoint from "../../api/Web-Api";
import { setDescProduct } from "../../redux/Description-Slice";
import { ToastContainer, toast } from "react-toastify";
import { fetchProductsByCategory } from "../../redux/product-category-slice";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function CategorySecond() {
    const { categoryList } = useSelector((state) => state.category);
    const [productList, setProductList] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [categoryProducts,setCategoryProducts] = useState([]);
    const dispatch = useDispatch();


    const loadProducts = async (category) => {
    let response = await axios.post(apiPoint.PRODUCT_BY_CATEGORY,{categoryname:category});
    setCategoryProducts(response.data.result);
    return response.data.result && window.scrollTo(900, 900) 
    };

    const getProduct = (product) => {
        dispatch(setDescProduct(product));
    }
    const users = useSelector((state) => state.user);

    const navigate = useNavigate()
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
            navigate("/signin");
        }
    }

    return (
        <React.Fragment>
            <Header/>
            {/* ======= Values Section ======= */}
            <section id="values" className="values">
                <div className="container">
                    <header className="section-header">
                        <p>Category</p>
                    </header>
                    <div className="container">
                        <div className="row">
                            {!error &&
                                categoryList.map((category, index) => (
                                    <div key={index} className="col-12 col-md-6 col-lg-3">
                                        <div className="d-flex flex-column justify-content-center m-2">
                                            <img
                                               onClick={() => loadProducts(category.name)}  className="border p-2 m-auto"
                                                style={{
                                                    borderRadius: "150px",
                                                    height: "130px",
                                                    width: "50%",
                                                    cursor: "pointer"
                                                }}
                                                src={category.thumbnail}
                                                alt="category thumbnail"
                                            />
                                            <span className="mt-3 text-center">
                           
                           #                     <b
                                                   
                                                    style={{ fontSize: "18px" }}
                                                >
                                                    {category.name}
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* End Values Section */}

            {/* ======= Products Section ======= */}
            <section id="products" className="products">
                <div className="container">
                    <header className="section-header">
                        
                    </header>
                    <div className="row">
                        {isLoading && <div>Loading...</div>}
                        {!isLoading &&
                            categoryProducts?.map((product, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-4 p-4" >
                            <div className="card">

                                <img className="card-img p-3" style={{ height: '300px', width: "90%", borderRadius: ' 20%' }} src={product.thumbnail} alt="Vans" />
                                <div className="card-body">
                                    <h4 className="card-title">{product.title}</h4>
                                    <h6 className="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
                                    <p className="card-text">
                                        {product.description.substring(0, 30)} ...</p>
                                    <div className="buy d-flex justify-content-around align-items-center">
                                        <div className="price text-success"><h5 className="mt-4">₹{product.price}</h5></div>
                                        <button className="btn btn-primary mt-3"><i onClick={() => addToCart(product)} className="fa-solid fa-cart-shopping "></i></button>

                                        <Link onClick={() => getProduct(product)} to="/description" class="btn btn-primary mt-3"><i class="fa fa-eye" aria-hidden="true"></i></Link>

                                    </div><br />
                                </div>
                            </div>
                        </div>
                            ))}
                    </div>
                   
                </div>
            </section>

          <Footer/>
            {/* End Products Section */}
        </React.Fragment>
    );
}

export default CategorySecond;



