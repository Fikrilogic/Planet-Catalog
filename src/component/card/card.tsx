import React from "react";
import {
  CardContainer,
  CardContent,
  CardPhoto,
  CardDetailContent,
  CardText,
  CardRow,
  CardTitleText
} from "./card.style";
import Planet from "../../model/planet";

interface CardProps {
  imgUrl: string;
  planet: Planet;
}

const Card: React.FC<CardProps> = ({ imgUrl, planet }) => {
  return (
    <CardContainer $maxHeight={"100px"} $maxWidth={"200px"}>
      <CardPhoto>
        <img src={imgUrl} alt={planet.name} />
      </CardPhoto>
      <CardContent>
        <h4>{planet.name}</h4>
        <CardDetailContent>
          <CardRow>
            <CardTitleText>diameter : </CardTitleText>
            <CardText>{planet.diameter}</CardText>
          </CardRow>
          <CardRow>
            <CardTitleText>Waktu Rotasi  : </CardTitleText>
            <CardText>{planet.rotation_period}</CardText>
          </CardRow>

          <CardRow>
            <CardTitleText>Waktu Orbit  : </CardTitleText>
            <CardText>{planet.orbital_period}</CardText>
          </CardRow>
          <CardRow>
            <CardTitleText>Cuaca  : </CardTitleText>
            <CardText>{planet.climate}</CardText>
          </CardRow>
        </CardDetailContent>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
