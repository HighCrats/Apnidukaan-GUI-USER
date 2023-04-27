import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import axios from "axios";
import apiPoint from '../../api/Web-Api';
import Spinner from "../spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function Product() {

    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    const loadProducts = async () => {
        try {
            let response = await axios.get(apiPoint.PRODUCT_DATA + `?page=${page}`);
            if (response.data.status) {
                setProductList([...productList, ...response.data.result]);
                setPage(page + 1);
                setIsLoading(false);
            }
        }
        catch (err) {
            setError("Error");
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return <>

        <Header />

        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                    {/* <h2>Portfolio</h2> */}
                    <p>Check our latest Product</p>
                </header>

                {isLoading && <Spinner />}
                <InfiniteScroll
                    dataLength={productList.length}
                    next={loadProducts}
                    hasMore={productList.length < 60}
                    loader={<Spinner />}
                    endMessage={<p>.....</p>}>

                    <div
                        className="row gy-4  portfolio-container"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        {!error && productList.map((product, index) => <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap p-4 m-3 border">
                                <img style={{ height: '400px', border: '2px solid blue' }}
                                    src={product.thumbnail}
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="portfolio-info">
                                    <div className="portfolio-links">
                                        <a
                                            href="assets/img/portfolio/portfolio-1.jpg"
                                            data-gallery="portfolioGallery"
                                            className="portfokio-lightbox"
                                            title="App 1"
                                        >
                                            <i className="bi bi-plus" />
                                        </a>
                                        <a href="#" title="More Details">
                                            <i className="bi bi-link" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        )}
                    </div>
                </InfiniteScroll>
            </div>
        </section >
        {/* End Portfolio Section */}

        < Footer />

    </>

}

export default Product;