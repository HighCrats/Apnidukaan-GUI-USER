import { useSelector } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useEffect, useRef } from "react";

function Description() {

  const { descProduct } = useSelector((state) => state.descProduct);

  useEffect(()=>{window.scrollTo(0,0)},[])
  console.log(descProduct);
  const mainImageRef = useRef(null);

  const handleImageClick = (event) => {
    const clickedImageSrc = event.target.src;
    mainImageRef.current.src = clickedImageSrc;
  };
  return (
    <>
      <Header />
      <div className="bg-danger" style={{ marginTop: "110px" }}></div>
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>

        <div className="container mt-4">

      <div className="site-wrap">
        <div className="container mt-5">

          <div className="row">
            <div className="col-md-2 col-lg-2 mt-5 p-5" style={{ float: "left" }}>
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
            <div className="col-lg-5 mt-5 p-5" style={{ float: "left" }}>
              <img
                id="mainImage"
                style={{
                  height: 550,
                  width: 400,
                  boxShadow: "0px 0px 5px",
                  border: "1px solid",
                  borderRadius: 30,
                }}
                ref={mainImageRef}
                alt="Main Image"
                className="bigImage"
                src={descProduct.thumbnail}
              />
            </div>

            <div className="col-md-5">
              <div className="p-3" style={{ boxShadow: "2px 0px 5px" }}>
                <h1 className="text-dark fs-1" style={{ fontFamily: "arial" }}>
                  <span className="text-dark" style={{ fontSize: "45px" }}>
                    &#8377;
                  </span>{" "}
                  {descProduct.price}
                </h1>
                <h4 className="text-dark">{descProduct.title}</h4>
              </div>
              <div className="p-3 mt-3" style={{ boxShadow: "2px 0px 2px" }}>
                <h4 className="text-dark" style={{ fontFamily: "arial" }}>
                  {descProduct.description}
                </h4>
              </div>
              <h3 className="text-dark"></h3>
              <h4
                style={{ textTransform: "capitalize" }}
                className="text-dark"
              ></h4>
              <div>
                <i
                  style={{ color: "goldenrod" }}
                  className="icon-star"
                  aria-hidden="true"
                />
                <i
                  style={{ color: "goldenrod" }}
                  className="icon-star"
                  aria-hidden="true"
                />
                <i
                  style={{ color: "goldenrod" }}
                  className="icon-star"
                  aria-hidden="true"
                />
                <i className="icon-star text-dark" aria-hidden="true" />
                <i className="icon-star text-dark" aria-hidden="true" />
              </div>

            <div className="col-md-5 mt-5 p-5">
              <h3 className="text-dark">Title : {descProduct.title}</h3>
              <br />
              <h3 className="text-dark">Price : {descProduct.price}</h3>
              <br />
              <h3 className="text-dark">Category : {descProduct.categoryname}</h3>

              <br />
              <h3 className="text-dark">Description : {descProduct.description}</h3>
              <br />
              <button style={{ fontWeight: '700' }} className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Description;
