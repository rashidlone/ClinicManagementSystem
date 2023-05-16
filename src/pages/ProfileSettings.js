import React from "react";
import Head from '../pages/Head'

class ProfileSettings extends React.Component{

    render(){

        return (

         <div>
          <Head/>

<div className="main-wrapper">
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
          <div className="profile-sidebar">
            <div className="widget-profile pro-widget-content">
              <div className="profile-info-widget">
                <a href="/#" className="booking-doc-img">
                  <img src="assets/img/patients/patient.jpg" alt="usrImage" />
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
                  <li className="active">
                    <a href="profile-settings">
                      <i className="fas fa-user-cog" />
                      <span>Profile Settings</span>
                    </a>
                  </li>
                  <li>
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
              <form>
                <div className="row form-row">
                  <div className="col-12 col-md-12">
                    <div className="form-group">
                      <div className="change-avatar">
                        <div className="profile-img">
                          <img
                            src="assets/img/patients/patient.jpg"
                            alt="usrImage"
                          />
                        </div>
                        <div className="upload-img">
                          <div className="change-photo-btn">
                            <span>
                              <i className="fa fa-upload" /> Upload Photo
                            </span>
                            <input type="file" className="upload" />
                          </div>
                          <small className="form-text text-muted">
                            Allowed JPG, GIF or PNG. Max size of 2MB
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Richard"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Wilson"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <div className="cal-icon">
                        <input
                          type="text"
                          className="form-control datetimepicker"
                          defaultValue="24-07-1983"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Blood Group</label>
                      <select className="form-select form-control">
                        <option>A-</option>
                        <option>A+</option>
                        <option>B-</option>
                        <option>B+</option>
                        <option>AB-</option>
                        <option>AB+</option>
                        <option>O-</option>
                        <option>O+</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="richard@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        defaultValue="+1 202-555-0125"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="806 Twin Willow Lane"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Old Forge"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Newyork"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={13420}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="United States"
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button type="submit" className="btn btn-primary submit-btn">
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


        );
        
    }
}
export default ProfileSettings;