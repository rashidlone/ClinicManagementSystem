import React from "react";
import Head from '../pages/Head'

class ContactUs extends React.Component{

    render(){

        return (

         <div>
          <Head/>

<div className="main-wrapper">
  <section className="contact-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <div className="section-inner-header contact-inner-header">
            <h6>Get in touch</h6>
            <h2>Have Any Question?</h2>
          </div>
          <div className="card contact-card">
            <div className="card-body">
              <div className="contact-icon">
                <i className="feather-map-pin" />
              </div>
              <div className="contact-details">
                <h4>Address</h4>
                <p>8432 Mante Highway, Aminaport, USA</p>
              </div>
            </div>
          </div>
          <div className="card contact-card">
            <div className="card-body">
              <div className="contact-icon">
                <i className="feather-phone" />
              </div>
              <div className="contact-details">
                <h4>Phone Number</h4>
                <p>+1 315 369 5943</p>
              </div>
            </div>
          </div>
          <div className="card contact-card">
            <div className="card-body">
              <div className="contact-icon">
                <i className="feather-mail" />
              </div>
              <div className="contact-details">
                <h4>Email Address</h4>
                <p>
                
                 email@test.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 d-flex">
          <div className="card contact-form-card w-100">
            <div className="card-body">
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Services</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Services"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter your comments"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group form-group-btn mb-0">
                      <button
                        type="submit"
                        className="btn btn-primary prime-btn"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>



         </div>


        );
        
    }
}
export default ContactUs;