import React from "react";

class DoctorProfileSettings extends React.Component{

    render(){

        return (

         <div>


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
                  <li className="active">
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
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic Information</h4>
              <div className="row form-row">
                <div className="col-md-12">
                  <div className="form-group">
                    <div className="change-avatar">
                      <div className="profile-img">
                        <img
                          src="assets/img/doctors/doctor-thumb-02.jpg"
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
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Username <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" readOnly="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Email <span className="text-danger">*</span>
                    </label>
                    <input type="email" className="form-control" readOnly="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <select className="form-select form-control">
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-0">
                    <label>Date of Birth</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">About Me</h4>
              <div className="form-group mb-0">
                <label>Biography</label>
                <textarea className="form-control" rows={5} defaultValue={""} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Clinic Info</h4>
              <div className="row form-row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Clinic Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Clinic Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Clinic Images</label>
                    <form action="/#" className="dropzone" />
                  </div>
                  <div className="upload-wrap">
                    <div className="upload-images">
                      <img
                        src="assets/img/features/feature-01.jpg"
                        alt="UploadImage"
                      />
                      <a
                        href="/#"
                        className="btn btn-icon btn-danger btn-sm"
                      >
                        <i className="far fa-trash-alt" />
                      </a>
                    </div>
                    <div className="upload-images">
                      <img
                        src="assets/img/features/feature-02.jpg"
                        alt="uploadImage"
                      />
                      <a
                        href="/#"
                        className="btn btn-icon btn-danger btn-sm"
                      >
                        <i className="far fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card ">
            <div className="card-body">
              <h4 className="card-title">Contact Details</h4>
              <div className="row form-row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Address Line 1</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">Address Line 2</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">City</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">State / Province</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">Country</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">Postal Code</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Pricing</h4>
              <div className="form-group mb-0">
                <div id="pricing_select">
                  <div className="custom-control form-check custom-control-inline">
                    <input
                      type="radio"
                      id="price_free"
                      name="rating_option"
                      className="form-check-input"
                      defaultValue="price_free"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="price_free">
                      Free
                    </label>
                  </div>
                  <div className="custom-control form-check custom-control-inline">
                    <input
                      type="radio"
                      id="price_custom"
                      name="rating_option"
                      defaultValue="custom_price"
                      className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="price_custom">
                      Custom Price (per hour)
                    </label>
                  </div>
                </div>
              </div>
              <div
                className="row custom_price_cont"
                id="custom_price_cont"
                style={{ display: "none" }}
              >
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="custom_rating_input"
                    name="custom_rating_count"
                    defaultValue=""
                    placeholder={20}
                  />
                  <small className="form-text text-muted">
                    Custom price you can add
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="card services-card">
            <div className="card-body">
              <h4 className="card-title">Services and Specialization</h4>
              <div className="form-group">
                <label>Services</label>
                <input
                  type="text"
                  data-role="tagsinput"
                  className="input-tags form-control"
                  placeholder="Enter Services"
                  name="services"
                  defaultValue="Tooth cleaning "
                  id="services"
                />
                <small className="form-text text-muted">
                  Note : Type &amp; Press enter to add new services
                </small>
              </div>
              <div className="form-group mb-0">
                <label>Specialization </label>
                <input
                  className="input-tags form-control"
                  type="text"
                  data-role="tagsinput"
                  placeholder="Enter Specialization"
                  name="specialist"
                  defaultValue="Children Care,Dental Care"
                  id="specialist"
                />
                <small className="form-text text-muted">
                  Note : Type &amp; Press enter to add new specialization
                </small>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Education</h4>
              <div className="education-info">
                <div className="row form-row education-cont">
                  <div className="col-12 col-md-10 col-lg-11">
                    <div className="row form-row">
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>Degree</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>College/Institute</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>Year of Completion</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-more">
                <a href="/#" className="add-education">
                  <i className="fa fa-plus-circle" /> Add More
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Experience</h4>
              <div className="experience-info">
                <div className="row form-row experience-cont">
                  <div className="col-12 col-md-10 col-lg-11">
                    <div className="row form-row">
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>Hospital Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>From</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>To</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="form-group">
                          <label>Designation</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-more">
                <a href="/#" className="add-experience">
                  <i className="fa fa-plus-circle" /> Add More
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Awards</h4>
              <div className="awards-info">
                <div className="row form-row awards-cont">
                  <div className="col-12 col-md-5">
                    <div className="form-group">
                      <label>Awards</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="form-group">
                      <label>Year</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-more">
                <a href="/#" className="add-award">
                  <i className="fa fa-plus-circle" /> Add More
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Memberships</h4>
              <div className="membership-info">
                <div className="row form-row membership-cont">
                  <div className="col-12 col-md-10 col-lg-5">
                    <div className="form-group">
                      <label>Memberships</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-more">
                <a href="/#" className="add-membership">
                  <i className="fa fa-plus-circle" /> Add More
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Registrations</h4>
              <div className="registrations-info">
                <div className="row form-row reg-cont">
                  <div className="col-12 col-md-5">
                    <div className="form-group">
                      <label>Registrations</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="form-group">
                      <label>Year</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-more">
                <a href="/#" className="add-reg">
                  <i className="fa fa-plus-circle" /> Add More
                </a>
              </div>
            </div>
          </div>
          <div className="submit-section submit-btn-bottom">
            <button type="submit" className="btn btn-primary prime-btn">
              Save Changes
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
export default DoctorProfileSettings;