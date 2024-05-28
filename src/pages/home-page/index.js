import React from "react";
import "./homepage.css";
import { Link, NavLink, OutLet } from "react-router-dom";
import NewsList from "../components/newsList/newsList";
import { getCookie, setCookie } from "../../helpers/cookie";
import swal from "sweetalert";
function HomePage() {
  
  const navLinkActive = (e) => {
    return e.isActive ? "menu_link active" : "menu_link";
  };

  
  return (
    <>
      <NewsList />
    </>
  );
}

export default HomePage;
