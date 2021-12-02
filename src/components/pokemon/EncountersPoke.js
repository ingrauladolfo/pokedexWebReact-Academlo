import { Button, capitalize, Chip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { request } from "../../utils/HttpMethod";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import red from "@material-ui/core/colors/red";
import { Spinner } from "../spinner/Spinner";
import { Pagination } from "../containerPokemones/Pagination";
export const EncountersPoke = ({ history }) => {
  const [location, setLocation] = useState(null);
  const [infoPoke, setInfoPoke] = useState(null);
  const [pokeName, setPokeName] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(null);

  const amount = 8;

  const { id } = useParams();

  const locationInfo = useLocation();

  const getLocationArea = (locationArea) => {
    const arrLocArea = locationArea
      .split("-")
      .filter((str) => str.toLowerCase() !== "area");
    return {
      key: locationArea,
      region: arrLocArea[0],
      area: arrLocArea.slice(1, arrLocArea.length).join(" "),
    };
  };

  useEffect(() => {
    const getPoke = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`
    ) => {
      const response = await request(endpoint);
      setInfoPoke(response.data);
      setPokeName(capitalize(response.data.name));
    };
    if (locationInfo.state) {
      setInfoPoke(locationInfo.state);
      setPokeName(capitalize(locationInfo.state.name));
    } else {
      getPoke();
    }
  }, [locationInfo, id]);

  useEffect(() => {
    const getEncounters = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
    ) => {
      const response = await request(endpoint);
      const locArea = response.data.map((loc) =>
        getLocationArea(loc.location_area.name)
      );

      setLocation(locArea);
      setPagesAmount(Math.ceil(locArea.length / amount));
    };
    if (id) {
      getEncounters();
    }
  }, [id]);

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="container">
      <div className="d-flex flex-row bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          <Button onClick={handleReturn}>
            <ArrowBackIcon style={{ fontSize: 35, color: red[600] }} />
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {!infoPoke && !location && <Spinner />}
        {infoPoke && location && (
          <div>
            <h3 className="card-title">{pokeName}</h3>
            <div className="d-flex justify-content-center mt-3">
              <img
                style={{ width: 250 }}
                src={infoPoke.sprites.other["official-artwork"].front_default}
                alt={infoPoke.name}
              />
            </div>

            {location.length > 0 ? (
              <div className="card border-light mx-3 my-3">
                <h5 className=" card-header card-title">Location</h5>

                <div className="card-body">
                  {location
                    .slice((page - 1) * amount, page * amount)
                    .map((loc) => (
                      <Chip
                        icon={<LocationOnIcon />}
                        key={loc.key}
                        label={`Region: ${capitalize(
                          loc.region
                        )} /  Area: ${capitalize(loc.area)}`}
                        style={{
                          color: "#fafafa",
                          background: "#e53935",
                          margin: 3,
                        }}
                      />
                    ))}
                </div>
                {pagesAmount > 1 && (
                  <Pagination
                    page={page}
                    pagesAmount={pagesAmount}
                    setPage={setPage}
                    pagesToSee={4}
                  />
                )}
              </div>
            ) : (
              <div className="alert alert-dark mt-3" role="alert">
                Not Found!!!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
