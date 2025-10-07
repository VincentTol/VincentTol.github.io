import React, { useState } from 'react';
import headshot from '../images/headshot.jpg'
import ukgLogo from '../images/ukg_logo.jpg'
import arthrexLogo from '../images/arthrex_logo.jpg'
import uniLogo from '../images/university_of_florida_innovation_academy_logo.jpg'

function WorkItem({ logo, alt, company, position, dates, techs = [], details = [] }) {
  const [open, setOpen] = useState(false);
  const id = `details-${company.replace(/\s+/g, '')}`;

  return (
    <div className="workItem">
      <img src={logo} alt={alt} className="companyLogo" />
      <div className="workContent">
        <div className="workHeader">
          <div className="titleBlock">
            <div className='ExpTitle'>{company} <span className='ExpTitle workPosition'>{position}</span></div>
            <div className='ExpTitle dates'>{dates}</div>
          </div>

          <button
            className="expandBtn"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen(prev => !prev)}
            title={open ? 'Collapse details' : 'Expand details'}
          >
            {open ? '−' : '+'}
          </button>
        </div>

        <div className="techList">
          {techs.map((t) => <span key={t} className="techTag">{t}</span>)}
        </div>

        <div id={id} className={`detailsPanel ${open ? 'open' : ''}`} aria-hidden={!open}>
          <ul>
            {details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function HomePage(){
    return(
    <div>
        <header>
        <title>Vincentfolio</title>
        {/* The nav container uses space between which puts an even ammount of space between items
        the items in this case are the left nav and right nav which push those divs to the left and right ends */}
        <nav className="navContainer">
            <div className="leftNav">
                <h1>Vincent A. Toledo</h1>
            </div>
            <div className="rightNav">
                <ul className="navLinks">
                    <li>Experience</li>
                    <li>Projects</li>
                    <li><a href="https://github.com/VincentTol">GitHub</a></li>
                </ul>
            </div>
        </nav>
        </header>

        {/* Front page Resume and Linkedin and portfolio pic*/}
        <div className="content-container">
            <div className="content-column">
                <h1 className="content-object">Hi, I'm Vincent,
                    a Senior Computer Science student at the University of Florida enjoying learning and creating every day</h1>
                <div className='flexContainerRow'>
                    <button className="topButton" onClick={() => window.open("https://docs.google.com/document/d/1huzcfTVhbZzHsR-mIfaqC4gN4ju4ZiPuMPuNBg80NBY/edit?usp=sharing", "_blank")}>
                        Resume
                    </button>                
                    <button className="topButton" onClick={() => window.open("https://www.linkedin.com/in/vincenttoledo/", "_blank")}>
                        LinkedIn
                    </button>   
                </div>

            </div>
            <div className="image-column">
                <img src = {headshot} alt= "Vincent's headshot"/>
            </div>
        </div>

        <div className='content-container'>
            {/* Experience Section */}
            <div className='content-column'>
                <div className='Title'>
                    Experience
                </div>

                <WorkItem
                  logo={ukgLogo}
                  alt="UKG logo"
                  company="UKG"
                  position="Software Engineer Intern"
                  dates="Sunrise, FL | September 2025 - December 2025"
                  techs={['C#', 'ASP.NET', 'Angular', 'SQL', 'Docker', 'Kubernetes']}
                  details={[
                    'Implemented feature X which improved Y by Z%',
                    'Collaborated on microservices using ASP.NET Core and Docker',
                    'Wrote integration tests and improved CI pipeline'
                  ]}
                />

                <WorkItem
                  logo={arthrexLogo}
                  alt="Arthrex logo"
                  company="Arthrex"
                  position="Software Engineer Intern"
                  dates="Naples, FL | May 2025 - August 2025"
                  techs={['JavaScript', 'REST APIs', 'Node.JS']}
                  details={[
                    'Built REST API endpoints for internal tooling',
                    'Optimized frontend load time using code-splitting',
                    'Worked with product team to scoping features'
                  ]}
                />

                <WorkItem
                  logo={uniLogo}
                  alt="UF logo"
                  company="University of Florida"
                  position="Web Developer"
                  dates="Gainesville, FL | May 2024 - May 2025"
                  techs={['HTML/CSS', 'JavaScript']}
                  details={[
                    'Maintained departmental website and content updates',
                    'Implemented accessible components and responsive fixes'
                  ]}
                />
            </div>

            {/* Image column to hold photos */}
            <div className='image-column'>
            </div>
        </div>

        <div className='content-container'>
            <div className='Title'>What I've been working On...</div>
            <div className="flexContainerRow">
                <p className="projectObject">Angular</p>
                <p className="projectObject">ASP.NET</p>
                <p className="projectObject">Azure</p>
                <p className="projectObject">Web Development</p>
                <p className="projectObject">Unity</p>
                <p className="projectObject">SQL</p>
            </div>
        </div>
    </div>
    );

}

export default HomePage;