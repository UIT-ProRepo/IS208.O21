import React from "react";
import styles from "./login.module.css";
import { getLogin } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";

function handleClick() {
  console.log();
}

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashId = e.target[0].value;
    const password = e.target[1].value;
    const response = await getLogin(hashId, password);

    if (response.length > 0) {
      console.log(response);
      setCookie("id", response[0].id, 1);
      setCookie("hashId", response[0].hashId, 1);
      setCookie("password", response[0].password, 1);
      setCookie("role", response[0].role, 1);
      setCookie("token", response[0].token, 1);
      if (response[0].role == "user" || response[0].role == "reviewer")
        navigate("/");
      else if (response[0].role == "admin") navigate("/admin");
    } else {
      alert("Khong tim thay tk hoac mk");
    }
  };

  return (
    <div>
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
}

export default Login;
