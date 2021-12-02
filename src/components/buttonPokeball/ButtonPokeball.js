import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./buttonPokeball.css";
export const ButtonPokeball = ({ poke }) => {
  return (
    <div className="button-center">
      <Button size="large">
        <Link
          to={{
            pathname: `/pokedex/pokemon/${poke.id}`,
            state: poke,
          }}
        >
          <div
            className="pokeball pokeball-button"
            style={{
              backgroundImage: "url(/img/pokeball-card.png) ",
            }}
          ></div>
        </Link>
      </Button>
    </div>
  );
};
