import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function SignUp() {

    return <>
        <Header />

        <div className="container mt-5 py-5">
            <div className="row p-4  border border-2 rounded-4">
                <div className="col-6  ">
                    <form className="form-group">
                        <div>
                            <h1 className="font-weight-bold">Sign Up</h1>
                            <hr />
                            <label><b>Name</b></label>
                            <input type="text" placeholder="Enter your name" className="form-control" name="email" />
                            <br />

                            <label><b>Email</b></label>
                            <input type="email" placeholder="Enter your Email" className="form-control" name="email" />
                            <br />

                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" className="form-control" name="password" />
                            <br />

                            <label><b>Location</b></label>
                            <input type="text-area" placeholder="Enter your location" className="form-control" name="location" />
                            <br />

                            <div>
                                <button type="submit" className="btn btn-primary my-2 me-3">Sign Up</button>
                                <Link to="/signin" style={{fontSize:"13px"}}> Already have an account</Link>
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