import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/PerfilUsers/Home";
import HomeAdmin from "./components/PerfilAdmin/HomeAdmin";
import AddHouseOfRent from "./components/PerfilAdmin/AddHouseOfRent";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/admin"} element={<HomeAdmin />} />
      <Route exact path={"/admin/addHRent"} element={<AddHouseOfRent />} />
      </Routes>
    </div>
  );
}

export default App;
