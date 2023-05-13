import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import axios from "axios";
import apiPoint from "../../api/Web-Api";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItems } from "../../redux/Cart-Slice";
import { Link } from "react-router-dom";
import "../stylesheet/cart.css";

function Cart() {

    const users = useSelector((state) => state.user);
    let dispatch = useDispatch();
    let usersId = users.currentUser._id;
    const loadCartProducts = async () => {
        try {
            let response = await axios.post(apiPoint.FETCH_CART, { userId: usersId });
            dispatch(updateCartItems(response.data));
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadCartProducts();
    }, []);

    const cartProduct = useSelector((state) => state.cart.cartItems);
    let totalAmount = 0;

    const removeFromCart = async(productId) => {
        alert(productId);
        let response = await axios.post(apiPoint.REMOVE_CART_ITEM, { userId: usersId, productId : productId });
        // dispatch(updateCartItems(response.data)); 
        console.log(response.data)
    }

    return <>

        <Header />

        {cartProduct.length > 0 && <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card shopping-cart" style={{ borderRadius: 15 }}>
                            <div className="card-body text-black">
                                <div className="row">
                                    <div className="col-lg-6 px-5 py-4">
                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                                            Your products
                                        </h3>
                                        <hr
                                            className="mb-4"
                                            style={{ height: 2, backgroundColor: "#1266f1", opacity: 1 }}
                                        />
                                        {cartProduct[0].filter(product => {
                                            return product.productId !== undefined
                                        }).map((product, index) => <div key={index} className="d-flex align-items-center mb-5">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={product.productId.thumbnail}
                                                    className="img-fluid"
                                                    style={{ width: 100, height: "100px" }}
                                                    alt="Generic placeholder image"
                                                />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span className="float-end text-black">
                                                    <i onClick={()=>{removeFromCart(product.productId._id)}} className="fas fa-times" />
                                                </span>
                                                <h5 className="text-primary"> {product.productId.title}</h5>
                                                <h6 style={{ color: "#9e9e9e" }}>Category : {product.productId.categoryname}</h6>
                                                <div className="d-flex align-items-center">
                                                    <p className="fw-bold mb-0 me-5 pe-3">rs{product.productId.price}</p>
                                                </div>
                                                {totalAmount = totalAmount + product.productId.price}
                                            </div>
                                        </div>)};
                                    </div>

                                    <div className="col-lg-6 px-5 py-4">
                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                                            Order Summary
                                        </h3>
                                        <hr
                                            className="mb-4"
                                            style={{ height: 2, backgroundColor: "#1266f1", opacity: 1 }}
                                        />
                                        <div
                                            className="d-flex justify-content-between p-2 mb-2"
                                            style={{ backgroundColor: "#e1f5fe" }}
                                        >
                                            <h5 className="fw-bold mb-0">Total Items:</h5>
                                            <h5 className="fw-bold mb-0">{cartProduct[0].length - 1}</h5>
                                        </div>

                                        <div
                                            className="d-flex justify-content-between p-2 mb-2"
                                            style={{ backgroundColor: "#e1f5fe" }}
                                        >
                                            <h5 className="fw-bold mb-0">Total Price:</h5>
                                            <h5 className="fw-bold mb-0">{"rs" + totalAmount}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>}

        {cartProduct.length == 0 && <div className="body2 container-fluid  mt-100">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body cart">
                            <div className="col-sm-12 empty-cart-cls text-center">
                                <img
                                    src="https://i.imgur.com/dCdflKN.png"
                                    width={130}
                                    height={130}
                                    className="img-fluid mb-4 mr-3"
                                />
                                <h3>
                                    <strong>Your Cart is Empty</strong>
                                </h3>
                                <h4>Add something to make me happy :)</h4>
                                <Link
                                    to='/'
                                    className="btn btn-primary cart-btn-transform m-3"
                                    data-abc="true"
                                >
                                    continue shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }

        <Footer />

    </>

}

export default Cart;