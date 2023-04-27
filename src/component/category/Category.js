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

                <div className="row m-4 p-2">
                    {!error && categoryList.map((category, index) =>
                        <div className="card p-1 m-4 " style={{ width: "15rem", border: "1px solid black", borderRadius: "25px" }}>
                            <Link style={{color : 'slateblue'}} className="card-title  text-center p-1"><b>{category.name.toUpperCase()}</b></Link>
                        </div>

                    )}
                </div>
            </div>
        </section>
        {/* End Values Section */}

    </>

}

export default Category;