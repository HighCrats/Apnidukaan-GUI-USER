import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUser } from "../../redux/User-Slice";
import { ToastContainer, toast } from "react-toastify";
import apiPoint from "../../api/Web-Api";
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {

    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isReset, setIsReset] = useState(false);

    useEffect(()=>{window.scrollTo(0,0)},[])

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

    const handleForgotPassword = async (event) => {
        try {
            window.alert("forgot password called");
            event.preventDefault();
            const response = await axios.post(apiPoint.USER_FORGOT_PASSWORD, { email });
            if (response.status === 200) {
                toast.success("Password reset email sent");
                navigate("/reset-password");
            }
        } catch (err) {
            console.log(err);
            toast.error("Failed to send email for reset password");
        }
    }

    const handleResetPassword = async (event) => {
        try {
            window.alert("reset password called");
            event.preventDefault();
            if (!password || !confirmPassword) {
                toast.error("Please enter new password and confirm it");
                return;
            }
            if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }

            const response = await axios.post(apiPoint.USER_RESET_PASSWORD, {
                password
            });

            if (response.status == 200) {
                toast.success("Password reset successful!");
                navigate("/signin");
            }
        } catch (err) {
            console.log(err);
            toast.error("Failed to reset password");
        }
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const errors = validateInputs();
            if (Object.keys(errors).length === 0) {
            const response = await axios.post(apiPoint.USER_SIGNIN, { email, password });
            dispatch(setUser(response.data.user));
            navigate("/");
            }
            else {
                setErrors(errors);
              }
        }
        catch (err) {
            console.log(err);
            toast.error("Invalid email or password");
        }
    }

    return <>
        <ToastContainer />
        <Header />

        <div className="container mt-5 py-5 ">
            <div className="row p-4  border border-2 rounded-4 align-items-center justify-content-center">
                {/* <div className="col-5">
                    <form className="form-group" onSubmit={handleSubmit}>
                        <div>
                            <h1 className="font-weight-bold">Login</h1>
                            <hr />

                            <label><b>Email</b></label> {errors.email && (<span style={{ color: "red" }}>{errors.email}</span>)}
                            <input value={email} id="email" onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter your Email" className="form-control" name="email" />
                            <br />

                            <label><b>Password</b></label> {errors.password && (<span style={{ color: "red" }}>{errors.password}</span>)}
                            <input id="password" value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Enter Password" className="form-control" name="password" />
                            <br />
                            <Link to="#" style={{ fontSize: "13px", textDecoration: "underline" }} onClick={handleForgotPassword}>forgot password ?</Link>
                            <br />
                            <div>
                                <button type="submit" className="btn btn-primary my-3 me-3">Sign In</button>
                                <Link to="/signup" style={{ fontSize: "13px" }}> Create new account</Link>
                            </div>
                        </div>
                    </form>
                </div> */}

                {/*  */}
                <div className="col-5">
                    {isReset ? (
                        <form className="form-group" onSubmit={handleResetPassword}>
                            <div>
                                <h1 className="font-weight-bold">Reset Password Here</h1>
                                <hr />
                                <label><b>New Password</b></label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    placeholder="Enter New Password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                />
                                <br />
                                <label><b>Confirm Password</b></label>
                                <input
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    type="password"
                                    placeholder="Confirm New Password"
                                    className="form-control"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                />
                                <br />
                                <button type="submit" className="btn btn-primary my-3 me-3">
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form className="form-group" onSubmit={handleSubmit}>
                            <div>
                                <h1 className="font-weight-bold">Login</h1>
                                <hr />

                                <label><b>Email</b></label>
                                <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter your Email" className="form-control" name="password" />
                                <br />

                                <label><b>Password</b></label>
                                <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Enter Password" className="form-control" name="password" />
                                <br />
                                <Link to="#" style={{ fontSize: "13px", textDecoration: "underline" }} onClick={handleForgotPassword}>forgot password ?</Link>
                                <br />
                                <div>
                                    <button type="submit" className="btn btn-primary my-3 me-3">Sign In</button>
                                    <Link to="/signup" style={{ fontSize: "13px" }}> Create new account</Link>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
                {/*  */}

                <div className="col-lg-5">
                    <img src="assets/img/signin2.avif" className="img-fluid" style={{ height: "auto", width: "100%" }} alt="images" />
                </div>
            </div>
        </div>
        <Footer />
    </>
}
export default SignIn;