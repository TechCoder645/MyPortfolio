import React from 'react';
import '../../../styles/About/Route/Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    return (
        <div className="experience">
            <div className="experience__container">
                <div className="experience__header">
                    <h2 className="experience__number">0<span>3</span></h2>
                    <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                </div>
                <div className="experience__description">
                    <div className="experience__main-box">
                        <div className="experience__box">
                            <h2>Fresher</h2>
                            <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/06/2022 - PRESENT</h3>
                            <ul>
                                <p>Responsible for -</p>
                                <li data-aos='fade-right' data-aos-delay='200'>
                                    <span>Learning and developing skills in front-end technologies such as React</span>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='400'>
                                    <span>Building personal projects to enhance coding skills</span>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='600'>
                                    <span>Participating in coding challenges and hackathons</span>
                                </li>
                                <li data-aos='fade-right' data-aos-delay='800'>
                                    <span>Collaborating with peers on open-source projects</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;