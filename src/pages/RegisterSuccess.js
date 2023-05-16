import React from "react";
import Head from '../pages/Head'

class RegisterSuccess extends React.Component{

    render(){

        return (

         <div>
          <Head/>
<div className="main-wrapper">
  <div className="content success-page-cont">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card success-card">
            <div className="card-body">
              <div className="success-cont">
                <i className="fas fa-check" />
                <h3>Registered Successfully!</h3>
                <p className="mb-0">
                  Redirecting to home page, if you are not redirected, click{" "}
                  <a href="/#">here.</a>
                </p>
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
export default RegisterSuccess;