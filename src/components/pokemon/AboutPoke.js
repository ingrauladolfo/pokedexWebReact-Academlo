import { Chip } from "@material-ui/core";
import React from "react";
import HeightIcon from "@material-ui/icons/Height";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import GradeIcon from "@material-ui/icons/Grade";
import { capitalize } from "../../utils/capitalize";

export const AboutPoke = ({ infoPoke }) => {
  return (
    <div>
      {infoPoke && (
        <div>
          <div className="d-flex justify-content-center row">
            <div
              className="card col border-light mx-3 my-3"
              style={{ minWidth: 288 }}
            >
              <h5 className=" card-header card-title">Height</h5>

              <div className="card-body">
                <Chip
                  icon={<HeightIcon />}
                  label={`${infoPoke.height / 10} m`}
                  style={{ color: "#fafafa", background: "#e53935" }}
                />
              </div>
            </div>
            <div
              className="card col border-light mx-3 my-3"
              style={{ minWidth: 288 }}
            >
              <h5 className=" card-header card-title">Weight</h5>

              <div className="card-body">
                <Chip
                  icon={<FitnessCenterIcon />}
                  label={`${infoPoke.weight / 10} kg`}
                  style={{ color: "#fafafa", background: "#e53935" }}
                />
              </div>
            </div>
            <div
              className="card col border-light mx-3 my-3"
              style={{ minWidth: 288 }}
            >
              <h5 className=" card-header card-title">Order</h5>

              <div className="card-body">
                <Chip
                  icon={<LabelImportantIcon />}
                  label={infoPoke.order}
                  style={{ color: "#fafafa", background: "#e53935" }}
                />
              </div>
            </div>
            <div
              className="card col border-light mx-3 my-3"
              style={{ minWidth: 288 }}
            >
              <h5 className=" card-header card-title">Abilities</h5>

              <div className="card-body">
                {infoPoke.abilities.map((a) => (
                  <Chip
                    icon={<GradeIcon />}
                    key={a.ability.name}
                    label={capitalize(a.ability.name)}
                    style={{
                      color: "#fafafa",
                      background: "#e53935",
                      margin: 3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
