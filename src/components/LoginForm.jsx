import React from "react";

function LoginForm() {
  return (
    <div className="form-signin w-50 m-auto  bg-white shadow p-3 rounded-3 text-center">
      <form>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address or phone number</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <a href="#" className="text-decoration-none m-3 p-3">
          Forgotten Password?
        </a>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          Create a Page for celebrity, brand or business.
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
