import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyPlant from "./components/MyPlant";
import Ofertas from "./components/Ofertas";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <MyPlant />
    <Ofertas />
  </React.StrictMode>
);
