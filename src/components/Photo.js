import React, { useState, useEffect } from "react";
import axios from "axios"

export default function Photo(props){
    const { nasaData } = props
    console.log(nasaData)
    let picURL = nasaData.url
    return(
        <img src={picURL}></img>
    )
}