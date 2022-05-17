import React, { useState} from "react";
import axios from "axios";

const PokeList = (props) => {
    const [pokeData, setPokeData] = useState([]);

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1200")
            .then(res => {
                console.log(res.data.results);
                setPokeData(res.data.results);
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>
                {
                    pokeData.map((item,i)=>{
                        return <li key={i} className="display-4">{item.name}</li>
                    })
                }
            </ul>
        </div>

    )
}

export default PokeList;