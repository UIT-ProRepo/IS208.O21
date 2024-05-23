import { useEffect, useState } from "react";
import "./userInfo.css";
import { getCookie } from "../../../helpers/cookie";
import { getUserById, updateU } from "../../../services/userService";

function UserInfo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cccd, setCccd] = useState("");
  const [phone_number, setPhone_number] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const userId = getCookie(`id`);
      const response = await getUserById(userId);
      setData(response);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data[0]);
  if (!data || data.length === 0) {
    return <div>No user data available</div>;
  }

  const roleLabel = (role) => {
    if (role === "user") return "Nhân viên";
    if (role === "admin") return "Quản trị (Admin)";
    return "Người kiểm duyệt";
  };

  const handleSubmit = async (event) => {
    const userId = getCookie("id");
    event.preventDefault();
    const profile = {
      phone_number: phone_number,
      cccd: cccd,
    };
    const res = await updateU(userId, profile);
  };
  return (
    <div className="Info">
      <h1>THÔNG TIN NHÂN VIÊN</h1>
      <p className="note">
        *Chỉ được phép cập nhật số điện thoại, căn cước công dân
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group" style={{ display: "flex" }}>
          <div>
            <label htmlFor="name">Họ tên</label>
            <input
              type="text"
              name="name"
              style={{ width: "400px" }}
              defaultValue={data[0].name || ""}
              readOnly
            />
          </div>

          <div>
            <label htmlFor="phone_number">Số điện thoại</label>
            <input
              type="text"
              name="phone_number"
              style={{ width: "400px" }}
              defaultValue={data[0].phone_number}
              onChange={(event) => setPhone_number(event.target.value)}
            />
          </div>

          <div>
            <label style={{ marginLeft: "30px" }} htmlFor="gender">
              Giới tính
            </label>
            <input
              type="text"
              style={{ width: "250px" }}
              name="gender"
              defaultValue={data[0].gender}
              readOnly
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="form-group">
            <label htmlFor="birth">Ngày sinh</label>
            <input
              type="date"
              name="birth"
              style={{ width: "500px" }}
              defaultValue={data[0].dateOfBirth}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="pb">Phân quyền</label>
            <input
              type="text"
              name="pb"
              style={{ width: "500px" }}
              defaultValue={roleLabel(data[0].role)}
              readOnly
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="form-group">
            <label htmlFor="hashId">Mã nhân viên</label>
            <input
              type="text"
              style={{ width: "400px", marginRight: "100px" }}
              name="hashId"
              defaultValue={data[0].hashId}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="cccd">Mã căn cước công dân</label>
            <input
              type="text"
              name="cccd"
              style={{ width: "500px" }}
              defaultValue={data[0].cccd}
              onChange={(event) => setCccd(event.target.value)}
            />
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn-update">
            Cập nhật thông tin
          </button>
          <button type="button" className="btn-cancel">
            Thoát
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
