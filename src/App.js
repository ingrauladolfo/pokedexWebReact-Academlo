import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";
import "./App.css";
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <div>
        <div className="img-conter">
          <div
            className="img-big"
            style={{ backgroundImage: "url(/img/pokeball-mag.png)" }}
          ></div>
        </div>
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
