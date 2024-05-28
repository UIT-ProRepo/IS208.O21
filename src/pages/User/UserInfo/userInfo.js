import { useEffect, useState } from "react";
import "./userInfo.css";
import { getCookie } from "../../../helpers/cookie";
import { getUserById, updateU } from "../../../services/userService";

function UserInfo() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [cccd, setCccd] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [reload, setReload] = useState(false);
  const [pass, setPass] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const userId = getCookie(`id`);
      const response = await getUserById(userId);
      setData(response);
      setLoading(false);
      if (response) {
        setCccd(response[0].ava_url);
        setPhone_number(response[0].phone_number);
        setPass(response[0].pass);
      }
    };
    fetchUser();
  }, [reload]);

  const handleReload = () => {
    setReload(!reload);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
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
      ...data[0],
      phone_number: phone_number,
      ava_url: cccd,
      password: pass
    };
    const res = await updateU(userId, profile);
    handleReload();
  };
  return (
    <div className="Info">
      <h1>THÔNG TIN NHÂN VIÊN</h1>
      <p className="note">
        *Chỉ được phép cập nhật số điện thoại, ảnh đại diện
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group" style={{ display: "flex" }}>
          <div>
            <label htmlFor="name">Họ tên</label>
            <input
              type="text"
              name="name"
              style={{ width: "250px" }}
              defaultValue={data[0].name || ""}
              readOnly
            />
          </div>

          <div>
            <label htmlFor="phone_number">Số điện thoại</label>
            <input
              type="text"
              name="phone_number"
              style={{ width: "250px" }}
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
          <div>
            <label htmlFor="pass">Mật khẩu</label>
            <input
              type="password"
              name="pass"
              style={{ width: "250px" }}
              // defaultValue={data[0].password}
              onChange={(event) => setPass(event.target.value)}
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
              style={{ width: "200px", marginRight: "100px" }}
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
              style={{ width: "250px" }}
              defaultValue={data[0].cccd}
              readOnly
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="ava"
              style={{ width: "200px", marginLeft: "100px" }}
            >
              Url ảnh đại diện
            </label>
            <input
              type="text"
              name="ava"
              style={{ width: "250px", marginLeft: "100px" }}
              defaultValue={data[0].ava_url}
              onChange={(event) => setCccd(event.target.value)}
            />
          </div>
          <img
            src={data[0].ava_url}
            alt="avatar"
            style={{
              width: "100px",
              height: "100px",
              marginLeft: "300px",
              marginTop: "10px",
              borderRadius: "999px",
            }}
          ></img>
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
