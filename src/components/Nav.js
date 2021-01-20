import React, { useState, useEffect } from "react";
import axios from "axios"
import Search from './Search'
import Title from './Title'
import "./styles.css";




export default function Nav(props){

return (
    <div className="nav-container">
        <Title />
        <Search />
    </div>
)

}