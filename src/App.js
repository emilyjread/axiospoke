import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';



function App() {
  const[poke, setPoke] = useState([])

  // useEffect(()=>{
  //   axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{setPoke(response.data.results)}, [])
  //   console.log(poke)
  // }

  // )
  const fetchpoke=()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{setPoke(response.data.results)})
      console.log(poke)
    }

    return(
      <div>
        <h1> Pokemon </h1>
        <button onClick={fetchpoke}>Fetch Pokemon</button>
        {poke.length>0&& poke.map((poke, index)=>{
          return(
            <div key={index}>
              <ul>
                <li>{poke.name}</li>
              </ul>
            </div>
          )
        })}
      </div>
    )
}

export default App;
