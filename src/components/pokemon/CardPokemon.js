import React from "react";
import { Link } from "react-router-dom";
import { BaseStats } from "../baseStats/BaseStats";
import { TypeIconPoke } from "../typeIconPoke/TypeIconPoke";
import { Button } from "@material-ui/core";
import "./cardPokemon.css";
import { capitalize } from "../../utils/capitalize";
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const CardPokemon = ({ id, infoPoke }) => {
  const namePoke = capitalize(infoPoke.name);
  return (
    <>
      {infoPoke && (
        <div className="d-flex align-content-start flex-wrap container-card">
          <div className="p-2 bd-highlight">
            <div className="imgId">#{infoPoke.id}</div>
          </div>
          <div className="p-2 flex-fill bd-highlight">
            <h1>{namePoke}</h1>
          </div>

          <div className="p-2 flex-fill bd-highlight">
            <img
              style={{ width: 400 }}
              src={infoPoke.sprites.other["official-artwork"].front_default}
              alt={infoPoke.name}
            />
          </div>

          <div className="p-2 flex-fill bd-highlight">
            <h5>Types</h5>
            <hr />
            <TypeIconPoke types={infoPoke.types} />

            <h5>Base Stats</h5>
            <hr />
            <BaseStats stats={infoPoke.stats} />
            <hr />
            <Button >
              <Link style={{listStyle:'none', textDecoration:'none'}}
                to={{
                  pathname: `/pokedex/pokemon/${id}/encounters`,
                  state: infoPoke,
                }}
              >
                <div className='d-flex justify-content-center align-items-center'>
                <center><LocationOnIcon /> </center>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
