import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const PostGraduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ducation</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Chandigarh University</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;13/08/2022 - 31/07/2024</h2>
                        <p>"Earned a postgraduate Master of Computer Applications (MCA) degree from Chandigarh University, focusing on software development, modern web technologies, and database management."</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostGraduation;