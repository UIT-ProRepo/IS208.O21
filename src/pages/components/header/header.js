/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
import Combined from "../../../images/CombinedShape.jpg";
import Vector from "../../../images/Vector.jpg";
import Logo from "../../../images/Logo.jpg";
import { Link, NavLink, OutLet } from "react-router-dom";
import { getCookie } from "../../../helpers/cookie";

const header = (props) => {
  const navLinkActive = (e) => {
    return e.isActive ? "menu_link active" : "menu_link";
  };
  const token = getCookie("token");
  return (
    <>
      <div className="header">
        <div className="navbar">
          <img src={Logo} alt="logo" className="logo" />
          <h1 className="name">ELEVEN</h1>
          <ul>
            {token && (
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
            )}
            <li>
              {token ? (
                <>
                  <NavLink to="/logout" className="logout">
                    Đăng xuất
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="login">
                    Đăng nhập
                  </NavLink>
                </>
              )}
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
