import Footer from "../footer/Footer";
import Header from "../header/Header";

function Subscription() {

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
                                <sup>$</sup>0<span> / month</span>
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
                            <a href="#" className="btn-buy">
                                Buy Now
                            </a>
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
                                <sup>$</sup>19<span> / month</span>
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
                            <a href="#" className="btn-buy">
                                Buy Now
                            </a>
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
                                <sup>$</sup>29<span> / month</span>
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
                            <a href="#" className="btn-buy">
                                Buy Now
                            </a>
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
                                <sup>$</sup>49<span> / month</span>
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
                            <a href="#" className="btn-buy">
                                Buy Now
                            </a>
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