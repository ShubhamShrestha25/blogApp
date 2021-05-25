import React from 'react'
import GoogleLogin from 'react-google-login'
import { useSelector } from 'react-redux'
import {
    selectSignedIn,
  } from "../feature/userSlice";

import "../styling/Home.css"


const Homepage = () => {
    const login = (response) => {
        console.log(response)
    }

    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="home_page" style={{display: isSignedIn ? "none" : ""}}>
            {!isSignedIn ? (
                <div className="login_message">
                <h2>📗</h2>
                <h1>Your favourite place to read</h1>
                <p>we provide high quality online resources for reding blogs. Just sign up and start reading some quality blogs.</p>
            <GoogleLogin 
            clientId="231502641104-7v4n734mt77ollolsv18dudm3g6jmvp9.apps.googleusercontent.com"
            render={(renderProps) =>(
               <button
               onclick={renderProps.onClick}
               disabled={renderProps.disabled}
               className="login_button"
               >
                   Login with Google
               </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
            />
            </div>
            ):(
               "" 
            )}
        </div>
    )
}

export default Homepage
