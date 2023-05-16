import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './admin/Home'
import Appointments from './admin/Appointments'
import Doctors from './admin/Doctors'
import Patients from './admin/Patients'
import Services from './admin/Services'
import Profile from './admin/Profile'
import Settings from './admin/Settings'

import MainPage from './pages/Home'
import Login from './pages/Login'
import AboutUs from './pages/AboutUs'
import AllAppointments from './pages/AllAppointments'
import AvailableTiming from './pages/AvailableTiming'
import BlogDetails from './pages/BlogDetails';
import Blogs from './pages/Blogs';
import Book from './pages/Book';
import Booking from './pages/Booking'
import BookingSuccess from './pages/BookingSuccess';
import ChangePassword from './pages/ChangePassword';
import ContactUs from './pages/ContactUs';
import DoctorChangePassword from './pages/DoctorChangePassword';
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorProfile from './pages/DoctorProfile';
import DoctorRegister from './pages/DoctorRegister';
import DoctorProfileSettings from './pages/DoctorProfileSettings';
import ForgotPassword from './pages/ForgotPassword';
import InvoiceView from './pages/InvoiceView';
import PatientDashboard from './pages/PatientDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProfileSettings from './pages/ProfileSettings';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import Terms from './pages/Terms';
import AllDoctors from './pages/AllDoctors';
import Buy from './pages/Buy';

class App extends React.Component {

  render(){
    
  return ( 
    <div>

    <BrowserRouter>
    <Routes>
      <Route exact path="/admin" element={<Home/>} />
      <Route path="/admin/appointments" element={<Appointments/>} />
      <Route path="/admin/doctors" element={<Doctors/>} />
      <Route path="/admin/patients" element={<Patients/>} />
      <Route path="/admin/services" element={<Services/>} />
      <Route path="/admin/profile" element={<Profile/>} />
      <Route path="/admin/settings" element={<Settings/>} />

      <Route exact path="/" element={<MainPage/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/about-us" element={<AboutUs/>} />
      <Route exact path="/all-appointments" element={<AllAppointments/>} />
      <Route exact path="/available-timings" element={<AvailableTiming/>} />
      <Route exact path="/blog-details" element={<BlogDetails/>} />
      <Route exact path="/blogs" element={<Blogs/>} />
      <Route exact path="/book" element={<Book/>} />
      <Route exact path="/booking" element={<Booking/>} />
      <Route exact path="/booking-success" element={<BookingSuccess/>} />
      <Route exact path="/change-password" element={<ChangePassword/>} />
      <Route exact path="/contact-us" element={<ContactUs/>} />
      <Route exact path="/doctor-change-password" element={<DoctorChangePassword/>} />
      <Route exact path="/doctor-dashboard" element={<DoctorDashboard/>} />
      <Route exact path="/doctor-profile" element={<DoctorProfile/>} />
      <Route exact path="/doctor-profile-settings" element={<DoctorProfileSettings/>} />
      <Route exact path="/doctor-register" element={<DoctorRegister/>} />
      <Route exact path="/doctors" element={<AllDoctors/>} />
      <Route exact path="/forgot-password" element={<ForgotPassword/>} />
      <Route exact path="/invoice-view" element={<InvoiceView/>} />
      <Route exact path="/patient-dashboard" element={<PatientDashboard/>} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route exact path="/profile-settings" element={<ProfileSettings/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/register-success" element={<RegisterSuccess/>} />
      <Route exact path="/terms-and-conditions" element={<Terms/>} />
      <Route exact path="/buy" element={<Buy/>} />









    </Routes>
  </BrowserRouter>


  </div>
  );
   
}
}

export default App;
