import "./unserInfo.css";

function UserInfo() {
  return (
    <>
      <div className="Info">
        <h1>THÔNG TIN NHÂN VIÊN</h1>
        <p className="note">
          *Được phép cập nhật ảnh, số điện thoại, địa chỉ, ngày sinh
        </p>
        <form className="form">
          <div className="form-group">
            <label>Họ tên</label>
            <input type="text" defaultValue="Le Dat" />
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input type="text" defaultValue="0399915439" />
          </div>
          <div className="form-group">
            <label>Giới tính</label>
            <input type="text" defaultValue="Nam" />
          </div>
          <div className="form-group">
            <label>Địa chỉ</label>
            <input type="text" defaultValue="HCMC" />
          </div>
          <div className="form-group">
            <label>Ngày sinh</label>
            <input type="date" defaultValue="2024-05-07" />
          </div>
          <div className="form-group">
            <label>Chọn ảnh</label>
            <input type="file" />
          </div>
          <div className="form-group">
            <label>Phòng ban</label>
            <input type="text" defaultValue="Nhân sự" disabled />
          </div>
          <div className="form-group">
            <label>Địa chỉ email</label>
            <input type="email" defaultValue="tiendat@gmail.com" disabled />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input type="password" defaultValue="••••••••" disabled />
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
    </>
  );
}

export default UserInfo;
