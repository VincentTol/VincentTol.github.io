import headshot from '../images/headshot.jpg'

function HomePage(){
    return(
    <div>
        <header>
        <title>Vincentfolio</title>
        {/* The nav container uses space between which puts an even ammount of space between items
        the items in this case are the left nav and right nav which push those divs to the left and right ends */}
        <nav className="navContainer">
            <div className="leftNav">
                <h1>Vincent Toledo</h1>
            </div>
            <div className="rightNav">
                <ul className="navLinks">
                    <li>Projects</li>
                    <li>About</li>
                    <li><a href="https://github.com/VincentTol">GitHub</a></li>
                </ul>
            </div>
        </nav>
        </header>

        <div className="content-container">
            <div className="content-column">
                <h1 className="content-object">I'm a junior Computer Science student at the University of Florida enjoying learning and creating every day</h1>
                <button className="topButton" onClick={() => window.open("https://docs.google.com/document/d/14PotatEH3dJ2eddbPPSXY1aafgluxUvh/edit?usp=drive_link&ouid=105749632575768178748&rtpof=true&sd=true", "_blank")}>
                Resume
                </button>                
                <button className="topButton" onClick={() => window.open("https://www.linkedin.com/in/tol-vat/", "_blank")}>
                LinkedIn
                </button>   
            </div>
            <div className="image-column">
                <img src = {headshot} alt= "Vincent's headshot"/> {/* Replace this with your actual image element */}
            </div>
        </div>


        <div style={{ margin: '100px' }}> </div>
        <div className='regTitle'>What I've been working On...</div>

        <div className="flexContainerRow">
            <p className="projectObject">React</p>
            <p className="projectObject">MySQL</p>
            <p className="projectObject">Pandas/Numpy/SciKit</p>
            <p className="projectObject">Web Development</p>
        </div>
    </div>
    );

}

export default HomePage;