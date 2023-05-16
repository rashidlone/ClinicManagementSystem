import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from '../pages/Head'

class Home extends React.Component{

  constructor() {
    super();
  
  AOS.init({ duration : 1000});
  }
    render(){
  
        return (

          <div class="main-wrapper">

<Head />
          
          <section class="section section-search-2">
          <div class="container">
          <div class="row">
          <div class="col-md-6 aos" data-aos="fade-up">
          <img src="assets/img/banner-1.png" class="img-fluid search-img" alt=""/>
          </div>
          <div class="col-md-6 search-doctor aos" data-aos="fade-up">
          <div class="search-area bg-white">
          <h2 class="text-center">Book an Appointment</h2>
          <form>
          <div class="row">
          <div class="col-12 col-md-12">
          
          </div>
          
          <div class="col-12 col-md-12">
          <div class="form-group">
          <label>Department</label>
          <select class="form-select form-control">
          <option>Surgen</option>
          <option>Cardiologist</option>
          <option>Gynacologist</option>
          </select>
          </div>
          </div>
          
          <div class="col-12 col-md-12">
              <div class="form-group">
              <label>Doctor</label>
              <select class="form-select form-control">
              <option>Doctor 1</option>
              <option>Doctor 2</option>
              </select>
              </div>
              </div>

              <div class="col-12 col-md-12">
          <div class="form-group">
          <label>Time</label>
          <input type="datetime-local" class="form-control"/>
          </div>
          </div>


          <div class="col-12 col-md-12">
          <div class="form-group">
          <label>Phone</label>
          <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                  </div>
                  </div>
                  </div>

          
       </div>
          <div class="submit-section">
          <button type="submit" class="btn btn-primary search-btn submit-btn">Book Appointment</button>
          </div>
          </form>
          </div>
          </div>
          </div>
          </div>
          </section>
      
          <section className="section section-doctor">
  <div className="container-fluid">
    <div
      className="section-header text-center aos aos-init aos-animate"
      data-aos="fade-up"
    >
      <h2>Book Our Best Doctor</h2>
      <p className="sub-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="row">
      <div className="col-lg-12 aos aos-init aos-animate" data-aos="fade-up">
        <div className="doctor-slider slider slick-initialized slick-slider">
          
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: 40000,
                transform: "translate3d(-280px, 0px, 0px)"
              }}
            >
              <div
                className="slick-slide slick-cloned"
                data-slick-index={-1}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-08.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Paul Richard
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - Dermatology , Venereology &amp; Lepros
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (49)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> California,
                          USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={0}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-01.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={0}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={0}>
                          Ruby Perrin
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating">
                          (17)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Florida, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={0}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={0}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                data-slick-index={1}
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-02.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Darren Elder
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        BDS, MDS - Oral &amp; Maxillofacial Surgery
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (35)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $50 - $300{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                data-slick-index={2}
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-03.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Deborah Angel
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - General Medicine, DNB - Cardiology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (27)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                data-slick-index={3}
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-04.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Sofia Brient
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MS - General Surgery, MCh - Urology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (4)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Louisiana, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $150 - $250{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                data-slick-index={4}
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-05.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Marvin Campbell
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - Ophthalmology, DNB - Ophthalmology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (66)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Michigan, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $50 - $700{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                data-slick-index={5}
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-06.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Katharine Berthold
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (52)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Texas, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $500{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                data-slick-index={6}
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-07.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Linda Tobin
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - General Medicine, DM - Neurology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (43)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Kansas, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $1000{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                data-slick-index={7}
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-08.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Paul Richard
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - Dermatology , Venereology &amp; Lepros
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (49)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> California,
                          USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                data-slick-index={8}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-01.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Ruby Perrin
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating">
                          (17)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Florida, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                data-slick-index={9}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-02.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Darren Elder
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        BDS, MDS - Oral &amp; Maxillofacial Surgery
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (35)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $50 - $300{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                data-slick-index={10}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-03.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Deborah Angel
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - General Medicine, DNB - Cardiology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (27)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                data-slick-index={11}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-04.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Sofia Brient
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MS - General Surgery, MCh - Urology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (4)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Louisiana, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $150 - $250{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                data-slick-index={12}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-05.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Marvin Campbell
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - Ophthalmology, DNB - Ophthalmology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (66)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Michigan, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $50 - $700{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                data-slick-index={13}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-06.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Katharine Berthold
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (52)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Texas, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $500{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                data-slick-index={14}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-07.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Linda Tobin
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - General Medicine, DM - Neurology
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (43)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> Kansas, USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $1000{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-cloned"
                data-slick-index={15}
                id=""
                aria-hidden="true"
                tabIndex={-1}
              >
                <div>
                  <div
                    className="profile-widget"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="doc-img">
                      <a href="doctor-profile" tabIndex={-1}>
                        <img
                          className="img-fluid"
                          alt="UserImage"
                          src="assets/img/doctors/doctor-08.jpg"
                        />
                      </a>
                      <a
                        href="/#"
                        className="fav-btn"
                        tabIndex={-1}
                      >
                        {" "}
                        <i className="far fa-bookmark" />
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile" tabIndex={-1}>
                          Paul Richard
                        </a>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - Dermatology , Venereology &amp; Lepros
                      </p>
                      <div className="rating">
                        {" "}
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (49)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          {" "}
                          <i className="fas fa-map-marker-alt" /> California,
                          USA
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          {" "}
                          <i className="far fa-money-bill-alt" /> $100 - $400{" "}
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            aria-label="Lorem Ipsum"
                            data-bs-original-title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          {" "}
                          <a
                            href="doctor-profile"
                            className="btn view-btn"
                            tabIndex={-1}
                          >
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          {" "}
                          <a
                            href="booking"
                            className="btn book-btn"
                            tabIndex={-1}
                          >
                            Book Now
                          </a>
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
          </section>




          <section id="services" style={{ marginTop: "-8%" }} class="section section-blogs">
          <div class="container-fluid">
          
          <div class="section-header text-center aos" data-aos="fade-up">
          <h2>Services</h2>
          <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         
          </div>
          
          <div class="row blog-grid-row">
          <div class="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
          
          <div class="blog grid-blog">
          <div class="blog-image">
          <a href="blog-details">
          <img class="img-fluid" src="assets/img/blog/blog-06.jpg" alt="PostImage"/>
          </a>
          </div>
          <div class="blog-content">
          <ul class="entry-meta meta-item">
          <li>
          <div class="post-author">
          <a href="doctor-profile">
          <img src="assets/img/doctors/doctor-thumb-01.jpg" alt="Post Author"/> <span>Service 1</span>
          </a>
          </div>
          </li>
          <li> <i className="far fa-money-bill-alt" /> $300</li>
          </ul>

          <div class="text-center"> 
          <a href="buy" class="btn btn-primary">
            Buy Now
            </a>
           
          </div>
        
          </div>
          </div>
          
          </div>
          <div class="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
          
          <div class="blog grid-blog">
          <div class="blog-image">
          <a href="blog-details">
          <img class="img-fluid" src="assets/img/blog/blog-07.jpg" alt="PostImage"/>
          </a>
          </div>
          <div class="blog-content">
          <ul class="entry-meta meta-item">
          <li>
          <div class="post-author">
          <a href="doctor-profile">
          <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Post Author"/> <span>Service 2</span>
          </a>
          </div>
          </li>
          <li><i className="far fa-money-bill-alt" /> $300</li>
          </ul>
          <div class="text-center"> 
          <a href="buy" class="btn btn-primary">
            Buy Now
            </a>
           
          </div>
          </div>
          </div>
          
          </div>
          <div class="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
          
          <div class="blog grid-blog">
          <div class="blog-image">
          <a href="blog-details">
          <img class="img-fluid" src="assets/img/blog/blog-08.jpg" alt="PostImage"/>
          </a>
          </div>
          <div class="blog-content">
          <ul class="entry-meta meta-item">
          <li>
          <div class="post-author">
          <a href="doctor-profile">
          <img src="assets/img/doctors/doctor-thumb-03.jpg" alt="Post Author"/> <span>Service 3</span>
          </a>
          </div>
          </li>
          <li><i className="far fa-money-bill-alt" /> $300</li>
          </ul>
          <div class="text-center"> 
          <a href="buy" class="btn btn-primary">
            Buy Now
            </a>
           
          </div>
           </div>
          </div>
          
          </div>
          <div class="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
          
          <div class="blog grid-blog">
          <div class="blog-image">
          <a href="blog-details">
          <img class="img-fluid" src="assets/img/blog/blog-09.jpg" alt="PostImage"/>
          </a>
          </div>
          <div class="blog-content">
          <ul class="entry-meta meta-item">
          <li>
          <div class="post-author">
          <a href="doctor-profile">
          <img src="assets/img/doctors/doctor-thumb-04.jpg" alt="Post Author"/> <span>Service 4</span>
          </a>
          </div>
          </li>
          <li><i className="far fa-money-bill-alt" /> $300</li>
          </ul>
          <div class="text-center"> 
          <a href="buy" class="btn btn-primary">
            Buy Now
            </a>
           
          </div>
        
           </div>
          </div>
          
          </div>
          </div>
        
          </div>
          </section>
         
          
          <section  style={{ marginTop: "-10%" }} class="section section-blogs">
          <div class="container-fluid">
          
          <div class="section-header text-center aos" data-aos="fade-up">
          <h2>Blogs and News</h2>
          <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          
          <div class="row blog-grid-row">
          <div class="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
          
          <div class="blog grid-blog">
          <div class="blog-image">
          <a href="blog-details">
          <img class="img-fluid" src="assets/img/blog/blog-01.jpg" alt="PostImage"/>
          </a>
          </div>
          <div class="blog-content">
          <ul class="entry-meta meta-item">
          <li>
          <div class="post-author">
          <a href="doctor-profile">
          <img src="assets/img/doctors/doctor-thumb-01.jpg" alt="Post Author"/> <span>Dr. Ruby Perrin</span>
          </a>
          </div>
          </li>
          <li><i class="far fa-clock"></i> 4 Dec 2019</li>
          </ul>
          <h3 class="blog-title"><a href="blog-details">Making your clinic painless visit?</a></h3>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          </div>
          
          </div>
          <div class="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
          
          <div class="blog grid-blog">
          <div class="blog-image">
          <a href="blog-details">
          <img class="img-fluid" src="assets/img/blog/blog-02.jpg" alt="PostImage"/>
          </a>
          </div>
          <div class="blog-content">
          <ul class="entry-meta meta-item">
          <li>
          <div class="post-author">
          <a href="doctor-profile">
          <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Post Author"/> <span>Dr. Darren Elder</span>
          </a>
          </div>
          </li>
          <li><i class="far fa-clock"></i> 3 Dec 2019</li>
          </ul>
          <h3 class="blog-title"><a href="blog-details">What are the benefits of Online Doctor Booking?</a></h3>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          </div>
          
          </div>
          <div class="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
          
          <div class="blog grid-blog">
          <div class="blog-image">
          <a href="blog-details">
          <img class="img-fluid" src="assets/img/blog/blog-03.jpg" alt="PostImage"/>
          </a>
          </div>
          <div class="blog-content">
          <ul class="entry-meta meta-item">
          <li>
          <div class="post-author">
          <a href="doctor-profile">
          <img src="assets/img/doctors/doctor-thumb-03.jpg" alt="Post Author"/> <span>Dr. Deborah Angel</span>
          </a>
          </div>
          </li>
          <li><i class="far fa-clock"></i> 3 Dec 2019</li>
          </ul>
          <h3 class="blog-title"><a href="blog-details">Benefits of consulting with an Online Doctor</a></h3>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          </div>
          
          </div>
          <div class="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
          
          <div class="blog grid-blog">
          <div class="blog-image">
          <a href="blog-details">
          <img class="img-fluid" src="assets/img/blog/blog-04.jpg" alt="PostImage"/>
          </a>
          </div>
          <div class="blog-content">
          <ul class="entry-meta meta-item">
          <li>
          <div class="post-author">
          <a href="doctor-profile">
          <img src="assets/img/doctors/doctor-thumb-04.jpg" alt="Post Author"/> <span>Dr. Sofia Brient</span>
          </a>
          </div>
          </li>
          <li><i class="far fa-clock"></i> 2 Dec 2019</li>
          </ul>
          <h3 class="blog-title"><a href="blog-details">5 Great reasons to use an Online Doctor</a></h3>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          </div>
          
          </div>
          </div>
          <div class="view-all text-center"> <a href="blogs" class="btn btn-primary">View All</a>
          </div>
          </div>
          </section>
          
          
 <footer class="footer">
          
          <div class="footer-top aos" data-aos="fade-up">
          <div class="container-fluid">
          <div class="row">
          <div class="col-lg-3 col-md-6">
          
          <div class="footer-widget footer-about">
          <div class="footer-logo">
          <img src="assets/img/footer-logo.png" alt="logo"/>
          </div>
          <div class="footer-about-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="social-icon">
          <ul>
          <li> <a href="/#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
          </li>
          <li> <a href="/#" target="_blank"><i class="fab fa-twitter"></i> </a>
          </li>
          <li> <a href="/#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </li>
          <li> <a href="/#" target="_blank"><i class="fab fa-instagram"></i></a>
          </li>
          <li> <a href="/#" target="_blank"><i class="fab fa-dribbble"></i> </a>
          </li>
          </ul>
          </div>
          </div>
          </div>
          
          </div>
          <div class="col-lg-3 col-md-6">
          
          <div class="footer-widget footer-menu">
          <h2 class="footer-title">For Patients</h2>
          <ul>
          <li><a href="doctors">Search for Doctors</a>
          </li>
          <li><a href="login">Login</a>
          </li>
          <li><a href="register">Register</a>
          </li>
          <li><a href="booking">Booking</a>
          </li>
          <li><a href="patient-dashboard">Patient Dashboard</a>
          </li>
          </ul>
          </div>
          
          </div>
          <div class="col-lg-3 col-md-6">
          
          <div class="footer-widget footer-menu">
          <h2 class="footer-title">For Doctors</h2>
          <ul>
          <li><a href="all-appointments">Appointments</a>
          </li>
          <li><a href="available-timings">Available Timing</a>
          </li>
          <li><a href="login">Login</a>
          </li>
          <li><a href="doctor-register">Register</a>
          </li>
          <li><a href="doctor-dashboard">Doctor Dashboard</a>
          </li>
          </ul>
          </div>
          
          </div>
          <div class="col-lg-3 col-md-6">
          
          <div class="footer-widget footer-contact">
          <h2 class="footer-title">Contact Us</h2>
          <div class="footer-contact-info">
          <div class="footer-address"> <span><i class="fas fa-map-marker-alt"></i></span>
          <p>3556 Beech Street, San Francisco,
          <br/>California, CA 94108</p>
          </div>
          <p> <i class="fas fa-phone-alt"></i>
          +919999999999</p>
          <p class="mb-0"> <i class="fas fa-envelope"></i>mail@test.com</p>
          </div>
          </div>
          
          </div>
          </div>
          </div>
          </div>
          
          
          <div class="footer-bottom">
          <div class="container-fluid">
          
          <div class="copyright">
          <div class="row">
          <div class="col-md-6 col-lg-6">
          <div class="copyright-text">
          <p class="mb-0">&copy; 2023 Clinic Booking. All rights reserved.</p>
          </div>
          </div>
          <div class="col-md-6 col-lg-6">
          
          <div class="copyright-menu">
          <ul class="policy-menu">
          <li><a href="terms-and-conditions">Terms and Conditions</a>
          </li>
          <li><a href="privacy-policy">Policy</a>
          </li>
          </ul>
          </div>
          
          </div>
          </div>
          </div>
          
          </div>
          </div>
          
          </footer>

          <div className="mouse-cursor cursor-outer"></div>
          <div className="mouse-cursor cursor-inner"></div>

        
          
          </div>
     


        );
        
    }
}
export default Home;