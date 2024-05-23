/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
import Logo from "../../../images/mountain.png";
import { Link, NavLink, OutLet } from "react-router-dom";
import { getCookie } from "../../../helpers/cookie";
import { useSelector } from "react-redux";

const Header = (props) => {
  const navLinkActive = (e) => {
    return e.isActive ? "menu_link active" : "menu_link";
  };
  const token = getCookie("token");
  const isLogin = useSelector((state) => state.loginReducer);
  console.log(isLogin);

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
                    Tin tức chung
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/meeting-scheduled" className={navLinkActive}>
                    Đăng ký lịch họp
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/notification" className={navLinkActive}>
                    Thông báo
                  </NavLink>
                </li>
                <li>
                <NavLink to="/userInfo" className={navLinkActive}>
                  Hồ sơ
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
        </div>
      </div>
    </>
  );
};

export default Header;
