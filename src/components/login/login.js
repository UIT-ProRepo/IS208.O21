import React from "react";
import styles from "./login.module.css";
import Header from "../header/header";
// import Footer from "../footer/footer";

function handleClick(){
    
}

const login = () => {
  return (
    <div>
      <Header onClick = {handleClick} />
      <div style={{ display: "flex", marginTop : "60px"}}>
        <form className={styles.loginForm}>
          <h2 className={styles.title}>Đăng nhập</h2>
          <label htmlFor="title">Nhập mã nhân viên</label>
          <br />
          <input type="text" name="title" placeholder="Mã nhân viên"></input>
          <br />
          <label htmlFor="pass">Nhập mật khẩu</label>
          <br />
          <input type="password" name="pass" placeholder="*********"></input>
          <button type="submit">Đăng nhập</button>
        </form>
        <img
          src="https://static.unica.vn/media/imagesck/1621050826_trach-nhiem-trong-cong-viec.jpg?v=1621050826"
          alt="logo"
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export default login;
