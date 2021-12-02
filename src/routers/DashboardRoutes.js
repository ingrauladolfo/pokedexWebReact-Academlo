import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Pokedex } from "../components/containerPokemones/Pokedex";
import { ContainerPokemon } from "../components/pokemon/ContainerPokemon";
import { EncountersPoke } from "../components/pokemon/EncountersPoke";
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/pokedex" component={Pokedex} />

        <Route exact path="/pokedex/pokemon/:id" component={ContainerPokemon} />

        <Route
          exact
          path="/pokedex/pokemon/:id/encounters"
          component={EncountersPoke}
        />

        <Redirect to="/pokedex" />
      </Switch>
    </>
  );
};
