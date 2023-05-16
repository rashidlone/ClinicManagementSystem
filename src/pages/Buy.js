import React from "react";
import Head from '../pages/Head'

class Buy extends React.Component{

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
                <h3>Success!</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
export default Buy;