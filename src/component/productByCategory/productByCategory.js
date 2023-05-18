// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import apiPoint from "../../api/Web-Api";
// import { setDescProduct } from "../../redux/Description-Slice";
// import { ToastContainer, toast } from "react-toastify";
// import { fetchProductsByCategory } from "../../redux/product-category-slice";
// import Header from "../header/Header";


// function ProductByCategory() {
// const { categoryList } = useSelector((state) => state.category);
// const [error, setError] = useState("");
// const [isLoading, setIsLoading] = useState(false);
// const [selectedCategory, setSelectedCategory] = useState("");
// const [categoryProducts,setCategoryProducts] = useState([]);
// const [productList, setProductList] = useState([]);
// const dispatch = useDispatch();

// const navigate = useNavigate();
// const users = useSelector((state) => state.user);


// const getProduct = (product) => {
// dispatch(setDescProduct(product));
// };



// return (
//     <React.Fragment>
        
//          <Header/>
//         {/* ======= Products Section ======= */}
//         <section id="products" className="products">
//             <div className="container">
//                 <header className="section-header">
                    
//                 </header>
//                 <div className="row">
//                     {isLoading && <div>Loading...</div>}
//                     {!isLoading &&
//                         categoryProducts?.map((product, index) => (
//                             <div key={index} className="col-12 col-md-6 col-lg-4 p-4" >
//                         <div className="card">

//                             <img className="card-img p-3" style={{ height: '300px', width: "90%", borderRadius: ' 20%' }} src={product.thumbnail} alt="Vans" />
//                             <div className="card-body">
//                                 <h4 className="card-title">{product.title}</h4>
//                                 <h6 className="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
//                                 <p className="card-text">
//                                     {product.description.substring(0, 30)} ...</p>
//                                 <div className="buy d-flex justify-content-around align-items-center">
//                                     <div className="price text-success"><h5 className="mt-4">₹{product.price}</h5></div>

//                                     <Link onClick={() => getProduct(product)} to="/description]" class="btn btn-primary mt-3"><i class="fa fa-eye" aria-hidden="true"></i></Link>

//                                 </div><br />
//                             </div>
//                         </div>
//                     </div>
//                         ))}
//                 </div>
//                 <div className="row">
//                     {isLoading && <div>Loading...</div>}
//                     {!isLoading &&
//                         productList.map((product, index) => (
//                             <div key={index} className="col-12 col-md-6 col-lg-4 p-4">
//                                 <div className="card">
//                                     <img
//                                         className="card-img p-3"
//                                         style={{ height: "300px", width: "90%" }}
//                                         src={product.thumbnail}
//                                         alt="Vans"
//                                     />
//                                     <div className="card-body">
//                                         <h4 className="card-title">{product.title}</h4>
//                                         <h6 className="card-subtitle mb-2 text-muted">
//                                             Category: {product.categoryname}


//                                         </h6>
//                                         <p className="card-text">
//                                             {product.description.substring(0, 30)}
//                                         </p>
//                                         <div className="buy d-flex justify-content-around align-items-center">
                                          
//                                             <div className="buy d-flex justify-content-around align-items-center">
//                                     <div className="price text-success"><h5 className="mt-4">₹{product.price}</h5></div>

//                                     <Link onClick={() => getProduct(product)} to="/description" class="btn btn-primary mt-3"><i class="fa fa-eye" aria-hidden="true"></i></Link>

//                                 </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </section>

//         {/* End Products Section */}
//     </React.Fragment>
// );
// }

// export default ProductByCategory;




