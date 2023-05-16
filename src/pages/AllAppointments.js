import React from "react";
import Head from '../pages/Head'

class Test extends React.Component{

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
                    alt="usrImg"
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
                  <li className="active">
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
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Invoice No</th>
                      <th>Patient</th>
                      <th>Amount</th>
                      <th>Paid On</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0010</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Richard Wilson <span>#PT0016</span>
                          </a>
                        </h2>
                      </td>
                      <td>$450</td>
                      <td>14 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0009</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient1.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Charlene Reed <span>#PT0001</span>
                          </a>
                        </h2>
                      </td>
                      <td>$200</td>
                      <td>13 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0008</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient2.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Travis Trimble <span>#PT0002</span>
                          </a>
                        </h2>
                      </td>
                      <td>$100</td>
                      <td>12 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0007</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient3.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Carl Kelly <span>#PT0003</span>
                          </a>
                        </h2>
                      </td>
                      <td>$350</td>
                      <td>11 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0006</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient4.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Michelle Fairfax <span>#PT0004</span>
                          </a>
                        </h2>
                      </td>
                      <td>$275</td>
                      <td>10 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0005</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient5.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Gina Moore <span>#PT0005</span>
                          </a>
                        </h2>
                      </td>
                      <td>$600</td>
                      <td>9 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0004</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient6.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Elsie Gilley <span>#PT0006</span>
                          </a>
                        </h2>
                      </td>
                      <td>$50</td>
                      <td>8 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0003</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient7.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Joan Gardner <span>#PT0007</span>
                          </a>
                        </h2>
                      </td>
                      <td>$400</td>
                      <td>7 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0002</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient8.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Daniel Griffing <span>#PT0008</span>
                          </a>
                        </h2>
                      </td>
                      <td>$550</td>
                      <td>6 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-view">#INV-0001</a>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="patient-profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/patients/patient9.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="patient-profile">
                            Walter Roberson <span>#PT0009</span>
                          </a>
                        </h2>
                      </td>
                      <td>$100</td>
                      <td>5 Nov 2019</td>
                      <td className="text-end">
                        <div className="table-action">
                          <a
                            href="invoice-view"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="far fa-eye" /> View
                          </a>
                          <a
                            href="/#"
                            className="btn btn-sm bg-primary-light"
                          >
                            <i className="fas fa-print" /> Print
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


        );
        
    }
}
export default Test;