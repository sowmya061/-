import React from 'react';
import './Guidelines.css';

const guidelines = [
    {
        id: 1,
        title: "CPR Guidelines",
        description: "Learn how to perform CPR in emergencies. Essential for saving lives!",
        pdfUrl: require('../../assets/CPR.pdf') 
    },
];

export default function Guidelines() {
    return (
        <div className="health-guidelines-container">
            <div className='guidelines-heading'>Emergency Procedures</div>
            <p>Essential health tips and emergency response procedures in all languages to help you stay prepared.</p>

            <div className="guidelines-grid">
                {guidelines.map(guide => (
                    <div key={guide.id} className="guideline-card">
                        <div className='guideline-card-title'>{guide.title}</div>
                        <div className='g-card-container'>
                        <div className='guideline-desc'>{guide.description}</div>
                        <button className='guideline-pdf' onClick={() => window.open(guide.pdfUrl, "_blank")}>
                            See Full PDF
                        </button>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
