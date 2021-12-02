import { Button, InputAdornment, InputBase } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./login.css";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {

    //To save the previously visited route
    const lastPath = localStorage.getItem("lastPath") || "/pokedex";

    dispatch({
      type: types.login,
      payload: {
        name: data.coach,
      },
    });
    history.replace(lastPath);
  };

  return (
    <div className="login login-body">
      <h1>Pokedemlo</h1>
   
    <div className="login login-body d-flex justify-content-center align-items-center">
      
      <form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
      <div className="mt-2">
        <InputBase
      className="title"
      placeholder="Trainer's name"
      type="text"
      name="coach"
      inputRef={register}
      required
      inputProps={{ "aria-label": "search", 'minLength': 3, 'maxLength':25 }}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle style={{backgroundColor:'red'}} />
            </InputAdornment>
          }
        />
      </div>

        <Button type="submit" size="large">
          <div
            className="pokeball"
            style={{ backgroundImage: "url('img/pokeball.png') " }}
          ></div>
        </Button>
        <hr style={{color:"white"}}></hr>
        
      </form>
    </div>
    </div>
  );
};
