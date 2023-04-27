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
            </div>
            <div class="container">
                <div class="row">
             {!error && productList.map((product) => 
                    <div class="col-12 col-md-6 col-lg-4 p-4" >
                        <div class="card">
                            <img class="card-img p-4" style={{ height: '300px', width:"90%"}} src={product.thumbnail} alt="Vans"/>
                                <div class="card-img-overlay d-flex justify-content-end">
                                    <a href="#" class="card-link text-danger like">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">{product.title}</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
                                    <p class="card-text">
                                        {product.description.substring(0,30)}</p>
                                    <div class="buy d-flex justify-content-between align-items-center">
                                        <div class="price text-success"><h5 class="mt-4">₹{product.price}</h5></div>
                                        <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                                    </div><br/>
                                </div>
                        </div>
            </div>)}
            </div>
                </div>
        </section>
        {/* End Portfolio Section */}

    </>
}

export default FeaturedProduct;