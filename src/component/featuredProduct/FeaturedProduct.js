import { useSelector } from "react-redux";


function FeaturedProduct() {

    const { productList, isLoading, error } = useSelector(state => state.product);

    return <>

        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                    {/* <h2>Portfolio</h2> */}
                    <p>Check our Featured Product</p>
                </header>
                <div
                    className="row m-4 gy-4 portfolio-container"
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
                                        href={product.thumbnail}
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
            </div>
        </section>
        {/* End Portfolio Section */}

    </>
}

export default FeaturedProduct;