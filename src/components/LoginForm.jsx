import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <>
      <div className="form-signin m-auto  bg-white shadow p-3 rounded-3 text-center form-size">
        <form>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address or phone number</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            className="btn btn-primary w-100 py-2 fw-bold fs-6 mb-2"
            type="submit"
          >
            Log in
          </button>
          <div className="form  form-control-plaintext">
            <a href="#" className="text-decoration-none m-3 p-3">
              Forgotten Password?
            </a>
          </div>
          <hr />
          <button
            className="btn btn-success w-75 py-2 px-0 fw-bold fs-6"
            type="submit"
          >
            Create new account
          </button>
        </form>
      </div>

      <div className="m-auto text-center">
        <p className="mt-5 mb-3 text-body-secondary">
          <span className="fw-bold">Create a Page</span> for celebrity, brand or
          business.
        </p>
      </div>
    </>
  );
}

export default LoginForm;
