import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function SignIn() {
    return <>

        <Header />
        <div className="container mt-5 py-5 ">
            <div className="row p-4  border border-2 rounded-4 align-items-center justify-content-center">
                <div className="col-5">
                    <form className="form-group">
                        <div>
                            <h1 className="font-weight-bold">Login</h1>
                            <hr />

                            <label><b>Email</b></label>
                            <input type="password" placeholder="Enter your Email" className="form-control" name="password" />
                            <br />

                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" className="form-control" name="password" />
                            <br />
                            <Link to="#" style={{fontSize:"13px",textDecoration:"underline"}}>forgot password</Link>
                            <br />
                            <div>
                                <button type="submit" className="btn btn-primary my-3 me-3">Sign In</button>
                                <Link to="/signup" style={{fontSize:"13px"}}> Create new account</Link>
                            </div>
                            {/* <br /> */}
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