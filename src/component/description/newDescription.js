import { useSelector } from "react-redux";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useEffect, useRef } from "react";
import '../description/descriptionStyle.css';

function New() {

    const { descProduct } = useSelector((state) => state.descProduct);

    useEffect(() => { window.scrollTo(0, 0) }, []);

    const mainImageRef = useRef(null);

    const handleImageClick = (event) => {
        const clickedImageSrc = event.target.src;
        mainImageRef.current.src = clickedImageSrc;
    };

    return <>

        <Header />

        {/*  */}

        <div style={{ height: '100px' }}></div>

        <section id="default">
            <div className="container mt-5 mb-5">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-6 border-end">
                            <div className="large-5  d-flex flex-column justify-content-center">
                                <div className="main_image xzoom-container ">
                                    <img class="xzoom"
                                        ref={mainImageRef}
                                        src={descProduct.thumbnail}
                                        xoriginal="https://i.imgur.com/J9rluQI.jpg"
                                        id="xzoom-default"
                                        width={520}
                                    />
                                </div>
                                <div className="thumbnail_images xzoom-thumbs">
                                    <ul id="thumbnail">
                                        <li>
                                            <img class="xzoom-gallery"
                                                onClick={handleImageClick}
                                                src={descProduct.images[0]}
                                                xpreview="https://i.imgur.com/b7R8dRr.jpg"
                                                width={120}
                                            />
                                        </li>
                                        <li>
                                            <img class="xzoom-gallery"
                                                onClick={handleImageClick}
                                                src={descProduct.images[1]}
                                                width={120}
                                            />
                                        </li>
                                        <li>
                                            <img class="xzoom-gallery"
                                                onClick={handleImageClick}
                                                src={descProduct.images[2]}
                                                width={120}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 right-side">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 style={{ fontWeight: '700' }}>{descProduct.title.toUpperCase()}</h3>
                                </div>
                                <br />
                                <div className="mt-2 pr-3 text-muted content">
                                    <h5 style={{ fontWeight: '600' }}>
                                        {descProduct.description}
                                    </h5>
                                </div>
                                <br />
                                <span className="text-dark" style={{ fontSize: "45px" }}>
                                    &#8377; {descProduct.price}
                                </span>
                                <div className="mt-3">
                                    <span className="fw-bold">Color</span>
                                    <div className="colors">
                                        <ul id="marker">
                                            <li id="marker-1" />
                                            <li id="marker-2" />
                                            <li id="marker-3" />
                                            <li id="marker-4" />
                                            <li id="marker-5" />
                                        </ul>
                                    </div>
                                </div>
                                <div className="buttons d-flex flex-row mt-5 gap-3">
                                    <button style={{ fontWeight: '700' }} className="btn btn-outline-dark">Send Request</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  */}

        <Footer />
    </>

}

export default New;
