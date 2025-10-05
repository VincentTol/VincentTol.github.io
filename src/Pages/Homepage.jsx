import headshot from '../images/headshot.jpg'
import ukgLogo from '../images/ukg_logo.jpg'
import arthrexLogo from '../images/arthrex_logo.jpg'
import uniLogo from '../images/university_of_florida_innovation_academy_logo.jpg'

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
                <div className="workItem">
                    <img src={ukgLogo} alt="UKG logo" className="companyLogo" />
                    <div className='content-column'>
                        <div className='ExpTitle'>UKG <span className='ExpTitle workPosition'> Software Engineer Intern</span></div>
                        <div className='ExpTitle dates'>Sunrise, FL | September 2025 - December 2025</div>
                    </div>
                </div>
                <div className="workItem">
                    <img src={arthrexLogo} alt="Arthrex logo" className="companyLogo" />
                    <div className='content-column'>
                        <div className='ExpTitle'>Arthrex <span className='ExpTitle workPosition'> Software Engineer Intern</span></div>
                        <div className='ExpTitle dates'>Naples, FL | May 2025 - August 2025</div>
                    </div>
                </div>
                <div className="workItem">
                    <img src={uniLogo} alt="UF logo" className="companyLogo" />
                    <div className='content-column'>
                        <div className='ExpTitle'>University of Florida<span className='ExpTitle workPosition'> Web Developer</span></div>
                        <div className='ExpTitle dates'>Gainesville, FL | May 2024 - May 2025</div>
                    </div>
                </div>
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