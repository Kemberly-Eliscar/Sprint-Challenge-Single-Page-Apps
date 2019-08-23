import React, { useEffect, useState } from "react";
import axios from 'axios'
import LocationCard from './LocationCard'

export default function LocationsList() {
    const [locations, setLocations] = useState([])

        useEffect(() => {
            axios
            .get("https://rickandmortyapi.com/api/location")
            .then(data => {
                const locationsList = data.data.results
                setLocations(locationsList)
            })
            .catch(error => {
                console.log('error', error)
            })
        },[])
        return (
            <section className = 'location-list grid-view'>
                {locations.map((location, index) => {
                    return <LocationCard key={index} {...location} />
                })}
            </section>
        )
}
