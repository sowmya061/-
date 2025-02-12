import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/HomePage/Header";
import Landing from "./components/HomePage/Landing";
import Appointment from "./components/Appointment/Appointment";
import Login from "./components/HomePage/Login";
import Register from "./components/HomePage/Register";

function App() {
  return (
    <BrowserRouter> {/* Updated here */}
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book_appt" element={<Appointment />} />
        <Route path="/user/login" element={< Login/>} />
        <Route path="/user/register" element={<Register />} />

      </Routes>
    </BrowserRouter> 
  );
}

export default App;
