import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function Subscription() {
    const user = useSelector(state=>state.user); 
    const displayRazorpay = async (value) => {
        let response = await axios.post("http://localhost:3010/subscription/addSubscription", { subscription: value })

        let data = response.data
        const options = {
            key: "rzp_test_Vhg1kq9b86udsY",
            currency: data.currency,
            amount: data.amount,
            name: "Learning To Code Online",
            description: "Test Wallet Transaction",
            image: "https://tse2.mm.bing.net/th?id=OIP.4p7ztcUW4gAM6_1VGZ1EVwHaIj&pid=Api&P=0",
            order_id: data.id,
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: user.currentUser.name,
                email: user.currentUser.email,
                contact: user.currentUser.contact,
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });

    return <>

        <Header />

        {/* ======= Pricing Section ======= */}
        <section id="pricing" className="pricing">
            <div className="container mt-5" data-aos="fade-up">
                <header className="section-header">
                    {/* <h2>Pricing</h2> */}
                    <p>Check our Pricing</p>
                </header>
                <div className="row gy-4" data-aos="fade-left">
                    <div
                        className="col-lg-3 col-md-6"
                        data-aos="zoom-in"
                        data-aos-delay={100}
                    >
                        <div className="box">
                            <span className="featured">Featured</span>
                            <h3 style={{ color: "#07d5c0" }}>Free Plan</h3>
                            <div className="price">
                                <sup>$</sup>30<span> / 1 month</span>
                            </div>
                            <img
                                src="assets/img/pricing-free.png"
                                className="img-fluid"
                                alt=""
                            />
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                            </ul>
                            <Link onClick={() => displayRazorpay(30)} className="btn-buy">Buy Now</Link>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 col-md-6"
                        data-aos="zoom-in"
                        data-aos-delay={200}
                    >
                        <div className="box">
                            <span className="featured">Featured</span>
                            <h3 style={{ color: "#65c600" }}>Starter Plan</h3>
                            <div className="price">
                                <sup>$</sup>60<span> / 2 month</span>
                            </div>
                            <img
                                src="assets/img/pricing-starter.png"
                                className="img-fluid"
                                alt=""
                            />
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                            </ul>
                            <Link onClick={() => displayRazorpay(60)} className="btn-buy">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 col-md-6"
                        data-aos="zoom-in"
                        data-aos-delay={300}
                    >
                        <div className="box">
                            <span className="featured">Featured</span>
                            <h3 style={{ color: "#ff901c" }}>Business Plan</h3>
                            <div className="price">
                                <sup>$</sup>90<span> / 3 month</span>
                            </div>
                            <img
                                src="assets/img/pricing-business.png"
                                className="img-fluid"
                                alt=""
                            />
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                            </ul>
                            <Link onClick={() => displayRazorpay(90)} className="btn-buy">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 col-md-6"
                        data-aos="zoom-in"
                        data-aos-delay={400}
                    >
                        <div className="box">
                            <span className="featured">Featured</span>
                            <h3 style={{ color: "#ff0071" }}>Ultimate Plan</h3>
                            <div className="price">
                                <sup>$</sup>120<span> / 4 month</span>
                            </div>
                            <img
                                src="assets/img/pricing-ultimate.png"
                                className="img-fluid"
                                alt=""
                            />
                            <ul>
                                <li>Aida dere</li>
                                <li>Nec feugiat nisl</li>
                                <li>Nulla at volutpat dola</li>
                            </ul>
                            <Link onClick={() => displayRazorpay(120)} className="btn-buy">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Pricing Section */}

        <Footer />



    </>

}

export default Subscription;

