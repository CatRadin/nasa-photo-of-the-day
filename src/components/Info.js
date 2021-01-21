import React from "react";

import moment from 'moment'; 

export default function Search(props){

const { nasaData } = props

console.log(nasaData);
var currentDate = moment().format("MM-DD-YYYY");

    return(
        <div className='info-container'>
            <h3> {currentDate} </h3>
            <h1> {nasaData.title} </h1>
            <p>{nasaData.explanation}</p>
        </div>
    )
}