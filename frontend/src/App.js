import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/HomePage/Header";
import Landing from "./components/HomePage/Landing";
import Appointment from "./components/Appointment/Appointment";
import Login from "./components/HomePage/Login";
import Register from "./components/HomePage/Register";
import EducationCenter from "./components/EducationCenter/EducationCenter";
import Hospitals from "./components/Hospitals/Hospitals";

function App() {
  return (
    <BrowserRouter> {/* Updated here */}
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book_appt" element={<Appointment />} />
        <Route path="/user/login" element={< Login/>} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/med_info" element={<EducationCenter />} />
        <Route path="/nearby_hospitals" element={<Hospitals />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
