import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/User-Slice";

function WithGoogle() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return <>
        <div className="main-container">
            <GoogleOAuthProvider clientId="253200048380-kj5s3efrn407rl6tfuvuuafg014qp8vg.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const details = jwt_decode(credentialResponse.credential);
                        console.log(details);
                        console.log(credentialResponse);
                        const user = { name: details.family_name + details.given_name, email: details.email, photo: details.picture, status: true };
                        dispatch(setUser(user));
                        navigate("/");
                    }}
                    onError={() => {
                        console.log("Login Failed");
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    </>
}

export default WithGoogle;