import { useSelector } from "react-redux";

function Category() {

    const { categoryList, error, isLoading } = useSelector((state) => state.category);

    return <>

        {/* ======= Values Section ======= */}
        <section id="values" className="values">
            <div className="container-fluid m-2" data-aos="fade-up">
                <header className="section-header">
                    <p>Awesome Category</p>
                </header>
                <div className="row m-5 p-2">
                    <div style={{ overflow: 'hidden', height: "100px", width: "100%" }} className="col-lg-12 d-flex" data-aos="fade-up" data-aos-delay={200}>
                        {!error && categoryList.map((category, index) =>
                            <div key={index} className="box col-lg-1">
                                <h3 id="name" style={{ padding: "2px" }}>{category.name}</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        {/* End Values Section */}

    </>

}

export default Category;