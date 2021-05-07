import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'
import { Button, TextField } from '@material-ui/core';

import "react-datepicker/dist/react-datepicker.css";


const TimeComponent = () => {
    
    const [time, setTime] = useState(new Date());
    const handleChange = (e) => {    
        setTime(e)
    }

    const onFormSubmit =(e)=> {
        e.preventDefault();
        console.log(time)
    }
    
  
    return (   
      <div>
         <DatePicker
                selected={ time }
                onChange={ handleChange }
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={20}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={new Date()}
                maxDate={addDays(new Date(), 7)}
            />
      </div>
               
    );
  }
  
  export default TimeComponent;


