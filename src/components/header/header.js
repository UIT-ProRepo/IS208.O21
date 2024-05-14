/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./header.module.css";
import Combined from "../../images/Combined-Shape.jpg";
import Vector from "../../images/Vector.jpg";
const header = (props) => {
  
  return (
    <>
      <div className="header">
        <div className={styles.navbar}>
          <img
            src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z7YiihsHZ2XRhd9b7FUYsBN62T28ryGZKylb-GcjvLa1PUwHfkvKDaJ8fg7PUjWsg5A1sycSiUOwna3~3pqKpFZ~tT--xCOyt6Wzygol72rk8lnsqA7NGwsf-fci87IKQPIDfM26zKO2P52Aqv-Wx3rHHCoCs6FD55TiKJz51oAHRrx9KKM~Z7OTZE6sSFUDxeocjY7PELcrhUvjzZq6CzardjojDjkfcQj5h7hE6s0qBRup~46MfyGRbhwcNWeaxMvppuYGXAv5RBlWFZxowZWPxqpWGC-hKqdo5fCGk4lsqXLirtMadU9t45yh3-WDX7hVsr1wkX-mEjBa5EodsQ__"
            alt="logo"
            className={styles.logo}
          />
          <h1 className={styles.name}>WAG</h1>
          <span>Trang chủ</span>
          <span>Danh mục</span>
          <span>Liên hệ</span>
          <span>Blog</span>
          <div className={styles.login_vec}>
            <img src={Vector} alt="men" className={styles.combined} />
            <img src={Combined} alt="men" className={styles.combined} />
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
