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
            {/* Content column flex 2 to hold  twice as much space as image column*/}
            <div className='content-column' style={{ flex: 2 }}>
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
                    'Developing a Full Stack Angular, Typescript, C#, ASP.net web app for Tax Lookup using a microservice architecture deployed with Kubernetes on Google Cloud. Integrated with ARCGIS for Tax Visualization.',
                    'Improved REST APIs response time by 25% by refactoring inefficient controller methods',
                    'Resolving tickets regarding Unit Testing, Quality Assurance, and tax code updates in Scrum team'
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
                    'Architected and developed a Full Stack JavaScript, HTML, Node.js application to control operating room audio systems, replacing legacy hardware and reducing hardware costs by over $2,200',
                    'Reduced audio system latency by 80% by implementing WebSockets and a secure SSH connection',
                    'Migrated touch panel software interface to a new REST API, enabling seamless transition of surgical video/audio hardware platforms and improving system compatibility and maintainability'
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
                    'Built responsive web features for the University of Florida’s official website using HTML, CSS, and JavaScript',
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