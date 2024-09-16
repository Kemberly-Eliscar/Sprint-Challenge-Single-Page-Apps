import React from "react";
import { Card } from 'semantic-ui-react'

export default function LocationCard (props) {
  
  const {dimension} = props
  const {name} = props
  const {residents} = props
  const {type} = props
  const {id} = props

  console.log(props)

  return(
    <Card>
      <Card.Content>
        <Card.Header>{ name }</Card.Header>
        <Card.Description>
          <p>{type} - {dimension}</p>
          <p>Residents : {residents.length}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
