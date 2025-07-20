import '../App.css';

function Content(){
    return(
        <div className='content'>
            <h3 className='project-heading'>PROJECTS</h3>

            <div className='project-container'>
                <div className='project-card'>
                    <h3>Assignment Automation</h3>
                </div>
                <div className='project-card'>
                    <h3>Online Music Player</h3>
                </div>
                <div className='project-card'>
                    <h3>Productivity App</h3>
                </div>
                <div className='project-card'>
                    <h3>Chrome Extension</h3>
                </div>

            </div>
        </div>
    );
}

export default Content;