import React, { useState, useEffect } from "react";
import axios from "axios"
import moment from 'moment'; 

export default function Search(props){

const { nasaData } = props
const { date } = props
console.log(nasaData);
var currentDate = moment().format("YYYY-MM-DD");

    return(
        <div className='info-container'>
            <h3> {currentDate} </h3>
            <h1> {nasaData.title} </h1>
            <p>{nasaData.explanation}</p>
        </div>
    )
}