import React, { useEffect, useState } from "react";
import "./createModal.css";
import { createU, updateU } from "../../../../../services/userService";
import { get } from "../../../../../utils/request";
import { generateToken } from "../../../../../helpers/generateToken";

const CreateModal = ({ show, handleClose, onReload, reload,users }) => {
  const [employeeData, setEmployeeData] = useState([]);

  const handleChange = (event, fname) => {
    const value = event.target.value;
    setEmployeeData((prevData) => ({
      ...prevData,
      [fname]: value,
      ava_url : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
    }));
  };

  

  const handleCreateUser = async () => {
    const profile = {
      ...employeeData,
      scheduled_meeting: [],
      token: generateToken(),
      id: users.length +1 ,
    };
    const res = createU(profile);
    console.log(profile);
    onReload();
    handleClose();
  };

  if (!show) {
    return null;
  }
  const roleLabel = (role) => {
    if (role === "user") return "Nhân viên";
    if (role === "admin") return "Quản trị (Admin)";
    return "Người kiểm duyệt";
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2
          style={{
            textAlign: "center",
            fontSize: "37px",
            marginBottom: "20px",
          }}
        >
          Thêm mới nhân viên
        </h2>
        <form>
          <div style={{ display: "flex", margin: "0 auto" }}>
            <label>
              Họ tên
              <input
                type="text"
                style={{
                  width: "220px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                }}
                onChange={(event) => handleChange(event, "name")}
              />
            </label>
            <label>
              Số điện thoại
              <input
                type="text"
                name="phone"
                style={{
                  width: "200px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                }}
                onChange={(event) => handleChange(event, "phone_number")}
              />
            </label>
            <label>
              Mã nhân viên
              <input
                type="text"
                
                style={{
                  width: "200px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                }}
                onChange={(event) => handleChange(event, "hashId")}
              />
            </label>
          </div>
          <div style={{ display: "flex", margin: "0 auto" }}>
            <label style={{ color: "red", position: "relative", left: "17px" }}>
              Phân quyền
              <br />
              <select
                id="role"
                style={{
                  width: "200px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                  marginRight: "40px",
                  border: "1px solid red",
                  height: "40px",
                  marginTop: "16px",
                  marginLeft: "42px",
                }}
                onChange={(event) => handleChange(event, "role")}
              >
                <option value="">
                  Chọn phân quyền
                </option>
                <option value="user">Nhân viên</option>
                <option value="admin">Quản trị</option>
                <option value="reviewer">Người kiểm duyệt</option>
              </select>
            </label>
            <label>
              Giới tính:
              <select
                id="role"
                style={{
                  width: "200px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                  marginRight: "40px",
                  border: "1px solid black",
                  height: "40px",
                  marginTop: "16px",
                  marginLeft: "42px",
                }}
                onChange={(event) => handleChange(event, "gender")}
              >
                <option value="">Chọn giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </label>
            <label>
              Mật khẩu
              <input
                type="text"
                style={{
                  width: "200px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                }}
                onChange={(event) => handleChange(event, "password")}
              />
            </label>
          </div>
          <div style={{ display: "flex", margin: "20px auto" }}>
            <label>
              Ngày sinh:
              <input
                type="date"
                style={{
                  width: "300px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                }}
                onChange={(event) => handleChange(event, "dateOfBirth")}
              />
            </label>
            <label>
              Mã căn cước công dân:
              <input
                type="text"
                style={{
                  width: "400px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                  textAlign: "center",
                }}
                onChange={(event) => handleChange(event, "cccd")}
              />
            </label>
          </div>
          <div className="modal-buttons">
            <button
              type="button"
              className="save-btn"
              onClick={handleCreateUser}
            >
              Lưu
            </button>
            <button type="button" className="close-btn" onClick={handleClose}>
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
