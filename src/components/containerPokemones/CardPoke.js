import React, { useEffect, useState } from "react";
import { capitalize } from "../../utils/capitalize";
import { request } from "../../utils/HttpMethod";
import { typePokeBckg } from "../../utils/typePokeBckg";
import { BaseStats } from "../baseStats/BaseStats";
import { ButtonPokeball } from "../buttonPokeball/ButtonPokeball";
import { Spinner } from "../spinner/Spinner";
import { TypeIconPoke } from "../typeIconPoke/TypeIconPoke";
import "./cardPoke.css";

export const CardPoke = ({ pokemon }) => {
  const [poke, setPoke] = useState(null);
  const namePoke = capitalize(pokemon.name);

  const bckgColor = (type) => {
    const typeExist = typePokeBckg.hasOwnProperty(type);
    return typeExist ? typePokeBckg[type].bckgColor : "#ffcdd2";
  };

  useEffect(() => {
    const getPoke = async (endpoint = pokemon.url) => {
      const response = await request(endpoint);
      setPoke(response.data);
    };
    getPoke();
  }, [pokemon]);

  return (
    <div className="d-flex justify-content-center  padd-card align-middle animate__animated animate__fadeIn">
      {!poke && <Spinner />}
      {poke && (
        <div
          className="card padd-card"
          style={{
            width: 200,
            background: `${bckgColor(poke.types[0].type.name)}`,
          }}
        >
          <div className="pokemon-snap">
            <img
              style={{ width: 180 }}
              className="img-pok"
              src={poke.sprites.other["official-artwork"].front_default}
              alt={poke.name}
            />
          </div>
          <div
            className="card-body"
            style={{
              width: 198,
              height: 200,
            }}
          >
            <h3 className="card-title">{namePoke}</h3>

            <TypeIconPoke types={poke.types} />

            <BaseStats stats={poke.stats} />
            <ButtonPokeball poke={poke} />
          </div>
        </div>
      )}
    </div>
  );
};
