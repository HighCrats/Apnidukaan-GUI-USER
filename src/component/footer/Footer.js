function Footer() {

    return <>

        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
            
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <img src="assets/img/logo.png" alt="" />
                                <span>ApniDukaan</span>
                            </a>
                            <p>
                                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                                nada terra videa magna derita valies darta donna mare fermentum
                                iaculis eu non diam phasellus.
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter">
                                    <i className="bi bi-twitter" />
                                </a>
                                <a href="#" className="facebook">
                                    <i className="bi bi-facebook" />
                                </a>
                                <a href="#" className="instagram">
                                    <i className="bi bi-instagram" />
                                </a>
                                <a href="#" className="linkedin">
                                    <i className="bi bi-linkedin" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Sections</h4>
                            <ul>
                                <li>
                                    <i className="bi bi-chevron-right" /> <a href="#">Home</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" /> <a href="#">Category</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" /> <a href="#">Services</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" /> <a href="#">Products</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <i className="bi bi-chevron-right" /> <a href="#">Instagram</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />{" "}
                                    <a href="#">linkedin</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" />{" "}
                                    <a href="#">facebook</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right" /> <a href="#">twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                               Jawarmarg <br />
                                INDORE, ID 452003
                                <br />
                               INDIA <br />
                                <br />
                                <strong>Phone:</strong> +0731 4240 538
                                <br />
                                <strong>Email:</strong> highcrats@gmail.com
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    © Copyright{" "}
                    <strong>
                        <span>ApniDukaan</span>
                    </strong>
                    . All Rights Reserved by HighCrats
                </div>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ */}
                    Designed by Team
                </div>
            </div>
        </footer>
        {/* End Footer */}

    </>

}

export default Footer;