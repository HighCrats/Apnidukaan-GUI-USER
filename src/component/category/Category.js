import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Category() {

    const { categoryList, error, isLoading } = useSelector((state) => state.category);

    return <>

        {/* ======= Values Section ======= */}
        <section id="values" className="values">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                    <p>Category</p>
                </header>
                <div className="row d-flex flex-rwo p-3">
                    {!error && categoryList.map((category, index) =>
                        <div className="card border my-2 w-25" style={{  border: "1px solid black", borderRadius: "25px" }}>
                            <Link style={{ color: "#4154F1" }} className="card-title text-center p-1 m-2"><b>{category.name.toUpperCase()}</b></Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
        {/* End Values Section */}

    </>

}

export default Category;