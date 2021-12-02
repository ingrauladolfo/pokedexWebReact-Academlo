import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { request } from "../../utils/HttpMethod";
import { Spinner } from "../spinner/Spinner";
import NavInfoPoke from "../ui/NavInfoPoke";
import { CardPokemon } from "./CardPokemon";

export const ContainerPokemon = () => {
  const [infoPoke, setInfoPoke] = useState(null);
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    const getPoke = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`
    ) => {
      const response = await request(endpoint);
      setInfoPoke(response.data);
    };
    if (!location.state) {
      getPoke();
    } else {
      setInfoPoke(location.state);
    }
  }, [location, id]);

  return (
    <>
      {!infoPoke && <Spinner />}
      {infoPoke && (
        <div className="container">
          <CardPokemon id={id} infoPoke={infoPoke} />

          <NavInfoPoke infoPoke={infoPoke} />
        </div>
      )}
    </>
  );
};
