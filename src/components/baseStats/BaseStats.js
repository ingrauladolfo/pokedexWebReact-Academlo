import React from "react";

export const BaseStats = ({ stats }) => {
  return (
    <div className="stats">
      <div className="d-flex justify-content-between">
        <h6 className="card-subtitle mb-2 text-muted">HP:</h6>

        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: stats[0].base_stat }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {stats[0].base_stat}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <h6 className="card-subtitle mb-2 text-muted">Atk:</h6>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: stats[1].base_stat }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {stats[1].base_stat}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <h6 className="card-subtitle mb-2 text-muted">Def:</h6>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: stats[2].base_stat }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {stats[2].base_stat}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <h6 className="card-subtitle mb-2 text-muted">Spd:</h6>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: stats[5].base_stat }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {stats[5].base_stat}
          </div>
        </div>
      </div>
    </div>
  );
};
