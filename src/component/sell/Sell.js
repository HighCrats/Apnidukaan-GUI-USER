import Footer from "../footer/Footer";
import Header from "../header/Header";
import axios from "axios";
import apiPoint from "../../api/Web-Api";
import "../stylesheet/styles.css";
import React, { useEffect, useState } from "react";

function Sell(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bill, setBill] = useState([]);
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagebill, setImageBill] = useState("");
  const [imageProductOne, setimageProductOne] = useState("");
  const [imageProductTwo, setimageProductTwo] = useState("");
  const [imageProductThree, setimageProductThree] = useState("");
  const [imageProductFour, setimageProductFour] = useState("");

  useEffect(()=>{window.scrollTo(0,0)},[])

  function getFile(event) {
    setBill(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageBill(reader.result);
    };

    reader.readAsDataURL(file);
  };
  function getProductOne(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setimageProductOne(reader.result);
    };
    reader.readAsDataURL(file);
  };
  function getProductTwo(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setimageProductTwo(reader.result);
    };

    reader.readAsDataURL(file);
  };
  function getProductThree(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setimageProductThree(reader.result);
    };

    reader.readAsDataURL(file);
  };
  function getProductFour(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setimageProductFour(reader.result);
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

  const handleFileChange = event => {
    setSelectedFiles(event.target.files);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateInputs();
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
      formData.append("bill",bill);
      formData.set("description",description);
      formData.set("price",price);
      formData.set("title",title);
      const response = await axios.post(apiPoint.SELLER_POST,formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImages(response.data.images);
      setSelectedFiles([]);
      window.alert("Form data submitted successfully");
    } else {
      setErrors(errors);
    }
  };

    return <>
    <Header />
    <div className="container mt-5 py-5 ">
    <div className="row p-4  border border-2 rounded-4 align-items-center justify-content-center">
        <div className="col-5">
            <form onSubmit={handleSubmit} className="form-group" id="form">
                <div>
                <h2 className="font-weight-bold text-center">POST YOUR AD</h2>
                            <hr />

                            <label htmlFor="title"><b>Title :</b></label> {errors.title && <span style={{color:"red"}}>{errors.title}</span>}
                            <input value={title} onChange={(e) => setTitle(e.target.value)}type="text" placeholder="Enter Your Product Title" className="form-control" id="title" />
                            <br/>
                            <label htmlFor="description"><b>Description : </b></label> {errors.description && <span style={{color:"red"}}>{errors.description}</span>}
                            <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Enter Your Product Description" className="form-control" id="description" />
                            <br />
                            
                            <label htmlFor="price"><b>Price : </b></label> {errors.price && <span style={{color:"red"}}>{errors.price}</span>}
                              <div className="flex">
                                <span className="currency text-dark" style={{fontSize:"25px"}}>&#8377;</span>
                                <input min={0} maxLength={15} onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder="Enter Your Product Price" className="" id="price" />
                              </div>
                            <br/>
                            <label htmlFor="bill"><b>Bill : </b></label> {errors.bill && <span style={{color:"red"}}>{errors.bill}</span>}
                            <div className="row border mx-1" style={{borderRadius:"5px"}}>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <div className="col-md-6 p-3 m-2">
                                        <label htmlFor="bill" id="uploadBtn">{imagebill &&(<img style={{borderRadius:"5px"}} className="border" src={imagebill} alt="Preview" width="150" height="150"/>)}</label>
                                        <input onChange={getFile}  id="bill" type="file" accept="image/png" className="form-control" style={{width:"150px"}}/>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                            <label htmlFor="productArray"><b>Products : </b></label> {errors.bill && <span style={{color:"red"}}>{errors.bill}</span>}
                            </div>
                            <div className="row border mx-1" style={{borderRadius:"5px"}}>
                                <div className="col-md-12 d-flex justify-content-between">
                                    <div className="col-md-6 p-3 m-2">
                                        <label htmlFor="productOne" id="uploadBtn">{imageProductOne &&(<img style={{borderRadius:"5px"}} className="border" src={imageProductOne} alt="Preview" width="150" height="150"/>)}</label>
                                        <input onChange={getProductOne}  id="images" type="file" accept="image/png" className="form-control" style={{width:"150px"}}/>
                                        <br/>
                                    </div>
                                    <div className="col-md-6 p-3 m-2 ">
                                        <label htmlFor="productTwo" id="uploadBtn">{imageProductTwo &&(<img style={{borderRadius:"5px"}} className="border" src={imageProductTwo} alt="Preview" width="150" height="150"/>)}</label>
                                        <input onChange={getProductTwo}  id="images" type="file" accept="image/png" className="form-control" style={{width:"150px"}}/>
                                        <br/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="col-md-12 d-flex justify-content-between">
                                    <div className="col-md-6 p-3 m-2">
                                        <label htmlFor="productThree" id="uploadBtn">{imageProductThree &&(<img style={{borderRadius:"5px"}} className="border" src={imageProductThree} alt="Preview" width="150" height="150"/>)}</label>
                                        <input onChange={getProductThree}  id="images" type="file" accept="image/png" className="form-control" style={{width:"150px"}}/>
                                        <br/>
                                    </div>
                                    <div className="col-md-6 p-3 m-2">
                                        <label htmlFor="productFour" id="uploadBtn">{imageProductFour &&(<img style={{borderRadius:"5px"}} className="border" src={imageProductFour} alt="Preview" width="150" height="150"/>)}</label>
                                        <input onChange={getProductFour}  id="images" type="file" accept="image/png" className="form-control" style={{width:"150px"}}/>
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

<Footer />
    </>
}

export default Sell;