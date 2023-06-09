import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUser } from "../../redux/User-Slice";
import { ToastContainer, toast } from "react-toastify";
import apiPoint from "../../api/Web-Api";
import 'react-toastify/dist/ReactToastify.css';
import WithGoogle from "../googleSignup/Google-HARSHITA";


function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const dispatch = useDispatch();


    useEffect(() => { window.scrollTo(0, 0) }, [])

    const validateInputs = () => {
        let errors = {};
        if (!email) {
            errors.email = "Email is Required";
        }
        if (!password) {
            errors.password = "Password is Required";
        }
        return errors;
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const errors = validateInputs();
            if (Object.keys(errors).length === 0) {
                const response = await axios.post(apiPoint.USER_SIGNIN, {
                    email,
                    password
                });
                dispatch(setUser(response.data.user));
                toast.success("Sign In Success");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
            else {
                setErrors(errors);
            }
        }
        catch (err) {
            toast.error("Invalid Email Or Password");
        }
    }

    return <>

        <ToastContainer />

        <Header />

        <div className="container mt-5 py-5 ">
            <div className="row p-4  border border-2 rounded-4 align-items-center justify-content-center">
                <div className="col-5">
                    <form className="form-group" onSubmit={handleSubmit}>
                        <div>
                            <h1 className="font-weight-bold">Login</h1>
                            <hr />

                            <label htmlFor="email">
                                <b>Email :</b>
                            </label>{" "}
                            {errors.email && (<span style={{ color: "red" }}>{errors.email}</span>)}
                            <input
                                value={email}
                                id="email"
                                type="email"
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter your Email"
                                className="form-control"
                                name="email"
                            />
                            <br />
                            <label htmlFor="password">
                                <b>Password :</b>
                            </label>{" "}
                            {errors.password && (
                                <span style={{ color: "red" }}>{errors.password}</span>
                            )}
                            <input
                                value={password}
                                id="password"
                                type="password"
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter Password"
                                className="form-control"
                                name="password"
                            />
                            <br />
                            <WithGoogle />
                            <br />
                            <Link to='/forgotPassword' style={{ fontSize: "13px", textDecoration: "underline" }} >forgot password ?</Link>
                            <br />
                            <div>
                                <button type="submit" className="btn btn-primary my-3 me-3">Sign In</button>
                                <Link to="/signup" style={{ fontSize: "13px" }}> Create new account</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-5">
                    <img src="assets/img/signin2.avif" className="img-fluid" style={{ height: "auto", width: "100%" }} alt="images" />
                </div>
            </div>
        </div>

        <Footer />

    </>
}

export default SignIn;