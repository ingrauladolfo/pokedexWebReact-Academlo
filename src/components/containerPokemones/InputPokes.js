import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

export default function CustomizedInputBase({
  hadleInputChange,
  valueInputText,
}) {
  return (
    <Paper component="form">
      <SearchIcon />

      <InputBase
        type="text"
        value={valueInputText}
        placeholder="Search by name"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={hadleInputChange}
      />
    </Paper>
  );
}
