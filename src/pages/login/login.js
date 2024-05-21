import React from "react";
import styles from "./login.module.css";
import Header from "../components/header/header";
import EmployeeList from "../employee/employeeList";

function handleClick() {
  console.log();
}

const login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      {/* <Header  /> */}
      <div style={{ display: "flex", marginTop: "60px" }}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Đăng nhập</h2>
          <label htmlFor="title1">Nhập mã nhân viên</label>
          <br />
          <input type="text" name="title1" placeholder="Mã nhân viên"></input>
          <br />
          <label htmlFor="pass">Nhập mật khẩu</label>
          <br />
          <input type="password" name="pass" placeholder="*********"></input>
          <button type="submit" onClick={handleClick}>
            Đăng nhập
          </button>
        </form>
        <img
          src="https://static.unica.vn/media/imagesck/1621050826_trach-nhiem-trong-cong-viec.jpg?v=1621050826"
          alt="logo"
          className={styles.logo}
        />
      </div>
      {/* <EmployeeList /> */}
    </div>
  );
};

export default login;
