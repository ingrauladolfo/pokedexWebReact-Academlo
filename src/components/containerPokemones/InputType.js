import React from "react";

export const InputType = ({
  hadleInputTypePoke,
  filterTypesPokemon,
  valueInputSelect,
}) => {
  const optionTypes = filterTypesPokemon.map((type) => (
    <option key={type.name}>{type.name}</option>
  ));

  return (
    <div className="d-flex align-items-end flex-column bd-highlight mb-3">
      <div className="p-2 bd-highlight">
        <div className="input-group">
          <select
            value={valueInputSelect}
            className="form-select "
            id="inputGroupSelect02"
            onChange={hadleInputTypePoke}
          >
            <option>All types...</option>
            {optionTypes}
          </select>
        </div>
      </div>
    </div>
  );
};
