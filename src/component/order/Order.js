import Footer from "../footer/Footer";
import Header from "../header/Header";

function Order() {

    return <>

        <Header />

        <section id="portfolio" className="portfolio mt-4">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                    {/* <h2>Portfolio</h2> */}
                    <p>All Orders</p>
                </header>
            </div>
        </section>

        <Footer />

    </>

}

export default Order;