import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import apiEndPoint from '../../api/Web-Api';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function ChangePassword() {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location?.state?.user;
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const updatePassword = async (event) => {
        event.preventDefault();
        if (password.current.value == confirmPassword.current.value) {
            const response = await axios.post(apiEndPoint.FORGOTT_PASSWORD, { email: email, password: password.current.value });
            if (response.status) {
                toast.success("Password Updated");
                setTimeout(()=>{
                    navigate('/signin');
                },5000); 
            }
        }
        else
            toast.error('Password does not match...');
    }

    return <>
        <Header />
        <ToastContainer />
        <div className="container justify-content-center">
            <div className="row m-auto">
                <div className="col-md-4 col-md-offset-4 m-auto forgetpassword mt-5" >
                    <div className="panel panel-default">
                        <div className="panel-body mt-5 border">
                            <div className="text-center">
                                <h2 className="text-center mt-2">Change Password Here!!</h2>
                                <div className="panel-body mt-5">
                                    <form onSubmit={updatePassword}>
                                        <div className="form-group">
                                            <div className="input-group mt-3">
                                                <input placeholder="Enter New Password " ref={password} className="form-control" type="password" />
                                            </div>
                                            <div className="input-group mt-3">
                                                <input placeholder="Enter Confirm Password " ref={confirmPassword} className="form-control" type="password" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <input style={{fontWeight : '700'}} name="recover-submit" className="btn btn-primary" defaultValue="Reset Password" type="submit"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default ChangePassword;