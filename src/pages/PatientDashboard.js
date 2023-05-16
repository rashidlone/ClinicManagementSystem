import React from "react";
import Head from '../pages/Head'

class PatientDashboard extends React.Component{

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
                  <li className="active">
                    <a href="patient-dashboard">
                      <i className="fas fa-columns" />
                      <span>Patient Dashboard</span>
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
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img
                      src="assets/img/specialities/pt-dashboard-01.png"
                      alt=""
                      width={55}
                    />
                  </div>
                  <h5>Heart Rate</h5>
                  <h6>
                    12 <sub>bpm</sub>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img
                      src="assets/img/specialities/pt-dashboard-02.png"
                      alt=""
                      width={55}
                    />
                  </div>
                  <h5>Body Temperature</h5>
                  <h6>
                    18 <sub>C</sub>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img
                      src="assets/img/specialities/pt-dashboard-03.png"
                      alt=""
                      width={55}
                    />
                  </div>
                  <h5>Glucose Level</h5>
                  <h6>70 - 90</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <img
                      src="assets/img/specialities/pt-dashboard-04.png"
                      alt=""
                      width={55}
                    />
                  </div>
                  <h5>Blood Pressure</h5>
                  <h6>
                    202/90 <sub>mg/dl</sub>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body pt-0">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#pat_appointments"
                      data-bs-toggle="tab"
                    >
                      Appointments
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="tab-content pt-0">
                <div
                  id="pat_appointments"
                  className="tab-pane fade show active"
                >
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Doctor</th>
                              <th>Appt Date</th>
                              <th>Booking Date</th>
                              <th>Amount</th>
                              <th>Follow Up</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. Ruby Perrin <span>Dental</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                14 Nov 2019{" "}
                                <span className="d-block text-info">
                                  10.00 AM
                                </span>
                              </td>
                              <td>12 Nov 2019</td>
                              <td>$160</td>
                              <td>16 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-success-light">
                                  Confirm
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-02.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. Darren Elder <span>Dental</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                12 Nov 2019{" "}
                                <span className="d-block text-info">
                                  8.00 PM
                                </span>
                              </td>
                              <td>12 Nov 2019</td>
                              <td>$250</td>
                              <td>14 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-success-light">
                                  Confirm
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-03.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. Deborah Angel <span>Cardiology</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                11 Nov 2019{" "}
                                <span className="d-block text-info">
                                  11.00 AM
                                </span>
                              </td>
                              <td>10 Nov 2019</td>
                              <td>$400</td>
                              <td>13 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-danger-light">
                                  Cancelled
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-04.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. Sofia Brient <span>Urology</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                10 Nov 2019{" "}
                                <span className="d-block text-info">
                                  3.00 PM
                                </span>
                              </td>
                              <td>10 Nov 2019</td>
                              <td>$350</td>
                              <td>12 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-warning-light">
                                  Pending
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-05.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. Marvin Campbell{" "}
                                    <span>Ophthalmology</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                9 Nov 2019{" "}
                                <span className="d-block text-info">
                                  7.00 PM
                                </span>
                              </td>
                              <td>8 Nov 2019</td>
                              <td>$75</td>
                              <td>11 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-success-light">
                                  Confirm
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-06.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. Katharine Berthold{" "}
                                    <span>Orthopaedics</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                8 Nov 2019{" "}
                                <span className="d-block text-info">
                                  9.00 AM
                                </span>
                              </td>
                              <td>6 Nov 2019</td>
                              <td>$175</td>
                              <td>10 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-danger-light">
                                  Cancelled
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-07.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. Linda Tobin <span>Neurology</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                8 Nov 2019{" "}
                                <span className="d-block text-info">
                                  6.00 PM
                                </span>
                              </td>
                              <td>6 Nov 2019</td>
                              <td>$450</td>
                              <td>10 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-success-light">
                                  Confirm
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-08.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. Paul Richard <span>Dermatology</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                7 Nov 2019{" "}
                                <span className="d-block text-info">
                                  9.00 PM
                                </span>
                              </td>
                              <td>7 Nov 2019</td>
                              <td>$275</td>
                              <td>9 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-success-light">
                                  Confirm
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-09.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. John Gibbs <span>Dental</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                6 Nov 2019{" "}
                                <span className="d-block text-info">
                                  8.00 PM
                                </span>
                              </td>
                              <td>4 Nov 2019</td>
                              <td>$600</td>
                              <td>8 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-success-light">
                                  Confirm
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a
                                    href="doctor-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-10.jpg"
                                      alt="usrImage"
                                    />
                                  </a>
                                  <a href="doctor-profile">
                                    Dr. Olga Barlow <span>Dental</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                5 Nov 2019{" "}
                                <span className="d-block text-info">
                                  5.00 PM
                                </span>
                              </td>
                              <td>1 Nov 2019</td>
                              <td>$100</td>
                              <td>7 Nov 2019</td>
                              <td>
                                <span className="badge rounded-pill bg-success-light">
                                  Confirm
                                </span>
                              </td>
                              <td className="text-end">
                                <div className="table-action">
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a
                                    href="/#"
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <i className="far fa-eye" /> View
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


        );
        
    }
}
export default PatientDashboard;