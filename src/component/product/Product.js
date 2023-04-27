import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
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
    const users = useSelector((state) => state.user);
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

    const AddedToWishlist =  async (productsId) => {
        window.alert(productsId);
        let usersId = users.currentUser._id;
        console.log(usersId);
        let response = await axios.post(apiPoint.USER_WISHLIST,{usersId:usersId,productsId:productsId});
        console.log(response.data);
        
    };


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

                    <div class="container">
                        <div class="row">
                            {!error && productList.map((product) =>
                                <div class="col-12 col-md-6 col-lg-4 p-4" >
                                    <div class="card">
                                        <img class="card-img p-4" style={{ height: '300px', width: "90%" }} src={product.thumbnail} alt="Vans" />
                                        <div class="card-img-overlay d-flex justify-content-end">
                                            <a href="#" class="card-link text-danger like">
                                                <span id="heart"><i onClick={()=>AddedToWishlist(product.id)} class="fa fa-heart-o"></i></span>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <h4 class="card-title">{product.title}</h4>
                                            <h6 class="card-subtitle mb-2 text-muted">Category: {product.categoryname}</h6>
                                            <p class="card-text">
                                                {product.description.substring(0, 30)}</p>
                                            <div class="buy d-flex justify-content-between align-items-center">
                                                <div class="price text-success"><h5 class="mt-4">₹{product.price}</h5></div>
                                                <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                                            </div><br />
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </section >
        {/* End Portfolio Section */}

        < Footer />

    </>

}

export default Product;