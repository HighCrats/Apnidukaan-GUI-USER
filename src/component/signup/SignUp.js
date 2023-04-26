import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import axios from "axios";
import apiPoint from "../../api/Web-Api"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(apiPoint.USER_SIGNUP, { name, email, password, contact });
            navigate("/signin");

        }
        catch (err) {
            toast.error("Oops! something went wrong");
        }
    }


    return <>
        <Header />
        <ToastContainer />
        <div className="container mt-5 py-5">
            <div className="row p-4  border border-2 rounded-4">
                <div className="col-6  ">
                    <form className="form-group" onSubmit={handleSubmit}>
                        <div>
                            <h1 className="font-weight-bold">Sign Up</h1>
                            <hr />
                            <label><b>Name</b></label>
                            <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter your name" className="form-control" name="email" />
                            <br />

                            <label><b>Email</b></label>
                            <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email" className="form-control" name="email" />
                            <br />

                            <label><b>Password</b></label>
                            <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" className="form-control" name="password" />
                            <br />

                            <label><b>Contact</b></label>
                            <input type="text-area" onChange={(event) => setContact(event.target.value)} placeholder="Enter your contact" className="form-control" name="location" />
                            <br />

                            <div>
                                <button type="submit" className="btn btn-primary my-2 me-3">Sign Up</button>
                                <Link to="/signin" style={{ fontSize: "13px" }}> Already have an account</Link>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-lg-6 hero-img">
                    <img src="assets/img/signin.webp" className="img-fluid" alt="images" />
                </div>


            </div>
        </div>

        <Footer />
    </>
}

export default SignUp;