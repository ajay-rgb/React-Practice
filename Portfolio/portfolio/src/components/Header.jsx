import '../App.css';
import profilePic from '../assets/fp.jpeg';

function Header(){
    return(
        <div className="header">
            <div className='vertical'>

                 <div className='name'>
                <div className="circle">
                   <img src={profilePic} alt="gf"/>
                </div>
                <div>
                    <h3>AJAY YADAV</h3>
                    <span>Final-year cse undergrad</span><br />
                    <span>NIT Bhopal</span>
                </div>
                 
            </div>

            </div>
           
            <div className='horizontal'>
                 <h1 id='portfolio-heading'>PORTFOLIO</h1>
            {/* <span>WEB DEVELOPER</span> */}
            <p>C++ <br /> PYTHON <br />JAVASCRIPT <br /> MYSQL <br /> REACT <br /> NODE.JS</p>
            </div>
           
        </div>
    );
}


export default Header;