import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

// Fisher Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const pokemons = [
  { id: 4, name: "charizard" },
  { id: 10, name: "caterpie" },
  { id: 77, name: "ponyta" },
  { id: 108, name: "lickitung" },
  { id: 132, name: "ditto" },
  { id: 133, name: "eevee" },
];

const doublePokemons = shuffle([...pokemons, ...pokemons]);

export default function App() {
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (opened.length < 2) return;

    const firstPokemon = doublePokemons[opened[0]];
    const secondPokemon = doublePokemons[opened[1]];

    if (firstPokemon.id === secondPokemon.id) {
      setMatched((matched) => [...matched, firstPokemon.id]);
    }
  }, [opened]);

  useEffect(() => {
    if (opened.length === 2) setTimeout(() => setOpened([]), 1000);
  }, [opened]);

  function flipCard(index) {
    setMoves((moves) => moves + 1);
    setOpened((opened) => [...opened, index]);
  }

  return (
    <div className="app">
      <p>
        {moves} <strong>moves</strong>
      </p>
      <div className="cards">
        {doublePokemons.map((pokemon, index) => {
          let isFlipped = false;

          if (opened.includes(index) || matched.includes(pokemon.id))
            isFlipped = true;

          return (
            <PokemonCard
              pokemon={pokemon}
              key={index}
              isFlipped={isFlipped}
              flipCard={flipCard}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
