import React, { useState, useEffect } from "react";
import axios from "axios"
import Info from './Info'
import Photo from './Photo'
import "./styles.css";

export default function Card(props){
    const { nasaData } = props
    const { date } = props
    console.log(date, nasaData);
return (
    <div className= 'card-container'>
        <Info nasaData ={nasaData} date= {date} />
        <Photo nasaData = { nasaData } date = { date } />

    </div>
)
}