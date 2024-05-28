import React from "react";
import styles from "./login.module.css";
import { getLogin } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import { getDateStringFormat } from "../../utils/date";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashId = e.target[0].value;
    const password = e.target[1].value;
    const response = await getLogin(hashId, password);

    if (response.length > 0) {
      console.log(response[0]); 
      setCookie("id", response[0].id, 1);
      setCookie("hashId", response[0].hashId, 1);
      setCookie("password", response[0].password, 1);
      setCookie("role", response[0].role, 1);
      setCookie("token", response[0].token, 1);
      setCookie("avatar", response[0].ava_url, 1);
      setCookie("name", response[0].name, 1);
      console.log(response[0].dateOfBirth, getDateStringFormat());
      if (response[0].dateOfBirth == getDateStringFormat()) {
        setCookie("happy_birthday", 1000, 1);
      }
      dispatch(checkLogin(true));

      if (response[0].role == "user") navigate("/");
      else if (response[0].role == "reviewer") navigate("/reviewer/homepage");
      else if (response[0].role == "admin") navigate("/admin/homepage");
    } else {
      alert("Không tìm thấy tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Đăng nhập</h2>
          <label
            htmlFor="title1"
            style={{ fontSize: "18px", fontWeight: "600" }}
          >
            Nhập mã nhân viên
          </label>

          <input
            type="text"
            name="title1"
            placeholder="Mã nhân viên"
            style={{ textAlign: "left" }}
          ></input>
          <br />
          <label htmlFor="pass" style={{ fontSize: "18px", fontWeight: "600" }}>
            Nhập mật khẩu
          </label>

          <input
            type="password"
            name="pass"
            placeholder="*********"
            style={{ textAlign: "left" }}
          ></input>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
