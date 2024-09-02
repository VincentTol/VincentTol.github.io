function HomePage(){
    return(
    <div>
        <header>
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
                    <li>GitHub</li>
                </ul>
            </div>
        </nav>
        </header>

        <div className="content-container">
            <div className="content-column">
                <h1 className="content-object">I'm a junior Computer Science student at the University of Florida enjoying learning and creating every day</h1>
                <p className="topButton"><a href="https://docs.google.com/document/d/14PotatEH3dJ2eddbPPSXY1aafgluxUvh/edit?usp=drive_link&ouid=105749632575768178748&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a></p>
                <p className="topButton"><a href="https://www.linkedin.com/in/tol-vat/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
            <div className="image-column">
                <p>Image here</p> {/* Replace this with your actual image element */}
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