import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//API
import Api from "../../services/api";

//Util
// import { getMaster } from "../../components/util";

//Components
import { Arrow } from "../../components/Icons";
import { Button } from "../../components";

//Images
import Darth from "../../images/darth-vader.png";
import Luke from "../../images/luke-skywalker.png";

//CSS
import "./index.css";

function Master() {
  const [Theme, setTheme] = useState("light");
  const [master, setMaster] = useState({});

  const clearMaster = () => {
    setMaster({});
  };

  const getMaster = (id) => {
    clearMaster();
    const response = Api.get(`/people/${id}`)
      .then((resp) => {
        return resp.data;
      })
      .catch((err) => {
        console.clear();
        console.log("Erro: ", err);
      });
    if (!master.name) {
      console.log("Master:", master);
      console.log("rsp: ", response.then());
      setMaster(response.then());
    }
    return response;
  };
  return (
    <div className={`master theme-${Theme === "dark" ? "dark" : "light"}`}>
      <header className="master__header">
        <NavLink
          exact
          to="/"
          title="Voltar Para a Tela Inicial"
          alt="Voltar Para a Tela Inicial"
        >
          <Arrow color={Theme === "dark" ? "#ffffff" : "#2a2a2a"} /> Back
        </NavLink>
      </header>

      <div className="perfil-container">
        <Button
          type="button"
          name="choose your path again, Padawan"
          style="btn-refresh"
          fn={() => {
            // Theme === "light" ? setTheme("dark") : setTheme("light");
            getMaster("1");
            getMaster("4");
          }}
        />
        <figure className="perfil-container--avatar">
          <img src={Theme === "dark" ? Darth : Luke} alt="" />
        </figure>

        <p className="perfil-container--name">
          Your master is <strong>{master.name}</strong>
        </p>
      </div>
    </div>
  );
}

export default Master;
