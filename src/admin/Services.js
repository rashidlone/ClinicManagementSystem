import React from "react";

class Appointments extends React.Component{

    render(){

        return (

         <div>
  <head> <title>Services</title></head>
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
          <li className="active">
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
          <div className="col-sm-7 col-auto">
            <h3 className="page-title">Specialities</h3>
          </div>
          <div className="col-sm-5 col">
            <a
              href="#Add_Specialities_details"
              data-bs-toggle="modal"
              className="btn btn-primary float-end mt-2"
            >
              Add
            </a>
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
                      <th>#</th>
                      <th>Specialities</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#SP001</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src="/admin/assets/img/specialities/specialities-01.png"
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile">Urology</a>
                        </h2>
                      </td>
                      <td className="text-end">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-bs-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil" /> Edit
                          </a>
                          <a
                            data-bs-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash" /> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#SP002</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src="/admin/assets/img/specialities/specialities-02.png"
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile">Neurology</a>
                        </h2>
                      </td>
                      <td className="text-end">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-bs-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil" /> Edit
                          </a>
                          <a
                            data-bs-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash" /> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#SP003</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src="/admin/assets/img/specialities/specialities-03.png"
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile">Orthopedic</a>
                        </h2>
                      </td>
                      <td className="text-end">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-bs-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil" /> Edit
                          </a>
                          <a
                            data-bs-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash" /> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#SP004</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src="/admin/assets/img/specialities/specialities-04.png"
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile">Cardiologist</a>
                        </h2>
                      </td>
                      <td className="text-end">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-bs-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil" /> Edit
                          </a>
                          <a
                            data-bs-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash" /> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#SP005</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile"
                            className="avatar avatar-sm me-2"
                          >
                            <img
                              className="avatar-img"
                              src="/admin/assets/img/specialities/specialities-05.png"
                              alt="Speciality"
                            />
                          </a>
                          <a href="profile">Dentist</a>
                        </h2>
                      </td>
                      <td className="text-end">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-bs-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil" /> Edit
                          </a>
                          <a
                            className="btn btn-sm bg-danger-light"
                            data-bs-toggle="modal"
                            href="#delete_modal"
                          >
                            <i className="fe fe-trash" /> Delete
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
  <div
    className="modal fade"
    id="Add_Specialities_details"
    aria-hidden="true"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Specialities</h5>
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
                  <label>Specialities</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Image</label>
                  <input type="file" className="form-control" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="edit_specialities_details"
    aria-hidden="true"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Specialities</h5>
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
                  <label>Specialities</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Cardiology"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Image</label>
                  <input type="file" className="form-control" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="delete_modal"
    aria-hidden="true"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="form-content p-2">
            <h4 className="modal-title">Delete</h4>
            <p className="mb-4">Are you sure want to delete?</p>
            <button type="button" className="btn btn-primary">
              Save{" "}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
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