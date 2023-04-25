import Banner from "../banner/Banner";
import Header from "../header/Header";
import Product from "../product/Product";
import Service from "../service/Service";


function Home() {

    return <>
        <Header />
        <Banner />
        <main id="main">
            <Service />
            <Product />
        </main>
    </>

}

export default Home;