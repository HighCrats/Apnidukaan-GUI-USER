import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect, useState } from "react";

function Request() {
    const users = useSelector((state) => state.user);
    const {requestProduct}= useSelector((state)=>state.requestProduct);
    return <>
        <Header />
        <section className="h-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card" style={{ borderRadius: 10 }}>
                                <header className="section-header">
                                    {/* <h2>Portfolio</h2> */}
                                    <p>Requests</p>
                                </header>
                            {requestProduct.length != 0 && requestProduct.map((product,index)=>
                                <div className="card-body p-4" key={index}>
                                    {console.log(product)}
                                <div className="card shadow-0 border mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img
                                                    src={product.productId.thumbnail}
                                                    className="img-fluid"
                                                    alt="Phone"
                                                    style={{height:"80px",width:"80px"}}
                                                />
                                            </div>
                                            <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                                                <p className="text-muted mb-0">{product.productId.title}</p>
                                            </div>
                                            <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                                                <p className="text-muted mb-0 small">Rs {product.productId.price}</p>
                                            </div>
                                        </div>
                                        <hr
                                            className="mb-4"
                                            style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                        />
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />

    </>
}

export default Request;