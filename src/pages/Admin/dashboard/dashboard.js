import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { del, get } from "../../../utils/request";
import Modal from "./components/updateModal/modal";
import { deleteU } from "../../../services/userService";
import CreateModal from "./components/createModal/createModal";
import { FaPlus } from "react-icons/fa";
const Dashboard = (props) => {
  const [reload, setReload] = useState(false);
  const [users, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [ID, setID] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await get("users");
      setUser(response);
    };
    fetchUsers();
  }, [reload]);

  const handleReload = () => {
    setReload(!reload);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };
  const roleLabel = (role) => {
    if (role === "user") return "Nhân viên";
    if (role === "admin") return "Quản trị (Admin)";
    return "Người kiểm duyệt";
  };
  const statusCSSU = (e) => {
    if (e == "admin") return "notDelete";
    else return "update";
  };

  const statusCSSD = (e) => {
    if (e == "admin") return "notDelete";
    else return "delete";
  };

  const checkRoleU = (e) => {
    if (e == "admin") return "NULL";
    else return "Sửa";
  };

  const checkRoleD = (e) => {
    if (e == "admin") return "NULL";
    else return "Xóa";
  };
  const handleUpdateUser = async (user) => {
    if (user.role !== "admin") {
      setSelectedEmployee(user);
      setID(user.id);
      setShowModal(true);
      handleReload();
    }
  };

  const handleDeleteUser = async (user) => {
    if (user.role !== "admin") {
      const user_id = user.id;
      const res = await deleteU(user_id);
      handleReload();
    }
  };
  const handleCreateUser = () => {
    setShowCreateModal(true);
    handleReload();
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "1500px",
        minHeight: "578px",
        marginTop: "20px",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "30px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1>Danh sách nhân viên</h1>
      <button
        style={{
          margin: "20px",
          height: "40px",
          width: "260px",
        }}
        onClick={handleCreateUser}
      >
        <FaPlus /> Thêm nhân viên
      </button>
      <table>
        <thead>
          <tr>
            <th>Mã nhân viên</th>
            <th>Ảnh đại diện</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Mã căn cước công dân</th>
            <th>Phân quyền</th>
            <th>Ngày sinh</th>
            <th>Mật khẩu</th>
            <th>Giới tính</th>
            <th>Sửa thông tin</th>
            <th>Xóa tài khoản</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index} style={{ textAlign: "center" }}>
              <td>{users.hashId}</td>
              <td>
                <img
                  src={users.ava_url}
                  style={{
                    borderRadius: "999px",
                    width: "90px",
                    marginLeft: "15px",
                  }}
                  alt="ảnh đại diện"
                ></img>
              </td>
              <td>{users.name}</td>
              <td style={{ width: "150px" }}>{users.phone_number}</td>
              <td>{users.cccd}</td>
              <td>{roleLabel(users.role)}</td>
              <td>{users.dateOfBirth}</td>
              <td>{users.password}</td>
              <td>{users.gender}</td>
              <td>
                <div
                  className={statusCSSU(users.role)}
                  onClick={() => handleUpdateUser(users)}
                >
                  {checkRoleU(users.role)}
                </div>
              </td>
              <td>
                <div
                  className={statusCSSD(users.role)}
                  onClick={() => handleDeleteUser(users)}
                >
                  {checkRoleD(users.role)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        employee={selectedEmployee}
        iD={ID}
        onReload={handleReload}
        reload={reload}
      />
      <CreateModal
        show={showCreateModal}
        handleClose={handleCloseCreateModal}
        onReload={handleReload}
        reload={reload}
        users={users}
      />
    </div>
  );
};

export default Dashboard;
