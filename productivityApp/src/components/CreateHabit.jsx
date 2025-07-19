import './CreateHabit.css';

function CreateHabit(){
    return(
        <div className="create-habit">


        <div className='today-info'>
            <span className='this-week-heading'>THIS WEEK</span>
        </div>

        <div className="habit-card-list">
            <div className="habit-card"></div>
            <div className="habit-card"></div>
            <div className="habit-card"></div>
            <div className="habit-card"></div>
            <div className="habit-card"></div>
            
        </div>

        </div>
    );
}

export default CreateHabit;