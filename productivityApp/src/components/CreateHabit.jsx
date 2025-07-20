import './CreateHabit.css';
import { useState } from 'react';

function CreateHabit(){

    const [selectedDays, setSelectedDays] = useState([]);


    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    
    const plusButtonHandler =()=>{
        alert("clicked");
    }

    const handleChange = (e) => {
    const value = e.target.value;
    setSelectedDays(prev =>
      prev.includes(value)
        ? prev.filter(day => day !== value)
        : [...prev, value]
    );
  };


    return(
        <div className="create-habit">




        <div className='today-info'>
            <button
            className='plus-button'
            onClick={plusButtonHandler}
            
            
            >+</button>
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