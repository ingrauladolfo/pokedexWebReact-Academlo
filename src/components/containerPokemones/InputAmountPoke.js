import React from "react";

export const InputAmountPoke = ({ hadleInputAmountPoke }) => {
  const differentOptions = [4, 8, 12, 16, 20];
  const optionAmount = differentOptions.map((num) => (
    <option key={num}>{num}</option>
  ));

  return (
    <div className="d-flex align-items-end flex-column bd-highlight mb-3">
      <div className="p-2 bd-highlight">
        <div className="input-group">
          <select
            className="form-select "
            id="inputGroupSelect02"
            onChange={hadleInputAmountPoke}
          >
            {optionAmount}
          </select>
        </div>
      </div>
    </div>
  );
};
