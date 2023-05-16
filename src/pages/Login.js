import React from "react";
import Head from '../pages/Head'

class Login extends React.Component{

    render(){

        return (

         <div>
          <head> <title>Login</title></head>
          <Head/>
 
          <div className="main-wrapper">
  <div className="content top-space">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="account-content">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 col-lg-6 login-left">
                <img
                  src="assets/img/login-banner.png"
                  className="img-fluid"
                  alt="Doccure Login"
                />
              </div>
              <div className="col-md-12 col-lg-6 login-right">
                <div className="login-header">
                  <h3>Login </h3>
                </div>
                <form action="/#">
                  <div className="form-group form-focus">
                    <input type="email" className="form-control floating" />
                    <label className="focus-label">Email</label>
                  </div>
                  <div className="form-group form-focus">
                    <input type="password" className="form-control floating" />
                    <label className="focus-label">Password</label>
                  </div>
                  <div className="text-end">
                    <a className="forgot-link" href="forgot-password">
                      Forgot Password ?
                    </a>
                  </div>
                  <button
                    className="btn btn-primary w-100 btn-lg login-btn"
                    type="submit"
                  >
                    Login
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
                  <div className="text-center dont-have">
                    Don’t have an account? <a href="register">Register</a>
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
export default Login;