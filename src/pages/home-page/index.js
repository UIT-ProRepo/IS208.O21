import React from "react";
import "./homepage.css";
import Combined from "../../images/CombinedShape.jpg";
import Vector from "../../images/Vector.jpg";
import Logo from "../../images/Logo.jpg";
import { Link, NavLink, OutLet } from "react-router-dom";

function HomePage() {
  const navLinkActive = (e) => {
    console.log(e);
    return e.isActive ? "menu_link active" : "menu_link";
  };
  return (
    <>
      home page
    </>
  );
}

export default HomePage;
