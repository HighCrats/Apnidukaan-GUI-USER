import { useSelector } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";
function Description() {
  const { descProduct } = useSelector((state) => state.descProduct);
  console.log(descProduct);

  return (
    <>
      <Header/>
      <div className="site-wrap mt-5" style={{ marginTop: "-150px" }}>
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-2 col-lg-2 " style={{ float: "left" }}>
              <img
                src={descProduct.images[0]}
                className="ml-2 mb-4 p-2"
                style={{ boxShadow: "5px 5px 5px", width: 100, height: 100 }}
              />
              <img
                src={descProduct.images[1]}
                className="ml-2 mb-4 p-2"
                style={{ boxShadow: "5px 5px 5px", width: 100, height: 100 }}
              />
              <img
                src={descProduct.images[2]}
                className="ml-2 mb-4 p-2"
                style={{ boxShadow: "5px 5px 5px", width: 100, height: 100 }}
              />
            </div>
            <div className="col-lg-5 " style={{ float: "left" }}>
              <img
                id="mainImage"
                style={{
                  height: 550,
                  width: 400,
                  boxShadow: "0px 0px 5px",
                  border: "1px solid",
                  borderRadius: 30,
                }}
                className="bigImage"
                src={descProduct.thumbnail}
              />
            </div>
            <div className="col-md-5 ">
              <h1 className="text-dark">Title : {descProduct.title}</h1>
              <br />
              <h3 className="text-dark">
                Description: {descProduct.description}
              </h3>
              <br />
              <h3 className="text-dark">Price : {descProduct.price}</h3>
              <br />
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
              <br />
              <h3 className="text-dark"></h3>
              <br />
              <h6 className="text-dark"></h6>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  );
}
export default Description;
