import { ToastContainer, toast } from "react-toastify";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import axios from "axios";
import apiPoint from "../../api/Web-Api";
import { useEffect, useState } from "react";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => { window.scrollTo(0, 0) }, []);

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(apiPoint.USER_CONTACT, {
                name,
                email,
                message,
                contact,
            });
            toast.success("Message Sent");
        } catch (err) {
            toast.warning("Oops! Something Went Wrong");
        }
    };

    return <>

        <Header />

        <ToastContainer />

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
                                        All Time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form
                            action=""
                            method=""
                            className="form-group"
                            onSubmit={handleSubmit}
                        >
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <input
                                    style={{textDecoration : 'none'}}
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        className="form-control"
                                        placeholder="Your Name"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-6 ">
                                    <input
                                        type="email"
                                        value={email}
                                        id="email"
                                        onChange={(event) => setEmail(event.target.value)}
                                        className="form-control"
                                        name="email"
                                        placeholder="Your Email"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        id="contact"
                                        min={0}
                                        maxLength={15}
                                        value={contact}
                                        onChange={(event) => setContact(event.target.value)}
                                        className="form-control"
                                        name="contact"
                                        placeholder="Your Contact"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-12">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        rows={8}
                                        placeholder="Message"
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="col-md-12 text-center">
                                    <button style={{ fontWeight: '700' }} className="btn btn-primary" type="submit">Send Message</button>
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