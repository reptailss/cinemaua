import React, {useState,useEffect} from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import styles from './dateInput.module.scss'



const DateInput = ({onChangeDateValue,dateProp}) => {
const date =  dateProp ? new Date(dateProp).getTime() : new Date().getTime();

    const [startDate, setStartDate] = useState(date);


    const onChangeDate = (date) => {
        setStartDate(date)
        onChangeDateValue(date.toISOString().slice(0,10).replace( /\//g, "/" ))


    }
    return (
        <>
            <DatePicker
                className={styles.root}
                selected={startDate}
                onChange={(date) => onChangeDate(date)}
            />
            </>

    );


};

export default DateInput;