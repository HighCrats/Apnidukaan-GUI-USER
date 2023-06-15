import { useEffect, useRef, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import axios from "axios";
import apiPoint from "../../api/Web-Api";
import Spinner from "../spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setDescProduct } from "../../redux/Description-Slice";
import './product.css';

function Product() {
    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [keyword, setKeyword] = useState("");
    const keywords = useRef();
    const users = useSelector((state) => state.user);
    const [selectedPrice, setSelectedPrice] = useState("");

    const [maxPrice, setMaxPrice] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getProduct = (product) => {
        dispatch(setDescProduct(product));
    };

    const handlePriceFilter = (event) => {
        setMaxPrice(event.target.value);
    };


    const loadProducts = async () => {
        try {
            let response = await axios.get(apiPoint.PRODUCT_DATA + `?page=${page}`);
            if (response.data.status) {
                setProductList([...productList, ...response.data.result]);
                setPage(page + 1);
                setIsLoading(false);
            }
        } catch (err) {
            setError("Error");
        }
    };

    const handleSearch = async () => {
        let keyword = keywords.current.value;
        setKeyword(keyword);
        setSelectedPrice(""); // Reset selected price
    };

    const handlePriceSelect = (price) => {
        setSelectedPrice(price);
        setKeyword(""); // Reset keyword
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const filterProducts = (product) => {
        const { title, description, price } = product;
        const formattedPrice = parseFloat(price);

        if (selectedPrice) {
            const [minPrice, maxPrice] = selectedPrice.split("-").map(parseFloat);
            return (
                (title.toLowerCase().includes(keyword.toLowerCase()) ||
                    description.toLowerCase().includes(keyword.toLowerCase()) ||
                    formattedPrice.toString().includes(keyword + " ") ||
                    (keyword !== "" && formattedPrice <= parseFloat(keyword))) &&
                (formattedPrice >= minPrice && formattedPrice <= maxPrice)
            );
        } else {
            return (
                title.toLowerCase().includes(keyword.toLowerCase()) ||
                description.toLowerCase().includes(keyword.toLowerCase()) ||
                formattedPrice.toString().includes(keyword + " ") ||
                (keyword !== "" && formattedPrice <= parseFloat(keyword))
            );
        }
    };


    return (
        <>
            <Header />
            <ToastContainer />
            <section id="portfolio" className="portfolio">
                <div className="container mt-5">
                    <header className="section-header">
                        <p>Check Our latest Product</p>
                    </header>

                    {isLoading && <Spinner />}

                    <InfiniteScroll
                        dataLength={productList.length}
                        next={loadProducts}
                        hasMore={productList.length < 120}
                        loader={<Spinner />}
                        endMessage={<p style={{ textAlign: "center", text: 'bold' }}>NO Product Awailable In This Filter</p>}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="mt-3 mb-5 text-center ">
                                    <input id='search'
                                        style={{
                                            width: "30%",
                                            height: "150%",
                                            borderColor: "blue",
                                            textAlign: "center",
                                            borderRadius: "50px",
                                        }}
                                        type="text"
                                        onChange={handleSearch}
                                        placeholder="Type Here To Search"
                                        ref={keywords}
                                    /> 
                                   &nbsp;&nbsp;&nbsp;&nbsp;
                                    <select style={{
                                            width: "30%",
                                            height: "150%",
                                            borderColor: "blue",
                                            textAlign: "center",
                                            borderRadius: "50px",
                                            borderBlockColor:'blue'
                                        }} 
                                        className="ml-4" onChange={(event) => handlePriceSelect(event.target.value)}>
                                        <option value="">select option</option>
                                        <option value="0-150">0 - 150</option>
                                        <option value="150-500">150 - 500</option>
                                        <option value="500-1000">500 - 1000</option>
                                        <option value="1000-1500">1000 - 1500</option>
                                        <option value="1500-2000">1500 - 2000</option>
                                        <option value="2000-3000">2000 - 3000</option>
                                        <option value="3000-4000">3000 - 4000</option>
                                        <option value="4000-5000">4000 - 5000</option>
                                        <option value="5000-6000">5000 - 6000</option>
                                        <option value="6000-7000">6000 - 7000</option>
                                        <option value="7000-8000">7000 - 8000</option>
                                        <option value="8000-10000">8000 - 10000</option>
                                        <option value="10000-11000">10000 - 11000</option>
                                        <option value="11000-15000">11000 - 15000</option>
                                        <option value="15000-25000">15000 - 25000</option>
                                    </select>
                                </div>
                                <div className="priceFilter">

                                    

                                </div>

                                {!error &&
                                    productList
                                        .filter(filterProducts)
                                        .map((product, index) => (
                                            <div key={index} className="col-12 col-md-6 col-lg-4 p-4">
                                                <div className="card border">
                                                    <img
                                                        className="card-img p-3"
                                                        style={{
                                                            height: "300px",
                                                            width: "90%",
                                                            borderRadius: " 20%",
                                                            margin: "auto",
                                                        }}
                                                        src={product.thumbnail}
                                                        alt="Vans"
                                                    />
                                                    <div className="card-body" style={{ textAlign: "center" }}>
                                                        <h4 style={{ fontWeight: "800" }} className="card-title">
                                                            {product.title.substring(0, 10)}
                                                        </h4>
                                                        <h6 style={{ fontWeight: "800" }} className="card-subtitle mb-2 text-muted">
                                                            Category: {product.categoryname}
                                                        </h6>
                                                        <p style={{ fontWeight: "700" }} className="card-text">
                                                            {product.description.substring(0, 20)}
                                                        </p>
                                                        <div className="buy d-flex justify-content-around align-items-center">
                                                            <div className="price text-success">
                                                                <h5 style={{ fontWeight: "900" }} className="mt-4">
                                                                    ₹{product.price}
                                                                </h5>
                                                            </div>
                                                            <Link
                                                                style={{ fontWeight: "700" }}
                                                                onClick={() => getProduct(product)}
                                                                to="/new"
                                                                className="btn btn-primary mt-3"
                                                            >
                                                                View More
                                                            </Link>
                                                        </div>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Product;
