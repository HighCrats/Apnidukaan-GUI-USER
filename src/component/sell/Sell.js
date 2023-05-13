import Footer from "../footer/Footer";
import Header from "../header/Header";
import axios from "axios";
import apiPoint from "../../api/Web-Api"

import React, { useEffect, useState } from "react";


function Sell(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bill, setBill] = useState([]);
  const [errors, setErrors] = useState({});
  const [imageSrc, setImageSrc] = useState("");


  useEffect(()=>{window.scrollTo(0,0)},[])

  function getFile(event) {
    setBill(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const validateInputs = () => {
    let errors = {};
    if (!title) {
      errors.title = "Title is required";
    }
    if (!description) {
      errors.description = "Description is required";
    }
    if (!price) {
      errors.price = "Price is required";
    } else if (isNaN(price)) {
      errors.price = "Price must be a number";
    }
    if (!bill) {
        errors.bill = "image is required";
      } else if (!["image/png", "image/jpg", "image/jpeg"].includes(bill.type)) {
        errors.bill = "File type must be PNG, JPG, or JPEG";
      }
    return errors;
  };



  const sellSubmit = async (event) => {

    event.preventDefault();
    const errors = validateInputs();
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("bill",bill);
      formData.set("description",description);
      formData.set("price",price);
      formData.set("title",title);
      const response = await axios.post(apiPoint.SELLER_POST,formData);
      window.alert("Form data submitted successfully");
    } else {
      setErrors(errors);
    }
  };


  return (
    <>
        <Header />
        <div className="container mt-5 py-5">
            <div className="row p-4 border border-2 rounded-4 align-items-center justify-content-center">
                <div className="col-5">
                    <form onSubmit={handleSubmit} className="form-group">
                        <div>
                            <h2 className="font-weight-bold text-center">POST YOUR AD</h2>

    return <>
    <Header />
    <div className="container mt-5 py-5 ">
    <div className="row p-4  border border-2 rounded-4 align-items-center justify-content-center">
        <div className="col-5">

            

            <form onSubmit={sellSubmit} className="form-group">

                <div>
                <h2 className="font-weight-bold text-center">POST YOUR AD</h2>

                            <hr />

                            <label htmlFor="title"><b>Title :</b></label> {errors.title && <span style={{color:"red"}}>{errors.title}</span>}
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Your Product Title" className="form-control" id="title" />
                            <br />

                            <label htmlFor="description"><b>Description : </b></label> {errors.description && <span style={{color:"red"}}>{errors.description}</span>}
                            <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Enter Your Product Description" className="form-control" id="description" />
                            <br />
                            
                            <label htmlFor="price"><b>Price : </b></label> {errors.price && <span style={{color:"red"}}>{errors.price}</span>}
                            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder="Enter Your Product Price" className="form-control" id="price" />
                            <br/>
                            <b>Bill : </b> {errors.bill && <span style={{color:"red"}}>{errors.bill}</span>}
                            <div className="row border">
                                <div className="col-md-12 d-flex">
                                    <div className="col-md-6 p-3 m-2">
                                        <label htmlFor="bill" id="uploadBtn">{imageSrc &&(<img className="border" src={imageSrc} alt="Preview" width="150" height="150"/>)}</label>

                                        <input onChange={getFile}  id="bill" type="file" accept="image/png" className="form-control" style={{width:"150px"}}/>

                                        {/* <input onChange={getFile}  id="bill" type="file" accept="image/jpeg" className="form-control" style={{width:"150px"}}/> */}

                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary my-3 me-3">POST NOW</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-5">
                    <img src="assets/img/signin2.avif" className="img-fluid" style={{ height: "auto", width: "100%" }} alt="images" />
                </div>
            </div>
        </div>
        <Footer/>
    </>
  
);
 
}
}
export default Sell;