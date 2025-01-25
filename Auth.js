import React from "react";
import "../../CSS/Auth.css";
import { useNavigate } from "react-router-dom";
import {
  logingreetBox,
  loginform,
  signupgreetBox,
  signupform,
} from "../../Function/loginFunc.js";
const Auth = () => {
  const navigate = useNavigate()
  
  const goto =()=>{
    navigate("/info")
  }
  const handleForm=(e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const obj=Object.fromEntries(formData.entries())
    console.log(obj);
    if(obj.login_email == "bhavesh@gmail.com"){
      goto()
    }
    else{

    }
  }
  return (
    <>
      <div className="login-signup-box">
        <div className="main-form">
          <section className="usergreet">
            <div className="signup-greet-box ">
              <h1>Hello, Friend!</h1>
              <p>
                Don't have account?
                <br />
                Create it with your personal details to use of all site feature
              </p>
              <button
                type="button"
                onclick="signupgreetBox()"
                onClick={() => {
                  signupgreetBox();
                }}
              >
                Sign Up
              </button>
            </div>
            <div className="login-greet-box hidegreet-box">
              <h1>Hello, Friend!</h1>
              <p>
                Have a account ?<br /> Login with your personal details to use
                of all site feature
              </p>
              <button
                type="button"
                onClick={() => {
                  logingreetBox();
                }}
              >
                Log In
              </button>
            </div>
          </section>
          <section className="forms">
            <button type="button" className="close-btn">
              <i class="ri-close-line"></i>
            </button>
            <div className="chng-form">
              <button
                type="button"
                className="login-form hover-chngbtn"
                onclick="loginform()"
                onClick={() => {
                  loginform();
                }}
              >
                Log in
              </button>
              <hr />
              <button
                type="button"
                className="signup-form"
                onClick={() => {
                  signupform();
                }}
              >
                Sign up
              </button>
            </div>
            <form action ="" onSubmit={handleForm} className="login-box" autoComplete="off">
              <div className="login-email-box">
                <label htmlFor="login-email">
                  <i className="ri-mail-fill" />
                </label>
                <input
                  type="email"
                  name="login_email"
                  id="login-email"
                  required="True"
                  placeholder="Email"
                />
              </div>
              <div className="login-password-box">
                <label htmlFor="login-pwd">
                  <i className="ri-lock-password-fill" />
                </label>
                <input
                  type="password"
                  id="login-pwd"
                  name="login_pwd"
                  placeholder="Password"
                  required="True"
                />
              </div>
              <a href="#" className="forgot-pwd">
                Forgot Password?
              </a>
              <button type="submit" className="login-submit-btn">
                
                Login
              </button>
              <div className="mtd">
                <div className="or">
                  <div className="line" />
                  <span>or</span>
                  <div className="line" />
                </div>
                <div className="mtd-btn">
                  <button className="login-google-btn" type="button">
                    <i className="ri-google-fill" /> Login with Google
                  </button>
                  <button className="login-apple-btn" type="button">
                    <i className="ri-apple-fill" /> Login with Apple
                  </button>
                </div>
              </div>
            </form>
            <form action ="" onSubmit={handleForm} className="signup-box hide-form" autoComplete="off">
              <div className="signup-name-box">
                <label htmlFor="signup-username">
                  <i className="ri-user-3-fill" />
                </label>
                <input
                  type="text"
                  id="signup-username"
                  name="signup_user-name"
                  placeholder="Name"
                  required="True"
                />
              </div>
              <div className="signup-email-box">
                <label htmlFor="signup-email">
                  <i className="ri-mail-fill" />
                </label>
                <input
                  type="email"
                  id="signup-email"
                  placeholder="Email"
                  name="signup_email"
                  required="True"
                />
              </div>
              <div className="signup-password-box">
                <label htmlFor="signup-pwd">
                  <i className="ri-lock-password-fill" />
                </label>
                <input
                  type="password"
                  id="signup-pwd"
                  placeholder="Password"
                  name="signup-pwd"
                  required="True"
                />
              </div>
              <button type="submit" className="signup-submit-btn">
                Sign up
              </button>
              <div className="mtd">
                <div className="or">
                  <div className="line" />
                  <span>or</span>
                  <div className="line" />
                </div>
                <div className="mtd-btn">
                  <button className="signup-google-btn" type="button">
                    <i className="ri-google-fill" /> Sign up with Google
                  </button>
                  <button className="signup-apple-btn" type="button">
                    <i className="ri-apple-fill" /> Sign up withApple
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Auth;
