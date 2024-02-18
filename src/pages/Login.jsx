import React, { Fragment } from "react";
import LoginForm from "../components/LoginForm";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="container">
        <div className="row form-section ps-5 pe-5">
          <div className="col-6 d-flex">
            <Hero />
          </div>
          <div className="col-6">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Login;
