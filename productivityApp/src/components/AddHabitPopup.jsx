       
import './CreateHabit.css';
import { useState } from 'react';
       
function AddHabitPopup(){

    return(
        <div className='add-habit-popup'>
        <input type="text"
        placeholder='Habit name'
        />    
       
        <div className='checkbox-container'>
            {days.map(day=>(
                <label key={day}>

                <input
                type='checkbox'
                value={day}
                name={day}
                className='checkbox'
                checked={selectedDays.includes(day)}
            onChange={handleChange}        
                />
                {day}
                </label>
            ))}
        </div>

        <div>
            <input type="radio"
            name='Reminder'
            />
            <label>Reminder</label>
        </div>


        <button>Create</button>
        </div>
    );
}


export default AddHabitPopup;
       
