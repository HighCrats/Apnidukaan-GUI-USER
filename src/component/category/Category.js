import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import index from "toastify";

function Category() {

    const { categoryList, error, isLoading } = useSelector((state) => state.category);
    return <>

        {/* ======= Values Section ======= */}
        <section id="values" className="values">
            <div className="container">
                <header className="section-header">
                    <p>Category</p>
                </header>
                <div className="container">
                <div className="row">
                    {!error && categoryList.map((category, index) =>

                        <div key={index} className="col-12 col-md-6 col-lg-3" >
                            <div className="d-flex flex-column justify-content-center m-2">
                                <img className="border p-2 m-auto" style={{borderRadius:"150px", height: '130px', width: "50%" }} src={category.thumbnail} alt="category thumbnail" />
                                <span className="mt-3 text-center"><b style={{fontSize:"18px"}}>{category.name}</b></span>
                            </div>
                        </div>)}
                </div>
            </div>
            </div>
        </section>
        {/* End Values Section */}

    </>

}

export default Category;