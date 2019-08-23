import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  const { gender } = props;
  const { image } = props;
  const { name } = props;
  const { species } = props;
  const { status } = props;
  const { origin } = props;
  const { id } = props;

  return (
    <div>
      <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="gender">{gender}</span>
          </Card.Meta>
          <Card.Description>
            <p>Species : {species}</p>
            <p>Status : {status}</p>
            <p>Origin : {origin.name}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
