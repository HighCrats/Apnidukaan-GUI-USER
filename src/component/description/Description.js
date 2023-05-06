import { useSelector } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Description() {

  const { descProduct } = useSelector((state) => state.descProduct);

  return (
    <>
      <Header />
      <div className="site-wrap">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-2 col-lg-2 mt-5 p-5" style={{ float: "left" }}>
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
                className="bigImage"
                src={descProduct.thumbnail}
              />
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
