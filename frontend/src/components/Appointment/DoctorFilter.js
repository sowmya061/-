import React, { useState, useEffect } from 'react';
import { doctors } from '../../assets/data/Doctors';
import './DoctorFilter.css';

export default function DoctorFilter() {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    const languages = ['All', ...new Set(doctors?.map(doc => doc.regionalLanguage) || [])];

    useEffect(() => {
        setFilteredDoctors(
            selectedLanguage === 'All'
                ? doctors
                : doctors.filter(doc => doc.regionalLanguage === selectedLanguage)
        );
    }, [selectedLanguage]);

    return (
        <div className="doctor-filter-container">
            <div className="language-buttons">
                {languages?.map(lang => (
                    <button 
                        key={lang} 
                        className={selectedLanguage === lang ? 'active' : ''}
                        onClick={() => setSelectedLanguage(lang)}
                    >
                        {lang}
                    </button>
                ))}
            </div>

            <div className="doctor-grid">
                {filteredDoctors?.length ? filteredDoctors.map(doctor => (
                    <div key={doctor.id} className="doctor-card">
                        <img 
                            src={doctor.image} 
                            alt={doctor.name} 
                            className="doctor-image"
                        />
                        <div className="doctor-info">
                            <h3>{doctor.name}</h3>
                            <p>Specialization: {doctor.specialization}</p>
                            <p>Language: {doctor.regionalLanguage}</p>
                            <button className="appointment-button" onClick={() => window.location.href = "http://localhost:9000"}>
                                Connect Now
                            </button>
                        </div>
                    </div>
                )) : (
                    <p className="no-doctors">No doctors available</p>
                )}
            </div>
        </div>
    );
}
