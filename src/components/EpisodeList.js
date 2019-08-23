import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EpisodeList = props => {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        const getEpisodes = () => {
            axios
            .get('https:rickandmortyapi.com/api/episode')
            .then(response => {
                setEpisodes(response.data);
            })
            .catch(error => {
                console.error('Server Error', error);
            });
        };
        getEpisodes();
    }, []);
};
    export default function EpisodeList() {

    };