import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Shashi Bhushan</span></p>
                        <p data-aos='fade-right' data-aos-delay='200'>
  As a fresher, I enjoy building websites and am always enthusiastic about creating innovative front-end features that enhance user experience.
</p>
<p data-aos='fade-right' data-aos-delay='400'>
  Passionate front-end developer with foundational knowledge and hands-on experience in developing adaptive and responsive websites using React.js .
</p>

<p data-aos='fade-right' data-aos-delay='600'>
  I also have a foundational understanding of server-side development with Node.js, Express.js, and MongoDB, and am eager to expand my knowledge in backend technologies.
</p>
<p data-aos='fade-right' data-aos-delay='800'>
  Constantly exploring new tools and technologies to improve my skills and stay updated with industry trends.
</p>

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro