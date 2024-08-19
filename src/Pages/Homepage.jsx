function HomePage(){
    return(
    <div>
        <header>
        {/* The nav container uses space between which puts an even ammount of space between items
        the items in this case are the left nav and right nav which push those divs to the left and right ends */}
        <nav className="navContainer">
            <div className="leftNav">
                <p>Vincent Toledo</p>
            </div>
            <div className="rightNav">
                <ul className="navLinks">
                    <li>Projects</li>
                    <li>About</li>
                </ul>
            <p>GitHub</p>
            </div>
        </nav>
        </header>

        <div className='regTitle'>I'm a junior Computer Science student at the University of Florida enjoying learning and creating everyday</div>
        <div style={{ margin: '100px' }}> </div>
        <div className='regTitle'>What I've been working On...</div>

        <div className="flexContainerRow">
            <p className="projectObject">React</p>
            <p className="projectObject">MySQL</p>
            <p className="projectObject">Pandas/Numpy/SciKit</p>
            <p className="projectObject">Web Development</p>
            <p className="projectObject">More</p>
        </div>
    </div>
    );

}

export default HomePage;