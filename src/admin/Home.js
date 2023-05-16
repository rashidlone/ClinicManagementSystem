import React from "react";

class Home extends React.Component{

    render(){

        return (

         <div>
          <head> <title>Admin - Dashboard</title></head>
            <div className="main-wrapper">
  <div className="header">
    <div className="header-left">
      <a href="/admin/" className="logo">
        <img src="/admin/assets/img/logo.png" alt="Logo" />
      </a>
      <a href="/admin/" className="logo logo-small">
        <img
          src="/admin/assets/img/logo-small.png"
          alt="Logo"
          width={30}
          height={30}
        />
      </a>
    </div>
    <a href="/#" id="toggle_btn">
      <i className="fe fe-text-align-left" />
    </a>
    <div className="top-nav-search">
      <form>
        <input type="text" className="form-control" placeholder="Search here" />
        <button className="btn" type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
    <a href="/#" className="mobile_btn" id="mobile_btn">
      <i className="fa fa-bars" />
    </a>
    <ul className="nav user-menu">
      <li className="nav-item dropdown noti-dropdown">
        <a
          href="/#"
          className="dropdown-toggle nav-link"
          data-bs-toggle="dropdown"
        >
          <i className="fe fe-bell" />{" "}
          <span className="badge rounded-pill">3</span>
        </a>
        <div className="dropdown-menu notifications">
          <div className="topnav-dropdown-header">
            <span className="notification-title">Notifications</span>
            <a href="/#" className="clear-noti">
              {" "}
              Clear All{" "}
            </a>
          </div>
          <div className="noti-content">
            <ul className="notification-list">
              <li className="notification-message">
                <a href="/#">
                  <div className="media d-flex">
                    <span className="avatar avatar-sm flex-shrink-0">
                      <img
                        className="avatar-img rounded-circle"
                        alt="usrImg"
                        src="/admin/assets/img/doctors/doctor-thumb-01.jpg"
                      />
                    </span>
                    <div className="media-body flex-grow-1">
                      <p className="noti-details">
                        <span className="noti-title">Dr. Ruby Perrin</span>{" "}
                        Schedule{" "}
                        <span className="noti-title">her appointment</span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">4 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="/#">
                  <div className="media d-flex">
                    <span className="avatar avatar-sm flex-shrink-0">
                      <img
                        className="avatar-img rounded-circle"
                        alt="usrImg"
                        src="/admin/assets/img/patients/patient1.jpg"
                      />
                    </span>
                    <div className="media-body flex-grow-1">
                      <p className="noti-details">
                        <span className="noti-title">Charlene Reed</span> has
                        booked her appointment to{" "}
                        <span className="noti-title">Dr. Ruby Perrin</span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">6 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="/#">
                  <div className="media d-flex">
                    <span className="avatar avatar-sm flex-shrink-0">
                      <img
                        className="avatar-img rounded-circle"
                        alt="usrImg"
                        src="/admin/assets/img/patients/patient2.jpg"
                      />
                    </span>
                    <div className="media-body flex-grow-1">
                      <p className="noti-details">
                        <span className="noti-title">Travis Trimble</span> sent
                        a amount of $210 for his{" "}
                        <span className="noti-title">appointment</span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">8 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="/#">
                  <div className="media d-flex">
                    <span className="avatar avatar-sm flex-shrink-0">
                      <img
                        className="avatar-img rounded-circle"
                        alt="usrImg"
                        src="/admin/assets/img/patients/patient3.jpg"
                      />
                    </span>
                    <div className="media-body flex-grow-1">
                      <p className="noti-details">
                        <span className="noti-title">Carl Kelly</span> send a
                        message{" "}
                        <span className="noti-title"> to his doctor</span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">12 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <a href="/#">View all Notifications</a>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown has-arrow">
        <a
          href="/#"
          className="dropdown-toggle nav-link"
          data-bs-toggle="dropdown"
        >
          <span className="user-img">
            <img
              className="rounded-circle"
              src="/admin/assets/img/profiles/avatar-01.jpg"
              width={31}
              alt="Ryan Taylor"
            />
          </span>
        </a>
        <div className="dropdown-menu">
          <div className="user-header">
            <div className="avatar avatar-sm">
              <img
                src="/admin/assets/img/profiles/avatar-01.jpg"
                alt="usrImg"
                className="avatar-img rounded-circle"
              />
            </div>
            <div className="user-text">
              <h6>Ryan Taylor</h6>
              <p className="text-muted mb-0">Administrator</p>
            </div>
          </div>
          <a className="dropdown-item" href="profile">
            My Profile
          </a>
          <a className="dropdown-item" href="settings">
            Settings
          </a>
          <a  className="dropdown-item" href="../#">
            Logout
          </a>
        </div>
      </li>
    </ul>
  </div>
  <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title">
            <span>Main</span>
          </li>
          <li className="active">
            <a href="/admin/">
              <i className="fe fe-home" /> <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="appointments">
              <i className="fe fe-layout" /> <span>Appointments</span>
            </a>
          </li>
          <li>
            <a href="services">
              <i className="fe fe-users" /> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="doctors">
              <i className="fe fe-user-plus" /> <span>Doctors</span>
            </a>
          </li>
          <li>
            <a href="patients">
              <i className="fe fe-user" /> <span>Patients</span>
            </a>
          </li>
          <li>
            <a href="profile">
              <i className="fe fe-user-plus" /> <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="settings">
              <i className="fe fe-vector" /> <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Welcome Admin!</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item active">Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-primary border-primary">
                  <i className="fe fe-users" />
                </span>
                <div className="dash-count">
                  <h3>168</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Doctors</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-primary w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-success">
                  <i className="fe fe-credit-card" />
                </span>
                <div className="dash-count">
                  <h3>487</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Patients</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-success w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-danger border-danger">
                  <i className="fe fe-money" />
                </span>
                <div className="dash-count">
                  <h3>485</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Appointment</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-danger w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-warning border-warning">
                  <i className="fe fe-folder" />
                </span>
                <div className="dash-count">
                  <h3>$62523</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Revenue</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-warning w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="card card-chart">
            <div className="card-header">
              <h4 className="card-title">Revenue</h4>
            </div>
            <div className="card-body">
              <div id="morrisArea" />
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="card card-chart">
            <div className="card-header">
              <h4 className="card-title">Status</h4>
            </div>
            <div className="card-body">
              <div id="morrisLine" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex">
          <div className="card card-table flex-fill">
            <div className="card-header">
              <h4 className="card-title">Doctors List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Speciality</th>
                      <th>Earned</th>
                      <th>Reviews</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-01.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>$3200.00</td>
                      <td>
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star-o text-secondary" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-02.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Darren Elder</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>$3100.00</td>
                      <td>
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star-o text-secondary" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-03.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Deborah Angel</a>
                        </h2>
                      </td>
                      <td>Cardiology</td>
                      <td>$4000.00</td>
                      <td>
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star-o text-secondary" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-04.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Sofia Brient</a>
                        </h2>
                      </td>
                      <td>Urology</td>
                      <td>$3200.00</td>
                      <td>
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star-o text-secondary" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-05.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Marvin Campbell</a>
                        </h2>
                      </td>
                      <td>Orthopaedics</td>
                      <td>$3500.00</td>
                      <td>
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star-o text-secondary" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="card  card-table flex-fill">
            <div className="card-header">
              <h4 className="card-title">Patients List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Phone</th>
                      <th>Last Visit</th>
                      <th>Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient1.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>8286329170</td>
                      <td>20 Oct 2019</td>
                      <td className="text-end">$100.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient2.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Travis Trimble </a>
                        </h2>
                      </td>
                      <td>2077299974</td>
                      <td>22 Oct 2019</td>
                      <td className="text-end">$200.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient3.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Carl Kelly</a>
                        </h2>
                      </td>
                      <td>2607247769</td>
                      <td>21 Oct 2019</td>
                      <td className="text-end">$250.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient4.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile"> Michelle Fairfax</a>
                        </h2>
                      </td>
                      <td>5043686874</td>
                      <td>21 Sep 2019</td>
                      <td className="text-end">$150.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient5.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Gina Moore</a>
                        </h2>
                      </td>
                      <td>9548207887</td>
                      <td>18 Sep 2019</td>
                      <td className="text-end">$350.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Appointment List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Speciality</th>
                      <th>Patient Name</th>
                      <th>Apointment Time</th>
                      <th>Status</th>
                      <th className="text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-01.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient1.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>
                        9 Nov 2019{" "}
                        <span className="text-primary d-block">
                          11.00 AM - 11.15 AM
                        </span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_1"
                            className="check"
                            defaultChecked=""
                          />
                          <label htmlFor="status_1" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-end">$200.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-02.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Darren Elder</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient2.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Travis Trimble </a>
                        </h2>
                      </td>
                      <td>
                        5 Nov 2019{" "}
                        <span className="text-primary d-block">
                          11.00 AM - 11.35 AM
                        </span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_2"
                            className="check"
                            defaultChecked=""
                          />
                          <label htmlFor="status_2" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-end">$300.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-03.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Deborah Angel</a>
                        </h2>
                      </td>
                      <td>Cardiology</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient3.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Carl Kelly</a>
                        </h2>
                      </td>
                      <td>
                        11 Nov 2019{" "}
                        <span className="text-primary d-block">
                          12.00 PM - 12.15 PM
                        </span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_3"
                            className="check"
                            defaultChecked=""
                          />
                          <label htmlFor="status_3" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-end">$150.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-04.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Sofia Brient</a>
                        </h2>
                      </td>
                      <td>Urology</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient4.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile"> Michelle Fairfax</a>
                        </h2>
                      </td>
                      <td>
                        7 Nov 2019
                        <span className="text-primary d-block">
                          1.00 PM - 1.20 PM
                        </span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_4"
                            className="check"
                            defaultChecked=""
                          />
                          <label htmlFor="status_4" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-end">$150.00</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/doctors/doctor-thumb-05.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Marvin Campbell</a>
                        </h2>
                      </td>
                      <td>Orthopaedics</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src="/admin/assets/img/patients/patient5.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Gina Moore</a>
                        </h2>
                      </td>
                      <td>
                        15 Nov 2019{" "}
                        <span className="text-primary d-block">
                          1.00 PM - 1.15 PM
                        </span>
                      </td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_5"
                            className="check"
                            defaultChecked=""
                          />
                          <label htmlFor="status_5" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="text-end">$200.00</td>
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
export default Home;