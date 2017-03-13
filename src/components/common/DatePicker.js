import React from 'react';
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css"


const DatePicker =  ({onClick}) => {

    return (
      <DayPicker
        initialMonth={ new Date(2017, 1) }
        onDayClick={ onClick }
      />);
}

export default DatePicker;
