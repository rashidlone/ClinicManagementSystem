import React from "react";

class Head extends React.Component{

    render(){

        return (

         <div>
    <header class="header">
          <nav class="navbar navbar-expand-lg header-nav">
          <div class="navbar-header">
          <a id="mobile_btn" href="/#"> <span class="bar-icon">
          <span></span>
          <span></span>
          <span></span>
          </span>
          </a>
          <a href="/#" class="navbar-brand logo">
          <img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
          </a>
          </div>
          <div class="main-menu-wrapper">
          <div class="menu-header">
          <a href="/#" class="menu-logo">
          <img src="assets/img/logo.png" class="img-fluid" alt="Logo"/>
          </a>
          <a id="menu_close" class="menu-close" href="/#"> <i class="fas fa-times"></i>
          </a>
          </div>
          <ul class="main-nav">
          <li class="has-submenu">
          <a href="/#">Home</a>
          </li>
          <li class="has-submenu">
          <a href="doctors">Doctors</a>
          
          </li>
          
          <li class="has-submenu">
          <a href="/#services">Services</a>
          
          </li>
          
          
          <li class="has-submenu">
          <a href="blogs">Blogs</a>
          </li>
          
          <li class="has-submenu"><a href="contact-us">Contact Us</a></li>
          <li class="has-submenu"><a href="about-us">About</a></li>
          
          
          
          
          
          <li class="login-link"> <a href="login">Login / Signup</a>
          </li>
          </ul>
          </div>
          <ul class="nav header-navbar-rht">
          <li class="nav-item contact-item">
          <div class="header-contact-img"> <i class="far fa-hospital"></i>
          </div>
          <div class="header-contact-detail text-white">
          <p class="contact-header">Contact</p>
          <p class="contact-info-header">+919999999999</p>
          </div>
          </li>
          <li class="nav-item"> <a class="nav-link header-login" href="login">login / Signup </a>
          </li>
          
          
          
          <li class="nav-item dropdown has-arrow logged-item">
              <a href="/#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <span class="user-img">
              <img class="rounded-circle" src="assets/img/patients/patient.jpg" width="31" alt="Darren Elder"/>
              </span>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
              <div class="user-header">
              <div class="avatar avatar-sm">
              <img src="assets/img/patients/patient.jpg" alt="UserImage" class="avatar-img rounded-circle"/>
              </div>
              <div class="user-text">
              <h6>Richard Wilson</h6>
              <p class="text-muted mb-0">Patient</p>
              </div>
              </div>
              
              <a class="dropdown-item" href="admin/">Admin Dashboard</a>
              <a class="dropdown-item" href="doctor-dashboard">Doctor Dashboard</a>
              <a class="dropdown-item" href="patient-dashboard">Patient Dashboard</a>
              <a class="dropdown-item" href="login">Logout</a>
              </div>
              </li>
          
          
          </ul>
          </nav>
          </header>

          <br /> <br /> <br />

         </div>


        );
        
    }
}
export default Head;