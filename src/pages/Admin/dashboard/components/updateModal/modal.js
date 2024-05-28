import React, { useEffect, useState } from "react";
import "./modal.css";
import { updateU } from "../../../../../services/userService";
import { get } from "../../../../../utils/request";

const Modal = ({ show, handleClose, employee, iD, onReload, reload }) => {
  const [employeeData, setEmployeeData] = useState([]);

  const handleChange = (event, fname) => {
    const value = event.target.value;
    setEmployeeData((prevData) => ({
      ...prevData,
      [fname]: value,
    }));
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await get(`users?id=${iD}`);
      setEmployeeData(response);
    };
    fetchUsers();
  }, []);

  const handleUpdateUser = async () => {
    const profile = {
      ...employeeData,
    };
    const updateF = { users: profile };
    // console.log(profile);
    const res = await updateU(employee.id, profile);
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
          Chỉnh sửa thông tin
        </h2>
        <p className="note">
          *Được phép cập nhật thông tin tài khoản của nhân viên ( Bao gồm phân
          quyền ), các admin không được sửa thông tin cho nhau
        </p>
        <form>
          <div style={{ display: "flex", margin: "0 auto" }}>
            <label>
              Họ tên
              <input
                type="text"
                defaultValue={employee.name}
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
                defaultValue={employee.phone_number}
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
                defaultValue={employee.hashId}
                style={{
                  width: "200px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                }}
                onChange={(event) => handleChange(event, "hashId")}
                readOnly
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
                <option value={employee.role}>
                  {roleLabel(employee.role)}
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
                <option value={employee.gender}>{employee.gender}</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </label>
            <label>
              Mật khẩu
              <input
                type="text"
                defaultValue={employee.password}
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
          <div style={{ display: "flex", margin: "20px" }}>
            <label>
              Ngày sinh:
              <input
                type="date"
                defaultValue={employee.dateOfBirth}
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
                defaultValue={employee.cccd}
                style={{
                  width: "200px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "25px",
                  textAlign: "center",
                }}
                onChange={(event) => handleChange(event, "cccd")}
              />
            </label>
            <label>
              Ảnh đại diện:
              <input
                type="text"
                defaultValue={employee.ava_url}
                style={{
                  width: "250px",
                  position: "relative",
                  left: "-30px",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
                onChange={(event) => handleChange(event, "ava_url")}
              />
            </label>
          </div>
          <div className="modal-buttons">
            <button
              type="button"
              className="save-btn"
              onClick={handleUpdateUser}
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

export default Modal;
