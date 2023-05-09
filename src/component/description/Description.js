import { useSelector } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useEffect, useRef } from "react";

function Description() {

  const { descProduct } = useSelector((state) => state.descProduct);

  useEffect(() => { window.scrollTo(0, 0) }, []);

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
            <div className="p-3 mt-3">
              <button style={{ fontWeight: '700' }} className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>

}

export default Description;
