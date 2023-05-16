import React from "react";
import Head from '../pages/Head'

class AllDoctors extends React.Component{

    render(){

        return (

         <div>

          <Head/>

<div className="main-wrapper">
  <div className="doctor-content content">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 map-view">
          <div className="row">
            <div className="col-lg-3  theiaStickySidebar">
              <div className="filter-contents">
                <div className="filter-header">
                  <h4 className="filter-title">Filter</h4>
                </div>
                <div className="filter-details">
                  <div className="filter-grid">
                    <h4>
                      <a href="#collapseone" data-bs-toggle="collapse">
                        Gender
                      </a>
                    </h4>
                    <div id="collapseone" className="collapse show">
                      <div className="filter-collapse">
                        <ul>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="gender" />
                              <span className="checkmark" />
                              Male Gender
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="gender" />
                              <span className="checkmark" />
                              Female Gender
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="filter-grid">
                    <h4>
                      <a href="#collapsetwo" data-bs-toggle="collapse">
                        Availability
                      </a>
                    </h4>
                    <div id="collapsetwo" className="collapse show">
                      <div className="filter-collapse">
                        <ul>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="availability" />
                              <span className="checkmark" />
                              Available Today
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="availability" />
                              <span className="checkmark" />
                              Available Tomorrow
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="availability" />
                              <span className="checkmark" />
                              Available in Next 7 Days
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="availability" />
                              <span className="checkmark" />
                              Available in Next 30 Days
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="filter-grid">
                    <h4>
                      <a href="#collapsethree" data-bs-toggle="collapse">
                        Consultation Fee
                      </a>
                    </h4>
                    <div id="collapsethree" className="collapse show">
                      <div className="filter-collapse">
                        <div className="filter-content filter-content-slider">
                          <p>
                            $10 <span>$10000</span>
                          </p>
                          <div className="slider-wrapper">
                            <div id="price-range" />
                          </div>
                          <div className="price-wrapper">
                            <h6>
                              Price:
                              <span>
                                $<span id="pricerangemin" />
                                - $<span id="pricerangemax" />
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-grid">
                    <h4>
                      <a href="#collapsefour" data-bs-toggle="collapse">
                        Speciality
                      </a>
                    </h4>
                    <div id="collapsefour" className="collapse show">
                      <div className="filter-collapse">
                        <ul>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="speciality" />
                              <span className="checkmark" />
                              Urology
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="speciality" />
                              <span className="checkmark" />
                              Ophthalmology
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="speciality" />
                              <span className="checkmark" />
                              Cardiology
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="filter-grid">
                    <h4>
                      <a href="#collapsefive" data-bs-toggle="collapse">
                        Experience
                      </a>
                    </h4>
                    <div id="collapsefive" className=" collapse show">
                      <div className="filter-collapse">
                        <ul>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="experience" />
                              <span className="checkmark" />
                              1-5 Years
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="experience" />
                              <span className="checkmark" />
                              5+ Years
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="filter-grid">
                    <h4>
                      <a href="#collapsesix" data-bs-toggle="collapse">
                        Online Consultation
                      </a>
                    </h4>
                    <div id="collapsesix" className="collapse show">
                      <div className="filter-collapse">
                        <ul>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="online" />
                              <span className="checkmark" />
                              <i className="feather-video online-icon" /> Video
                              Call
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="online" />
                              <span className="checkmark" />
                              <i className="feather-mic online-icon" /> Audio
                              Call
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="online" />
                              <span className="checkmark" />
                              <i className="feather-message-square online-icon" />{" "}
                              Chat
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="online" />
                              <span className="checkmark" />
                              <i className="feather-users online-icon" />{" "}
                              Instant Consulting
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="filter-grid">
                    <h4>
                      <a href="#collapseseven" data-bs-toggle="collapse">
                        By Rating
                      </a>
                    </h4>
                    <div id="collapseseven" className="collapse show">
                      <div className="filter-collapse">
                        <ul>
                          <li>
                            <label className="custom_check rating_custom_check d-inline-flex">
                              <input type="checkbox" name="online" />
                              <span className="checkmark" />
                              <div className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span className="rating-count">(40)</span>
                              </div>
                            </label>
                          </li>
                          <li>
                            <label className="custom_check rating_custom_check d-inline-flex">
                              <input type="checkbox" name="online" />
                              <span className="checkmark" />
                              <div className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span className="rating-count">(35)</span>
                              </div>
                            </label>
                          </li>
                          <li>
                            <label className="custom_check rating_custom_check d-inline-flex">
                              <input type="checkbox" name="online" />
                              <span className="checkmark" />
                              <div className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="rating-count">(20)</span>
                              </div>
                            </label>
                          </li>
                          <li>
                            <label className="custom_check rating_custom_check d-inline-flex">
                              <input type="checkbox" name="online" />
                              <span className="checkmark" />
                              <div className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="rating-count">(10)</span>
                              </div>
                            </label>
                          </li>
                          <li>
                            <label className="custom_check rating_custom_check d-inline-flex">
                              <input type="checkbox" name="online" />
                              <span className="checkmark" />
                              <div className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="rating-count">(05)</span>
                              </div>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="filter-grid">
                    <h4>
                      <a href="#collapseeight" data-bs-toggle="collapse">
                        Languages
                      </a>
                    </h4>
                    <div id="collapseeight" className="collapse show">
                      <div className="filter-collapse">
                        <ul>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="language" />
                              <span className="checkmark" />
                              English
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="language" />
                              <span className="checkmark" />
                              French
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="language" />
                              <span className="checkmark" />
                              Spanish
                            </label>
                          </li>
                          <li>
                            <label className="custom_check d-inline-flex">
                              <input type="checkbox" name="language" />
                              <span className="checkmark" />
                              German
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="filter-btn apply-btn">
                    <div className="row">
                      <div className="col-6">
                        <a
                          href="/#"
                          className="btn btn-primary"
                        >
                          Apply
                        </a>
                      </div>
                      <div className="col-6">
                        <a
                          href="/#"
                          className="btn btn-outline-primary"
                        >
                          Reset
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="doctor-filter-info">
                <div className="doctor-filter-inner">
                  <div>
                    <div className="doctor-filter-availability">
                      <p>Availability</p>
                      <div className="status-toggle status-tog">
                        <input
                          type="checkbox"
                          id="status_6"
                          className="check"
                        />
                        <label htmlFor="status_6" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="doctor-filter-option">
                    <div className="doctor-filter-sort">
                      <p>Sort</p>
                      <div className="doctor-filter-select">
                        <select className="select">
                          <option>A to Z</option>
                          <option>B to Z</option>
                          <option>C to Z</option>
                          <option>D to Z</option>
                          <option>E to Z</option>
                        </select>
                      </div>
                    </div>
                    <div className="doctor-filter-sort">
                      <p className="filter-today d-flex align-items-center">
                        <i className="feather-calendar" /> Today 10 Aug to 20
                        Aug
                      </p>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="card doctor-card">
                <div className="card-body">
                  <div className="doctor-widget-one">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile">
                          <img
                            src="assets/img/doctors/doctor-13.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="favourite-btn">
                          <a
                            href="/#"
                            className="favourite-icon"
                          >
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile">Dr.John Doe</a>
                          <i className="fas fa-circle-check" />
                        </h4>
                        <p className="doc-speciality">MBBS, Dentist</p>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="feather-map-pin" />
                            <span>0.9</span> mi - Newyork, USA{" "}
                            <a href="/#">Get Direction</a>
                          </p>
                          <p className="doc-location">
                            <i className="feather-award" /> <span>20</span>{" "}
                            Years of Experience
                          </p>
                        </div>
                        <div className="reviews-ratings">
                          <p>
                            <span>
                              <i className="fas fa-star" /> 4.5
                            </span>{" "}
                            (35 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="feather-clock available-icon" />
                            <span className="available-date available-today">
                              Available Today
                            </span>
                          </li>
                          <li>
                            <i className="feather-thumbs-up available-icon" />{" "}
                            98% <span className="votes">(252 Votes)</span>
                          </li>
                          <li>
                            <i className="feather-dollar-sign available-icon" />{" "}
                            $1500{" "}
                            <i className="feather-info available-info-icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking book-appoint">
                        <a className="btn btn-primary" href="booking">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card doctor-card">
                <div className="card-body">
                  <div className="doctor-widget-one">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile">
                          <img
                            src="assets/img/doctors/doctor-14.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="favourite-btn">
                          <a
                            href="/#"
                            className="favourite-icon"
                          >
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile">Dr. Darren Elder</a>
                          <i className="fas fa-circle-check" />
                        </h4>
                        <p className="doc-speciality">
                          BDS, MDS - Oral &amp; Maxillofacial Surgery
                        </p>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="feather-map-pin" />
                            1.1 mi - Georgia, USA{" "}
                            <a href="/#">Get Direction</a>
                          </p>
                          <p className="doc-location">
                            <i className="feather-award" /> 15 Years of
                            Experience
                          </p>
                        </div>
                        <div className="reviews-ratings">
                          <p>
                            <span>
                              <i className="fas fa-star" /> 4.3
                            </span>{" "}
                            (22 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="feather-clock available-icon" />
                            <span className="available-date available-tomorrow">
                              Available Tomorrow
                            </span>
                          </li>
                          <li>
                            <i className="feather-thumbs-up available-icon" />{" "}
                            90% <span className="votes">(380 Votes)</span>
                          </li>
                          <li>
                            <i className="feather-dollar-sign available-icon" />{" "}
                            $2800{" "}
                            <i className="feather-info available-info-icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking book-appoint">
                        <a className="btn btn-primary" href="booking">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card doctor-card">
                <div className="card-body">
                  <div className="doctor-widget-one">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile">
                          <img
                            src="assets/img/doctors/doctor-15.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="favourite-btn">
                          <a
                            href="/#"
                            className="favourite-icon"
                          >
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile">Dr. Sofia Brient</a>
                          <i className="fas fa-circle-check" />
                        </h4>
                        <p className="doc-speciality">MBBS, Dentist</p>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="feather-map-pin" />
                            <span>0.9</span> mi - Newyork, USA{" "}
                            <a href="/#">Get Direction</a>
                          </p>
                          <p className="doc-location">
                            <i className="feather-award" /> <span>20</span>{" "}
                            Years of Experience
                          </p>
                        </div>
                        <div className="reviews-ratings">
                          <p>
                            <span>
                              <i className="fas fa-star" /> 4.5
                            </span>{" "}
                            (35 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="feather-clock available-icon" />
                            <span className="available-date available-today">
                              Available Today
                            </span>
                          </li>
                          <li>
                            <i className="feather-thumbs-up available-icon" />{" "}
                            98% <span className="votes">(252 Votes)</span>
                          </li>
                          <li>
                            <i className="feather-dollar-sign available-icon" />{" "}
                            $1500{" "}
                            <i className="feather-info available-info-icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking book-appoint">
                        <a className="btn btn-primary" href="booking">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card doctor-card">
                <div className="card-body">
                  <div className="doctor-widget-one">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile">
                          <img
                            src="assets/img/doctors/doctor-16.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="favourite-btn">
                          <a
                            href="/#"
                            className="favourite-icon"
                          >
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile">Dr. Johny Rita</a>
                          <i className="fas fa-circle-check" />
                        </h4>
                        <p className="doc-speciality">MBBS, Dentist</p>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="feather-map-pin" />
                            <span>0.9</span> mi - Newyork, USA{" "}
                            <a href="/#">Get Direction</a>
                          </p>
                          <p className="doc-location">
                            <i className="feather-award" /> <span>20</span>{" "}
                            Years of Experience
                          </p>
                        </div>
                        <div className="reviews-ratings">
                          <p>
                            <span>
                              <i className="fas fa-star" /> 4.5
                            </span>{" "}
                            (35 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="feather-clock available-icon" />
                            <span className="available-date available-today">
                              Available Today
                            </span>
                          </li>
                          <li>
                            <i className="feather-thumbs-up available-icon" />{" "}
                            98% <span className="votes">(252 Votes)</span>
                          </li>
                          <li>
                            <i className="feather-dollar-sign available-icon" />{" "}
                            $1500{" "}
                            <i className="feather-info available-info-icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking book-appoint">
                        <a className="btn btn-primary" href="booking">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card doctor-card">
                <div className="card-body">
                  <div className="doctor-widget-one">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <a href="doctor-profile">
                          <img
                            src="assets/img/doctors/doctor-17.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                        <div className="favourite-btn">
                          <a
                            href="/#"
                            className="favourite-icon"
                          >
                            <i className="fas fa-heart" />
                          </a>
                        </div>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile">Dr. Deborah Angel</a>
                          <i className="fas fa-circle-check" />
                        </h4>
                        <p className="doc-speciality">MBBS, Dentist</p>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="feather-map-pin" />
                            <span>0.9</span> mi - Newyork, USA{" "}
                            <a href="/#">Get Direction</a>
                          </p>
                          <p className="doc-location">
                            <i className="feather-award" /> <span>20</span>{" "}
                            Years of Experience
                          </p>
                        </div>
                        <div className="reviews-ratings">
                          <p>
                            <span>
                              <i className="fas fa-star" /> 4.5
                            </span>{" "}
                            (35 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <i className="feather-clock available-icon" />
                            <span className="available-date available-today">
                              Available Today
                            </span>
                          </li>
                          <li>
                            <i className="feather-thumbs-up available-icon" />{" "}
                            98% <span className="votes">(252 Votes)</span>
                          </li>
                          <li>
                            <i className="feather-dollar-sign available-icon" />{" "}
                            $1500{" "}
                            <i className="feather-info available-info-icon" />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking book-appoint">
                        <a className="btn btn-primary" href="booking">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="blog-pagination rev-page">
                    <nav>
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a
                            className="page-link page-prev"
                            href="/#"
                            tabIndex={-1}
                          >
                            <i className="feather-chevrons-left me-1" /> PREV
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="/#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            ...
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            10
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link page-next" href="/#">
                            NEXT <i className="feather-chevrons-right ms-1" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-12 theiaStickySidebar map-right">
          <div id="map" className="map-listing" />
        </div>
      </div>
    </div>
  </div>
  <div className="mouse-cursor cursor-outer" />
  <div className="mouse-cursor cursor-inner" />
</div>





         </div>


        );
        
    }
}
export default AllDoctors;