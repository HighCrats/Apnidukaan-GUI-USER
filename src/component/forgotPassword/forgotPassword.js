import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiEndPoint from '../../api/Web-Api';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function ForgetPassword() {
    const navigate = useNavigate();
    const email = useRef(null);
    const OTP = useRef(null);
    const [otpStatus, setOtpStatus] = useState(false);
    const [otp, setOtp] = useState(null);
    const sendingTime = 0;

    const handlesubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(apiEndPoint.USER_CHECK, { email: email.current.value });
        console.log(response.data);
        if (response.data.status) {
            setOtpStatus(response.data.status);
            setOtp(response.data.otp);
            toast.success("OTP sent successfully");
        }
        else
            toast.error("This user is unauthorized...");
    }

    const updatePassword = async () => {
        console.log(OTP.current.value);
        if (sendingTime + 5 <= new Date().getMinutes()) {
            if (otp == OTP.current.value) {
                navigate('/changePassword', { state: { user: email.current.value } });
            }
            else
                toast.error('OTP Mis-match');
        }
        else
            toast.error('OTP Is expires...');
    }

    return <>
        <Header />
        <ToastContainer />
        <div className="container justify-content-center">
            <div className="row m-auto justify-content-center">
                <div className="col-md-4 col-md-offset-4 m-auto forgetpassword justify-content-center mt-5" >
                    <div className="panel panel-default justify-content-center">
                        <div className="panel-body justify-content-center">
                            <div className="text-center mt-5 border justify-content-center">
                                <h3 className='mt-3'>
                                    <i className="fa fa-lock fa-4x lock" />
                                </h3>
                                <h2 className="text-center changepasswordHeading">Forgot Password?</h2>
                                <p className='mt-3'>You can reset your password here.</p>
                                <div className="panel-body">
                                    <form>
                                        <div className="form-group text-center">
                                            <div className="input-group mt-5">
                                                <input id="email" name="email" ref={email} placeholder="Please Enter Your Email " className="form-control" type="email" />
                                            </div>
                                            <div className="input-group mt-4 justify-content-right">
                                                <button class="btn btn-primary" style={{ fontWeight: '700' }} role="button" onClick={handlesubmit} >Send OTP</button>
                                            </div>
                                            <div className="input-group mt-3">
                                                <input id="email" name="email" ref={OTP} placeholder="Enter Your OTP" className="form-control" type="text" />
                                            </div>
                                            <div className="input-group mt-4 ">
                                                <button style={{ fontWeight: '700' }} onClick={updatePassword} className="btn btn-primary" type="submit">Reset Password</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
        <Footer />
    </>

}

export default ForgetPassword;