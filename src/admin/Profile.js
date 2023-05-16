import React from "react";

class Appointments extends React.Component{

    render(){

        return (

         <div>
  <head> <title>Profile</title></head>
<div className="main-wrapper">
  <div className="header">
    <div className="header-left">
      <a href="/assets/" className="logo">
        <img src="/admin/assets/img/logo.png" alt="Logo" />
      </a>
      <a href="/assets/" className="logo logo-small">
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
            <a href="/assets/">
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
          <li className="active">
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
          <div className="col">
            <h3 className="page-title">Profile</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="profile-header">
            <div className="row align-items-center">
              <div className="col-auto profile-image">
                <a href="/#">
                  <img
                    className="rounded-circle"
                    alt="usrImg"
                    src="/admin/assets/img/profiles/avatar-01.jpg"
                  />
                </a>
              </div>
              <div className="col ml-md-n2 profile-user-info">
                <h4 className="user-name mb-0">Ryan Taylor</h4>
                <h6 className="text-muted">
                  <a
                    href="https://doccure.dreamguystech.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="dcaea5bdb2a8bda5b0b3ae9cbdb8b1b5b2f2bfb3b1"
                  >
                    [email&nbsp;protected]
                  </a>
                </h6>
                <div className="user-Location">
                  <i className="fa fa-map-marker" /> Florida, United States
                </div>
                <div className="about-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className="col-auto profile-btn">
                <a href="/#" className="btn btn-primary">
                  Edit
                </a>
              </div>
            </div>
          </div>
          <div className="profile-menu">
            <ul className="nav nav-tabs nav-tabs-solid">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#per_details_tab"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#password_tab"
                >
                  Password
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content profile-tab-cont">
            <div className="tab-pane fade show active" id="per_details_tab">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title d-flex justify-content-between">
                        <span>Personal Details</span>
                        <a
                          className="edit-link"
                          data-bs-toggle="modal"
                          href="#edit_personal_details"
                        >
                          <i className="fa fa-edit me-1" />
                          Edit
                        </a>
                      </h5>
                      <div className="row">
                        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">
                          Name
                        </p>
                        <p className="col-sm-10">John Doe</p>
                      </div>
                      <div className="row">
                        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">
                          Date of Birth
                        </p>
                        <p className="col-sm-10">24 Jul 1983</p>
                      </div>
                      <div className="row">
                        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">
                          Email ID
                        </p>
                        <p className="col-sm-10">
                          <a
                            href="https://doccure.dreamguystech.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="22484d4a4c464d4762475a434f524e470c414d4f"
                          >
                            [email&nbsp;protected]
                          </a>
                        </p>
                      </div>
                      <div className="row">
                        <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">
                          Mobile
                        </p>
                        <p className="col-sm-10">305-310-5857</p>
                      </div>
                      <div className="row">
                        <p className="col-sm-2 text-muted text-sm-end mb-0">
                          Address
                        </p>
                        <p className="col-sm-10 mb-0">
                          4663 Agriculture Lane,
                          <br />
                          Miami,
                          <br />
                          Florida - 33165,
                          <br />
                          United States.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="edit_personal_details"
                    aria-hidden="true"
                    role="dialog"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Personal Details</h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row form-row">
                              <div className="col-12 col-sm-6">
                                <div className="form-group">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="John"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6">
                                <div className="form-group">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Doe"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
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
                              <div className="col-12 col-sm-6">
                                <div className="form-group">
                                  <label>Email ID</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    defaultValue="johndoe@example.com"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6">
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
                                <h5 className="form-title">
                                  <span>Address</span>
                                </h5>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label>Address</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="4663 Agriculture Lane"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6">
                                <div className="form-group">
                                  <label>City</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Miami"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6">
                                <div className="form-group">
                                  <label>State</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Florida"
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6">
                                <div className="form-group">
                                  <label>Zip Code</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={22434}
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-6">
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
                            <button
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Save Changes
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="password_tab" className="tab-pane fade">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Change Password</h5>
                  <div className="row">
                    <div className="col-md-10 col-lg-6">
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
                        <button className="btn btn-primary" type="submit">
                          Save Changes
                        </button>
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
</div>


        </div> 


        );
        
    }
}
export default Appointments;