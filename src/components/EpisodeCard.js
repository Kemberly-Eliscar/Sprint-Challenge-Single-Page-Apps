import React from 'react'
import { Card } from 'semantic-ui-react'

export default function EpisodeCard(props) {

    const {name} = props
    const {episode} = props
    const {air_date} = props
    console.log(props)

    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    <p>Episode : {episode}</p>
                    <p>Air Date : {air_date}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}