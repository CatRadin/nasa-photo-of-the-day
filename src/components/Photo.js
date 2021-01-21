import React, { useState, useEffect } from "react";
import axios from "axios"

export default function Photo(props){
    const { nasaData } = props
    
    
    return(
        <img className='pic-of-day' src={nasaData.url}></img>
    )
}