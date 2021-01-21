import React, { useState, useEffect } from "react";
import axios from "axios"

export default function Search(props){

const { nasaData } = props
const { date } = props
console.log(nasaData);

    return(
        <div className='info-container'>
            <h3>Date: {date} </h3>
            <h1>Title: {nasaData.title} </h1>
            <p>{nasaData.explanation}</p>
        </div>
    )
}