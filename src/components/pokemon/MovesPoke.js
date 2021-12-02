import React, { useState } from "react";
import { Chip } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Pagination } from "../containerPokemones/Pagination";
import { capitalize } from "../../utils/capitalize";

export const MovesPoke = ({ infoPoke }) => {
  const [page, setPage] = useState(1);

  const amount = 20;
  const pagesAmount = Math.ceil(infoPoke.moves.length / amount);

  const moves = infoPoke.moves
    .slice((page - 1) * amount, page * amount)
    .map((m) => (
      <Chip
        icon={<CheckCircleIcon />}
        key={m.move.name}
        label={capitalize(m.move.name)}
        style={{
          color: "#fafafa",
          background: "#e53935",
          margin: 3,
        }}
      />
    ));

  return (
    <div>
      <div className="d-flex justify-content-center">
        {infoPoke && infoPoke.moves.length > 0 ? (
          <div className="card border-light mb-3">
            <h5 className="card-header card-title">Moves</h5>
            <div className="card-body">{moves}</div>
            {pagesAmount > 1 && (
              <Pagination
                page={page}
                pagesAmount={pagesAmount}
                setPage={setPage}
                pagesToSee={6}
              />
            )}
          </div>
        ) : (
          <div className="alert alert-dark mt-3" role="alert">
            Not Found!!!
          </div>
        )}
      </div>
    </div>
  );
};
