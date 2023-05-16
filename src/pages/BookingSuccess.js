import React from "react";
import Head from '../pages/Head'

class BookingSuccess extends React.Component{

    render(){

        return (

         <div>
          <Head />

<div className="main-wrapper">
  <div className="content success-page-cont">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card success-card">
            <div className="card-body">
              <div className="success-cont">
                <i className="fas fa-check" />
                <h3>Appointment booked Successfully!</h3>
                <p>
                  Appointment booked with <strong>Dr. Darren Elder</strong>
                  <br /> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong>
                </p>
                <a
                  href="invoice-view"
                  className="btn btn-primary view-inv-btn"
                >
                  View Invoice
                </a>
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
export default BookingSuccess;