import Footer from "../footer/Footer";
import Header from "../header/Header";

function Contact() {

    return <>

        <Header />

        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
            <div className="container mt-5" data-aos="fade-up">
                <header className="section-header">
                    {/* <h2>Contact</h2> */}
                    <p>Contact Us</p>
                </header>
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-geo-alt" />
                                    <h3>Address</h3>
                                    <p>
                                        Jawarmarg,
                                        <br />
                                        INDORE, IN 452003
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-telephone" />
                                    <h3>Call Us</h3>
                                    <p>
                                        +0731 4240 538
                                        <br />
                                        +91 78694 25567
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-envelope" />
                                    <h3>Email Us</h3>
                                    <p>
                                        highcrats@gmail.com
                                        <br />
                                        apnidukaan@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-clock" />
                                    <h3>Open Services</h3>
                                    <p>
                                        24 x 7
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form
                            action=""
                            method=""
                            className="php-email-form"
                        >
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Your Name"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-6 ">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Your Email"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="subject"
                                        placeholder="Subject"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={6}
                                        placeholder="Message"
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>                                    
                                    <div className="sent-message">
                                        Your message has been sent. Thank you!
                                    </div>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* End Contact Section */}

        <Footer />

    </>

}

export default Contact;