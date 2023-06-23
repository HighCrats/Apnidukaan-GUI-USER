import { useSelector } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import apiPoint from "../../api/Web-Api";
import Modal from 'react-modal';

function Description() {

  const { descProduct } = useSelector((state) => state.descProduct);
  const [showForm, setShowForm] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    contact: "",
    date: "",
    paymentMode: "",
    TotalAmount: "",
    users_id: ""
  });
  useEffect(() => { window.scrollTo(0, 0) }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBuyNowClick = () => {
    setShowForm(true);
  };


  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(apiPoint.BUY_NOW, formData);
      setFormData({ username: "", email: "",address:"", contact: "", date: "", paymentMode: "", TotalAmount: "", users_id: "" });
      setModalIsOpen(false);
    } catch (err) {
      console.log(err)
      window.alert("Oops! Something went wrong");
    }
  };
  const mainImageRef = useRef(null);


  const handleImageClick = (event) => {
    const clickedImageSrc = event.target.src;
    mainImageRef.current.src = clickedImageSrc;
  };

  return <>
    <Header />
    <div className="bg-white" style={{ marginTop: "110px" }}></div>
    <div className="site-wrap">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-2 p-4" style={{ float: "left" }}>
            <img
              onClick={handleImageClick}
              src={descProduct.images[0]}
              className="ml-2 mb-4 p-2"
              style={{ boxShadow: "5px 5px 5px", width: 100, height: 100 }}
              alt="Small Image 1"
            />
            <img
              onClick={handleImageClick}
              src={descProduct.images[1]}
              className="ml-2 mb-4 p-2"
              style={{ boxShadow: "5px 5px 5px", width: 100, height: 100 }}
            />
            <img
              onClick={handleImageClick}
              src={descProduct.images[2]}
              className="ml-2 mb-4 p-2"
              style={{ boxShadow: "5px 5px 5px", width: 100, height: 100 }}
            />
          </div>
          <div className="col-lg-5 p-3" style={{ float: "left" }}>
            <img
              id="mainImage"
              style={{
                height: 550,
                width: 400,
                boxShadow: "2px 5px 5px",
                border: "1px solid",
                borderRadius: 30,
              }}
              ref={mainImageRef}
              alt="Main Image"
              className="bigImage"
              src={descProduct.thumbnail}
            />
          </div>
          <div className="col-lg-5 p-5">
            <div className="p-3" style={{ boxShadow: "2px 0px 5px" }}>
              <h1 className="text-dark fs-1" style={{ fontFamily: "arial" }}>
                <span className="text-dark" style={{ fontSize: "45px" }}>
                  &#8377;
                </span>{" "}
                {descProduct.price}
              </h1>
              <h4 className="text-dark">{descProduct.title}</h4>
            </div>
            <div className="p-3 mt-3" style={{ boxShadow: "2px 0px 5px" }}>
              <h4 className="text-dark" style={{ fontFamily: "arial" }}>
                {descProduct.description}
              </h4>
            </div>

            {modalIsOpen && (
              <Modal isOpen={modalIsOpen} onSubmit={handleSubmit} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Place Order</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="paymentMode"
                    placeholder="Payment Mode"
                    value={formData.paymentMode}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="number"
                    name="totalAmount"
                    placeholder="Total Amount"
                    value={formData.totalAmount}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="users_id"
                    placeholder="User ID"
                    value={formData.user_id}
                    onChange={handleInputChange}
                    required
                  />
                  <button type="submit" style={{ fontWeight: '700' }} className="btn btn-primary">
                    Place Order
                  </button>
                </form>
              </Modal>

            )}
            <div className="p-3 mt-3">
              <button className="btn btn-primary" onClick={() => setModalIsOpen(true)} > Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>

}

export default Description;
