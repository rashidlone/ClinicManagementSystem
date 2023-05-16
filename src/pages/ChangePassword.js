import React from "react";
import Head from '../pages/Head'

class ChangePassword extends React.Component{

    render(){

        return (

         <div>
          <Head />

<div className="main-wrapper">
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
          <div className="profile-sidebar">
            <div className="widget-profile pro-widget-content">
              <div className="profile-info-widget">
                <a href="/#" className="booking-doc-img">
                  <img src="assets/img/patients/patient.jpg" alt="usrImg" />
                </a>
                <div className="profile-det-info">
                  <h3>Richard Wilson</h3>
                  <div className="patient-details">
                    <h5>
                      <i className="fas fa-birthday-cake" /> 24 Jul 1983, 38
                      years
                    </h5>
                    <h5 className="mb-0">
                      <i className="fas fa-map-marker-alt" /> Newyork, USA
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-widget">
              <nav className="dashboard-menu">
                <ul>
                  <li>
                    <a href="patient-dashboard">
                      <i className="fas fa-columns" />
                      <span>Appointment History</span>
                    </a>
                  </li>
                  <li>
                    <a href="book">
                      <i className="fas fa-clipboard" />
                      <span>Book Appointment</span>
                    </a>
                  </li>
                  <li>
                    <a href="profile-settings">
                      <i className="fas fa-user-cog" />
                      <span>Profile Settings</span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="change-password">
                      <i className="fas fa-lock" />
                      <span>Change Password</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fas fa-sign-out-alt" />
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-8 col-xl-9">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <form>
                    <div className="form-group">
                      <label>Old Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>New Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Save Changes
                      </button>
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

            


         </div>


        );
        
    }
}
export default ChangePassword;