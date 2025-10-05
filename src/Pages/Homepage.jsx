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
            <div className='content-column'>
                <div className='Title'>
                    Experience
                </div>
            </div>
            <div className='image-column'>
                <img src = {headshot} alt= "Vincent's headshot"/>
            </div>
        </div>


        <div style={{ margin: '80px' }}> </div>
        <div className='regTitle'>What I've been working On...</div>

        <div className="flexContainerRow">
            <p className="projectObject">React</p>
            <p className="projectObject">MySQL</p>
            <p className="projectObject">Video/Audio Communication</p>
            <p className="projectObject">Web Development</p>
        </div>
    </div>
    );

}

export default HomePage;