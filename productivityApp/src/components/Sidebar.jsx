import './Sidebar.css';


function Sidebar(){
    return(
        <div className='sidebar'>
            
  
            <form className='habit-search-form'>
                  <h3>Search your habits</h3>
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </form>

            <div className='habit-list'>
                <div className="habit"></div>
                <div className="habit"></div>
                <div className="habit"></div>
                <div className="habit"></div>
                <div className="habit"></div>
                <div className="habit"></div>
                <div className="habit"></div>
                <div className="habit"></div>
                <div className="habit"></div>
                <div className="habit"></div>
            </div>
        </div>
    );
}


export default Sidebar;