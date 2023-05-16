import React from "react";
import Head from '../pages/Head'

class DoctorChangePassword extends React.Component{

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
                  <img
                    src="assets/img/doctors/doctor-thumb-02.jpg"
                    alt="usrImage"
                  />
                </a>
                <div className="profile-det-info">
                  <h3>Dr. Darren Elder</h3>
                  <div className="patient-details">
                    <h5 className="mb-0">
                      BDS, MDS - Oral &amp; Maxillofacial Surgery
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-widget">
              <nav className="dashboard-menu">
                <ul>
                  <li>
                    <a href="doctor-dashboard">
                      <i className="fas fa-columns" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-appointments">
                      <i className="fas fa-calendar-check" />
                      <span>All Appointments</span>
                    </a>
                  </li>
                  <li>
                    <a href="available-timings">
                      <i className="fas fa-clock" />
                      <span>Available Timings</span>
                    </a>
                  </li>
                  <li>
                    <a href="doctor-profile-settings">
                      <i className="fas fa-user-cog" />
                      <span>Profile Settings</span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="doctor-change-password">
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
export default DoctorChangePassword;