import React, { useEffect, useState } from "react";
import { request } from "../../utils/HttpMethod";
import { CardPoke } from "./CardPoke";
import CustomizedInputBase from "./InputPokes";
import { InputType } from "./InputType";
import { Pagination } from "./Pagination";
import { InputAmountPoke } from "./InputAmountPoke";
import "./conatinerPoke.css";
import TypeWriterEffect from 'react-typewriter-effect'
export const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [filterTypesPokemon, setfilterTypesPokemon] = useState([]);
  const [optionTypePoke, setOptionTypePoke] = useState(null);
  const [page, setPage] = useState(1);
  const [valueInputText, setValueInputText] = useState("");
  const [valueInputSelect, setValueInputSelect] = useState("All types...");
  const [amount, setAmount] = useState(4);

  const getPokes = async (
    endpoint = "https://pokeapi.co/api/v2/pokemon"
  ) => {
    const response = await request(endpoint);
    setAllPokemon(response.data.results);
    setFilterPokemon(response.data.results);
  };

  const getTypesPokes = async (endpoint = "https://pokeapi.co/api/v2/type") => {
    const response = await request(endpoint);
    setfilterTypesPokemon(response.data.results);
  };

  useEffect(() => {
    getPokes();
  }, []);

  useEffect(() => {
    getTypesPokes();
  }, []);

  useEffect(() => {
    const getTypesPokes = async (endpoint) => {
      const response = await request(endpoint);
      const listPoke = response.data.pokemon.map((p) => p.pokemon);
      setFilterPokemon(listPoke);
    };
    if (optionTypePoke) getTypesPokes(optionTypePoke.url);
    else setFilterPokemon(allPokemon);
  }, [optionTypePoke, allPokemon]);

  const CardPokemon = filterPokemon
    .slice((page - 1) * amount, page * amount)
    .map((pokemon) => (
      <div className="col" key={pokemon.name}>
        <CardPoke pokemon={pokemon} />
      </div>
    ));

  const pagesAmount = Math.ceil(filterPokemon.length / amount);

  const hadleInputChange = ({ target }) => {
    setValueInputSelect("All types...");
    const textSearch = target.value;
    setValueInputText(textSearch);
    if (textSearch.length >= 3)
      setFilterPokemon(
        allPokemon.filter((poke) => poke.name.includes(textSearch))
      );
    else setFilterPokemon(allPokemon);

    setPage(1);
  };

  const hadleInputTypePoke = (e) => {
    setValueInputText("");

    const type = e.target.value;
    setValueInputSelect(type);
    const urlTypePoke = filterTypesPokemon.find((t) => t.name === type);
    setOptionTypePoke(urlTypePoke);
    setPage(1);
  };

  const hadleInputAmountPoke = (e) => {
    const amountPoke = e.target.value;
    setAmount(amountPoke);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-column bd-highlight mb-3">
        <h1>Pokemon</h1>

        <TypeWriterEffect 
                  multiText ={[
                    'Welcome trainer',
                    "Search a pokemon by name or type"
                  ]}
                  textStyle={{fontSize:"2rem", fontWeight: "700px", color:"tomato"}} 
                  cursorColor="black"
                  typeSpeed={100}
                  loop = 'true'
                  />

        <div className="input-name">
          <CustomizedInputBase
            hadleInputChange={hadleInputChange}
            valueInputText={valueInputText}
          />
        </div>
      </div>

      <div className="d-flex flex-row-reverse bd-highlight">
        <InputAmountPoke hadleInputAmountPoke={hadleInputAmountPoke} />
        <InputType
          hadleInputTypePoke={hadleInputTypePoke}
          filterTypesPokemon={filterTypesPokemon}
          valueInputSelect={valueInputSelect}
        />
      </div>

      <div className="container">
        <div className="row">{CardPokemon}</div>
      </div>

      <Pagination page={page} pagesAmount={pagesAmount} setPage={setPage} />
    </div>
  );
};
