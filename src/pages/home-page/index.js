import React from "react";
import "./homepage.css";
import { Link, NavLink, OutLet } from "react-router-dom";
import NewsList from "../components/newsList/newsList";

function HomePage() {
  const navLinkActive = (e) => {
    console.log(e);
    return e.isActive ? "menu_link active" : "menu_link";
  };


  return (
    <>
      <NewsList />
    </>
  );
}

export default HomePage;
