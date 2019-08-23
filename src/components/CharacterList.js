import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(data => {
      const characterList = data.data.results
      setCharacter(characterList)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <section className="character-list grid-view">
      {character.map((character, index) => {
        return <CharacterCard key={index} {...character} />
      })}
    </section>
  );
}
