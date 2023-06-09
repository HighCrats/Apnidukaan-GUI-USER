import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Header from "../header/Header";
import Service from "../service/Service";
import Footer from "../footer/Footer";
import { fetchCategory } from "../../redux/Category-Slice";
import { fetchProduct } from "../../redux/Product-Slice";
import FeaturedProduct from "../featuredProduct/FeaturedProduct-HARSHITA";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <main id="main">
        <Service />
        <Category />
        {/* <FeaturedProduct /> */}
      </main>
      <Footer />
    </>
  );
}

export default Home;
