import React from "react";
import Head from '../pages/Head'

class DoctorDashboard extends React.Component{

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
                  <li className="active">
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
                  <li>
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
          <div className="row">
            <div className="col-md-12">
              <div className="card dash-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-4">
                      <div className="dash-widget dct-border-rht">
                        <div className="circle-bar circle-bar1">
                          <div className="circle-graph1" data-percent={75}>
                            <img
                              src="assets/img/icon-01.png"
                              className="img-fluid"
                              alt="patient"
                            />
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6>Total Patient</h6>
                          <h3>1500</h3>
                          <p className="text-muted">Till Today</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="dash-widget dct-border-rht">
                        <div className="circle-bar circle-bar2">
                          <div className="circle-graph2" data-percent={65}>
                            <img
                              src="assets/img/icon-02.png"
                              className="img-fluid"
                              alt="Patient"
                            />
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6>Today Patient</h6>
                          <h3>160</h3>
                          <p className="text-muted">06, Nov 2019</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="dash-widget">
                        <div className="circle-bar circle-bar3">
                          <div className="circle-graph3" data-percent={50}>
                            <img
                              src="assets/img/icon-03.png"
                              className="img-fluid"
                              alt="Patient"
                            />
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6>Appoinments</h6>
                          <h3>85</h3>
                          <p className="text-muted">06, Apr 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="mb-4">Patient Appoinment</h4>
              <div className="appointment-tab">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#upcoming-appointments"
                      data-bs-toggle="tab"
                    >
                      Upcoming
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#today-appointments"
                      data-bs-toggle="tab"
                    >
                      Today
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane show active"
                    id="upcoming-appointments"
                  >
                    <div className="card card-table mb-0">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Patient Name</th>
                                <th>Appt Date</th>
                                <th>Purpose</th>
                                <th>Type</th>
                                <th className="text-center">Paid Amount</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Richard Wilson <span>#PT0016</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  11 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    10.00 AM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>New Patient</td>
                                <td className="text-center">$150</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient1.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Charlene Reed <span>#PT0001</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  3 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    11.00 AM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>Old Patient</td>
                                <td className="text-center">$200</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient2.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Travis Trimble <span>#PT0002</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  1 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    1.00 PM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>New Patient</td>
                                <td className="text-center">$75</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient3.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Carl Kelly <span>#PT0003</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  30 Oct 2019{" "}
                                  <span className="d-block text-info">
                                    9.00 AM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>Old Patient</td>
                                <td className="text-center">$100</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient4.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Michelle Fairfax <span>#PT0004</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  28 Oct 2019{" "}
                                  <span className="d-block text-info">
                                    6.00 PM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>New Patient</td>
                                <td className="text-center">$350</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient5.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Gina Moore <span>#PT0005</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  27 Oct 2019{" "}
                                  <span className="d-block text-info">
                                    8.00 AM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>Old Patient</td>
                                <td className="text-center">$250</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="today-appointments">
                    <div className="card card-table mb-0">
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Patient Name</th>
                                <th>Appt Date</th>
                                <th>Purpose</th>
                                <th>Type</th>
                                <th className="text-center">Paid Amount</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient6.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Elsie Gilley <span>#PT0006</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  14 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    6.00 PM
                                  </span>
                                </td>
                                <td>Fever</td>
                                <td>Old Patient</td>
                                <td className="text-center">$300</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient7.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Joan Gardner <span>#PT0006</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  14 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    5.00 PM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>Old Patient</td>
                                <td className="text-center">$100</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient8.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Daniel Griffing <span>#PT0007</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  14 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    3.00 PM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>New Patient</td>
                                <td className="text-center">$75</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient9.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Walter Roberson <span>#PT0008</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  14 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    1.00 PM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>Old Patient</td>
                                <td className="text-center">$350</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient10.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Robert Rhodes <span>#PT0010</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  14 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    10.00 AM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>New Patient</td>
                                <td className="text-center">$175</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <a
                                      href="patient-profile"
                                      className="avatar avatar-sm me-2"
                                    >
                                      <img
                                        className="avatar-img rounded-circle"
                                        src="assets/img/patients/patient11.jpg"
                                        alt="usrImage"
                                      />
                                    </a>
                                    <a href="patient-profile">
                                      Harry Williams <span>#PT0011</span>
                                    </a>
                                  </h2>
                                </td>
                                <td>
                                  14 Nov 2019{" "}
                                  <span className="d-block text-info">
                                    11.00 AM
                                  </span>
                                </td>
                                <td>General</td>
                                <td>New Patient</td>
                                <td className="text-center">$450</td>
                                <td className="text-end">
                                  <div className="table-action">
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-info-light"
                                    >
                                      <i className="far fa-eye" /> View
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-success-light"
                                    >
                                      <i className="fas fa-check" /> Accept
                                    </a>
                                    <a
                                      href="/#"
                                      className="btn btn-sm bg-danger-light"
                                    >
                                      <i className="fas fa-times" /> Cancel
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
    </div>
  </div>
</div>



         </div>


        );
        
    }
}
export default DoctorDashboard;