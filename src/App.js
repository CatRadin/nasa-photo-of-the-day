import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants";
import axios from "axios"
import Nav from './components/Nav'
import Card from './components/Card'

function App() {
//use states here
const [nasaData, setNasaData] = useState({});
const [date, setDate] = useState('2020-01-20');

//call use effect to get the nasa data

useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(response => {console.log(response.data)})
  .catch(error => {(console.log(error))})
},[]);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun. Hello!!! <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
