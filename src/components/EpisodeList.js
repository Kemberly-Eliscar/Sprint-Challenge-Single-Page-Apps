import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {

const [episodeList, setEpisodeList] = useState ([])

useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/episode")
    .then(data =>{
        const episodes = data.data.results
        setEpisodesList(episodes)
    })
    .catch( error => {
        console.log('error :', error)
    })
}, [])
return (
    <section className = 'episodes-list grid-view'>
        {episodeList.map((episode, index) => {
            return <EpisodeCard {...episode} key={index} />
        })}
    </section>
)
    };