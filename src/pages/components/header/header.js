/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
import Combined from "../../../images/CombinedShape.jpg";
import Vector from "../../../images/Vector.jpg";
import Logo from "../../../images/Logo.jpg";
import { Link, NavLink, OutLet } from "react-router-dom";
const header = (props) => {
  const navLinkActive = (e) => {
    console.log(e);
    return e.isActive ? "menu_link active" : "menu_link";
  };

  return (
    <>
      <div className="header">
        <div className="navbar">
          <img src={Logo} alt="logo" className="logo" />
          <h1 className="name">ELEVEN</h1>
          <ul>
            <li>
              <NavLink to="/" className={navLinkActive}>
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/userInfo">Thông tin tài khoản</NavLink>
            </li>
            <li>
              <NavLink to="/notification" className={navLinkActive}>
                Thông báo
              </NavLink>
            </li>
            <li>
              <NavLink to="/request" className={navLinkActive}>
                Gửi yêu cầu
              </NavLink>
            </li>
          </ul>
          <div className="login_vec">
            <img src={Vector} alt="men" className="combined" />
            <img src={Combined} alt="men" className="combined" />
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
