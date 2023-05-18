import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import axios from "axios";
import apiPoint from "../../api/Web-Api";
import "../stylesheet/styles.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const validateInputs = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is Required";
    }
    if (!email) {
      errors.email = "Email is Required";
    }
    if (!password) {
      errors.password = "Password is Required";
    }
    if (!contact) {
      errors.contact = "Contact is Required";
    }
    else if (contact.length != 10) {
      errors.contact = "Contact must be 10 digit";
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const errors = validateInputs();
      if (Object.keys(errors).length === 0) {
        const response = await axios.post(apiPoint.USER_SIGNUP, {
          name,
          email,
          password,
          contact,
        });
        navigate("/signin");
      } else {
        setErrors(errors);
      }
    } catch (err) {
      toast.warning("Oops! Something Went Wrong");
    }
  };

  return (
    <>
      <Header />

      <ToastContainer />

      <div className="container mt-5 py-5">
        <div className="row p-4  border border-2 rounded-4">
          <div className="col-6">
            <form className="form-group" onSubmit={handleSubmit}>
              <div>
                <h1 className="font-weight-bold">Sign Up</h1>
                <hr />
                <label htmlFor="name"><b>Name</b></label> {errors.name && (<span style={{ color: "red" }}>{errors.name}</span>)}
                <input id="name" style={{ textDecoration: "none" }} value={name} type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter your name" className="form-control" name="name" />
                <br />
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
                <label htmlFor="contact">
                  <b>Contact :</b>
                </label> {errors.contact && (
                  <span style={{ color: "red" }}>{errors.contact}</span>
                )}
                <div className="flex">
                  <span
                    className="currency text-dark"
                    style={{ fontSize: "20px", lineHeight: "1.8" }}
                  >
                    +91
                  </span>
                  <input
                    id="contact"
                    min={0}
                    maxLength={15}
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                    placeholder="Enter your contact"
                    type="number"
                    name="contact" />
                </div>
                <br />
                <div>
                  <button type="submit" className="btn btn-primary my-2 me-3">
                    Sign Up
                  </button>
                  <Link to="/signin" style={{ fontSize: "13px" }}>
                    {" "}
                    Already have an account
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 hero-img">
            <img
              src="assets/img/signin.webp"
              className="img-fluid"
              alt="images"
            />
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
}

export default SignUp;
