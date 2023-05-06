import Footer from "../footer/Footer";
import Header from "../header/Header";

function ResetPassword() {

    return <>
        <Header />

        <div className="container">
            <div className="row">
                <div className="col-lg-12 bg-warning" style={{ height: '200px', width: '200px', color: 'black' }}>
                    <h3>Reset Password</h3>
                </div>
            </div>
        </div>

        <Footer />
    </>
}

export default ResetPassword;