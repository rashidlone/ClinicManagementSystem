import React from "react";

class Appointments extends React.Component{

    render(){

        return (

         <div>
  <head> <title>Patients</title></head>
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
    <a href="/#;" id="toggle_btn">
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
    <a  href="/#" className="mobile_btn" id="mobile_btn">
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
          <li className="active">
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
            <h3 className="page-title">List of Patient</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <div className="table-responsive">
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Last Visit</th>
                        <th className="text-end">Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#PT001</td>
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
                        <td>29</td>
                        <td>
                          4417 Goosetown Drive, Taylorsville, North Carolina,
                          28681
                        </td>
                        <td>8286329170</td>
                        <td>20 Oct 2019</td>
                        <td className="text-end">$100.00</td>
                      </tr>
                      <tr>
                        <td>#PT002</td>
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
                        <td>23</td>
                        <td>4026 Fantages Way, Brunswick, Maine, 04011</td>
                        <td>2077299974</td>
                        <td>22 Oct 2019</td>
                        <td className="text-end">$200.00</td>
                      </tr>
                      <tr>
                        <td>#PT003</td>
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
                        <td>29</td>
                        <td>2037 Pearcy Avenue, Decatur, Indiana, 46733</td>
                        <td>2607247769</td>
                        <td>21 Oct 2019</td>
                        <td className="text-end">$250.00</td>
                      </tr>
                      <tr>
                        <td>#PT004</td>
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
                        <td>25</td>
                        <td>2037 Pearcy Avenue, Decatur, Indiana, 46733</td>
                        <td>5043686874</td>
                        <td>21 Sep 2019</td>
                        <td className="text-end">$150.00</td>
                      </tr>
                      <tr>
                        <td>#PT005</td>
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
                        <td>23</td>
                        <td>888 Everette Alley, Hialeah, Florida, 33012</td>
                        <td>9548207887</td>
                        <td>18 Sep 2019</td>
                        <td className="text-end">$350.00</td>
                      </tr>
                      <tr>
                        <td>#PT006</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient6.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile">Elsie Gilley</a>
                          </h2>
                        </td>
                        <td>16</td>
                        <td>
                          644 Coffman Alley, Bowling Green, Kentucky, 42101
                        </td>
                        <td>3153844562</td>
                        <td>18 Sep 2019</td>
                        <td className="text-end">$300.00</td>
                      </tr>
                      <tr>
                        <td>#PT007</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient7.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile"> Joan Gardner</a>
                          </h2>
                        </td>
                        <td>25</td>
                        <td>
                          2399 Hillview Drive, San Francisco, California, 94103
                        </td>
                        <td>7072202603</td>
                        <td>18 Sep 2019</td>
                        <td className="text-end">$250.00</td>
                      </tr>
                      <tr>
                        <td>#PT008</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient8.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile"> Daniel Griffing</a>
                          </h2>
                        </td>
                        <td>21</td>
                        <td>
                          4914 Hilltop Haven Drive, Passaic, New Jersey, 07055
                        </td>
                        <td>9737739497</td>
                        <td>7 Sep 2019</td>
                        <td className="text-end">$150.00</td>
                      </tr>
                      <tr>
                        <td>#PT009</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient9.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile">Walter Roberson</a>
                          </h2>
                        </td>
                        <td>18</td>
                        <td>
                          1299 Star Trek Drive, Panama City, Florida, 32405
                        </td>
                        <td>8503584445</td>
                        <td>11 Sep 2019</td>
                        <td className="text-end">$100.00</td>
                      </tr>
                      <tr>
                        <td>#PT010</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient10.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile">Robert Rhodes</a>
                          </h2>
                        </td>
                        <td>19</td>
                        <td>1214 Hamill Avenue, Del Mar, California, 92014</td>
                        <td>8582595285</td>
                        <td>12 Sep 2019</td>
                        <td className="text-end">$120.00</td>
                      </tr>
                      <tr>
                        <td>#PT011</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient11.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile">Harry Williams</a>
                          </h2>
                        </td>
                        <td>9</td>
                        <td>4566 Sampson Street, Denver, Colorado, 80202</td>
                        <td>3036077075</td>
                        <td>14 Sep 2019</td>
                        <td className="text-end">$130.00</td>
                      </tr>
                      <tr>
                        <td>#PT012</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient12.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile">Robert Johnston</a>
                          </h2>
                        </td>
                        <td>29</td>
                        <td>1996 Crummit Lane, Beatrice, Nebraska, 68310</td>
                        <td>4022231492</td>
                        <td>7 Nov 2019</td>
                        <td className="text-end">$260.00</td>
                      </tr>
                      <tr>
                        <td>#PT013</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient13.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile">Tracy Mason</a>
                          </h2>
                        </td>
                        <td>32</td>
                        <td>4211 Vesta Drive, TOLEDO, Washington, 98591</td>
                        <td>7737265795</td>
                        <td>9 Nov 2019</td>
                        <td className="text-end">$290.00</td>
                      </tr>
                      <tr>
                        <td>#PT014</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient14.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile"> Daniel Finch</a>
                          </h2>
                        </td>
                        <td>23</td>
                        <td>
                          186 Bryan Street, Greensboro, North Carolina, 27409
                        </td>
                        <td>3362314023</td>
                        <td>5 Nov 2019</td>
                        <td className="text-end">$300.00</td>
                      </tr>
                      <tr>
                        <td>#PT015</td>
                        <td>
                          <h2 className="table-avatar">
                            <a
                              href="profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/patients/patient15.jpg"
                                alt="usrImg"
                              />
                            </a>
                            <a href="profile">Jessica Garza</a>
                          </h2>
                        </td>
                        <td>10</td>
                        <td>4672 Rose Street, Schaumburg, Illinois, 60173</td>
                        <td>7082788201</td>
                        <td>6 Nov 2019</td>
                        <td className="text-end">$310.00</td>
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


        );
        
    }
}
export default Appointments;