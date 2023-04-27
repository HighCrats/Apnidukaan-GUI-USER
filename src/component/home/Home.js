import { useDispatch } from "react-redux";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Header from "../header/Header";
import Service from "../service/Service";
import { useEffect } from "react";
import { fetchCategory } from "../../redux/Category-Slice";
import Footer from "../footer/Footer";
import FeaturedProduct from "../featuredProduct/FeaturedProduct";
import { fetchProduct } from "../../redux/Product-Slice";


function Home() {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory());
        dispatch(fetchProduct());
    }, []);

    return <>
        <Header />
        <Banner />
        <main id="main">
            <Service />
            <Category />
            <FeaturedProduct />
        </main>
        <Footer />
    </>

}

export default Home;