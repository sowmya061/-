import React from 'react'
import { Icon } from '@iconify/react';
import './Features.css'

function Features() {
  return (
    <div>
        <div className='about-section'>
          <div className='about-heading'>
             About Us
          </div>
          <div className='about-content'>
            Welcome to MediCare, a revolutionary platform designed to make healthcare accessible, 
            efficient, and barrier-free for everyone. Whether you need a quick consultation, medical guidance, 
            or appointment assistance, we bring healthcare to your fingertips.
          </div>
        </div>

        <div className='feature-section'>
          <div className='feature-heading'>
            Our Key Features
          </div>

          {/* FIXED: Ensure all feature-boxes are inside feature-container */}
          <div className='feature-container'>

             {/* Feature 1 */}
             <div className='feature-box'>
                <div className='feature-header'>
                    <div className='feature-icon'>
                    <Icon icon="hugeicons:computer-video-call" width="24" height="24" />
                    </div>
                    <div className='feature-title'>
                    Virtual Consultations with Translation
                    </div>
                </div>
                <div className='feature-content'>
                        Book appointments easily and connect with doctors via video or voice calls. 
                        Our real-time translation ensures seamless communication in any language, 
                        breaking barriers to quality healthcare.
                </div>
             </div>

             {/* Feature 2 */}
             <div className='feature-box'>
                <div className='feature-header'>
                    <div className='feature-icon'>
                    <Icon icon="mage:robot-appreciate" width="24" height="24" />
                    </div>
                    <div className='feature-title'>
                       AI-Powered WhatsApp Assistance
                    </div>
                </div>
                <div className='feature-content'>
                    Our smart WhatsApp bot helps you book appointments, receive reminders, 
                    perform self-diagnosis, and get daily healthcare tips, making medical management
                    easier than ever.
                </div>
             </div>

             {/* Feature 3 */}
             <div className='feature-box'>
                <div className='feature-header'>
                    <div className='feature-icon'>
                    <Icon icon="hugeicons:global-education" width="24" height="24" />
                    </div>
                    <div className='feature-title'>
                       Medical Education Hub
                    </div>
                </div>
                <div className='feature-content'>
                    Explore our Education Center with expert videos, articles, and wellness tips to stay 
                    informed about preventive care, disease management, and the latest medical advancements. 
                </div>
             </div>

          </div> {/* Feature container closing div */}
        </div>
    </div>
  )
}

export default Features
