import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";

const Pokemons = () => {
  const userName = useSelector((state) => state.name);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);
  console.log(types);
  console.log(pokemons);

  const searchPokemon = () => {
    navigate(`/pokedex/${pokemonName}`);
  };

  const filterType = (e) => {
    axios.get(e.target.value)
    .then(res => setPokemons(res.data.pokemon))
  };

  

  return (
    <div>
      <h1>Pokemons</h1>
      <p>Welcome {userName}!</p>
      <input
        type="text"
        placeholder="Pokemon name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={searchPokemon}>search</button>

      <select onChange={filterType} name="" id="">
        {types.map((type) => (
          <option value={type.url} key={type.url}>
            {type.name}
          </option>
        ))}
      </select>

      {pokemons.map((pokemon) => (
        <PokemonCard 
        key={pokemon.url ? pokemon.url : pokemon} 
        url={pokemon.url ? pokemon.url : pokemon} />
      ))}
    </div>
  );
};

export default Pokemons;
