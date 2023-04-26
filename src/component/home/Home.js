import { useDispatch } from "react-redux";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Header from "../header/Header";
import Product from "../product/Product";
import Service from "../service/Service";
import { useEffect } from "react";
import { fetchCategory } from "../../redux/Category-Slice";


function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory());
    }, []);

    return <>
        <Header />
        <Banner />
        <main id="main">
            <Service />
            <Category />
            <Product />
        </main>
    </>

}

export default Home;