import React from "react";
import Head from '../pages/Head'

class Register extends React.Component{

    render(){

        return (

         <div>
          <Head/>

<div className="main-wrapper">
  <div className="content top-space">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="account-content">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 col-lg-6 login-left">
                <img
                  src="assets/img/login-banner.png"
                  className="img-fluid"
                  alt="Doccure Register"
                />
              </div>
              <div className="col-md-12 col-lg-6 login-right">
                <div className="login-header">
                  <h3>
                    Patient Register{" "}
                    <a className="has-submenu" href="doctor-register">
                      Are you a Doctor?
                    </a>
                  </h3>
                </div>
                <form action="register-success">
                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">Name</label>
                  </div>
                  <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">Mobile Number</label>
                  </div>
                  <div className="form-group form-focus">
                    <input type="password" className="form-control floating" />
                    <label className="focus-label">Create Password</label>
                  </div>
                  <div className="text-end">
                    <a className="forgot-link" href="login">
                      Already have an account?
                    </a>
                  </div>
                  <button
                    className="btn btn-primary w-100 btn-lg login-btn"
                    type="submit"
                  >
                    Signup
                  </button>
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  <div className="row form-row social-login">
                    <div className="col-6">
                      <a href="/#" className="btn btn-facebook w-100">
                        <i className="fab fa-facebook-f me-1" /> Login
                      </a>
                    </div>
                    <div className="col-6">
                      <a href="/#" className="btn btn-google w-100">
                        <i className="fab fa-google me-1" /> Login
                      </a>
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
</div>


         </div>


        );
        
    }
}
export default Register;