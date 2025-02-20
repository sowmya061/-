import React from 'react';
import './Appointment.css';
import DoctorFilter from './DoctorFilter';

function Appointment() {
  return (
    <div className='appointment-container'>
      <h2 className='appointment-heading'>Instantly Connect with a Doctor</h2>
      <p className='appointment-description'>Get real-time medical assistance with our consultation tool, that enables live translation and seamless conversations in your preferred language.</p>
      <p className='appointment-note'>Your health, your language—connect without barriers.</p>
      <DoctorFilter/>

     
    </div>
  );
}

export default Appointment;