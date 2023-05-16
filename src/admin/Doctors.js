import React from "react";

class Doctors extends React.Component{

    render(){

        return (

         <div>
            <head> <title>Doctors</title></head>

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
        <a href="/#"
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
          <a className="dropdown-item" href="../#">
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
          <li>
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
          <li className="active">
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
            <h3 className="page-title">List of Doctors</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="datatable table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Speciality</th>
                      <th>Member Since</th>
                      <th>Earned</th>
                      <th>Account Status</th>
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
                        14 Jan 2019 <br />
                        <small>02.59 AM</small>
                      </td>
                      <td>$3100.00</td>
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
                        11 Jun 2019 <br />
                        <small>4.50 AM</small>
                      </td>
                      <td>$5000.00</td>
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
                        4 Jan 2018 <br />
                        <small>9.40 AM</small>
                      </td>
                      <td>$3300.00</td>
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
                        5 Jul 2019 <br />
                        <small>12.59 AM</small>
                      </td>
                      <td>$3500.00</td>
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
                        24 Jan 2019 <br />
                        <small>02.59 AM</small>
                      </td>
                      <td>$3700.00</td>
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
                              src="/admin/assets/img/doctors/doctor-thumb-06.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Katharine Berthold</a>
                        </h2>
                      </td>
                      <td>Orthopaedics</td>
                      <td>
                        23 Mar 2019 <br />
                        <small>02.50 PM</small>
                      </td>
                      <td>$4000.00</td>
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
                              src="/admin/assets/img/doctors/doctor-thumb-07.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Linda Tobin</a>
                        </h2>
                      </td>
                      <td>Neurology</td>
                      <td>
                        14 Dec 2018 <br />
                        <small>01.59 AM</small>
                      </td>
                      <td>$2000.00</td>
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
                              src="/admin/assets/img/doctors/doctor-thumb-08.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Paul Richard</a>
                        </h2>
                      </td>
                      <td>Dermatology</td>
                      <td>
                        11 Jan 2019 <br />
                        <small>02.59 AM</small>
                      </td>
                      <td>$3000.00</td>
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
                              src="/admin/assets/img/doctors/doctor-thumb-09.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. John Gibbs</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        21 Apr 2018 <br />
                        <small>02.59 PM</small>
                      </td>
                      <td>$4100.00</td>
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
                              src="/admin/assets/img/doctors/doctor-thumb-10.jpg"
                              alt="usrImg"
                            />
                          </a>
                          <a href="profile">Dr. Olga Barlow</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        15 Feb 2018 <br />
                        <small>03.59 AM</small>
                      </td>
                      <td>$3500.00</td>
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
export default Doctors;