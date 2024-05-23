import React, { useEffect, useState } from "react";
import "./request.css";

import { MdOutlineLogout } from "react-icons/md";
import { getCookie } from "../../../helpers/cookie";
import { createRequest } from "../../../services/requestService";
import { getDateStringFormat } from "../../../utils/date";

const Request = (props) => {
  const { onReload } = props;
  const [scope, setScope] = useState("");
  const [content, setContent] = useState("");
  const DAY = getDateStringFormat();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newSched = {
      date_sent: DAY,
      hashId_user: getCookie("hashId"),
      scope,
      content,
      status: "Chưa gửi",
    };
    const res = await createRequest(newSched);
    onReload();
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="request">
          <h1>Gửi yêu cầu</h1>
          <form onSubmit={handleSubmit} className="meetingRegistration">
            <div className="form-group">
              <label
                htmlFor="room"
                style={{
                  fontSize: "20px",
                  fontWeight: "650",
                  marginLeft: "40px",
                }}
                required
              >
                Phạm vi
              </label>
              <select
                id="room"
                value={scope}
                onChange={(event) => setScope(event.target.value)}
                style={{
                  width: "380px",
                  marginLeft: "35px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                  padding: "15px",
                }}
                required
              >
                <option value="">Chọn phạm vi</option>
                <option value="Xin nghỉ phép">Xin nghỉ phép</option>
                <option value="Xin nghỉ thai sản">Xin nghỉ thai sản</option>
                <option value="Xin nghỉ việc">Xin nghỉ việc</option>
                <option value="Xin chuyển đơn vị công tác">
                  Xin chuyển đơn vị công tác
                </option>
                <option value="Vấn đề nội bộ">Vấn đề nội bộ</option>
                <option value="Vấn đề kỹ thuật">
                  Vấn đề kỹ thuật (Lỗi mạng, lỗi trang, lỗi bảo mật...)
                </option>
                <option value="Khác">Khác</option>
              </select>
            </div>
            <div className="form-group">
              <label
                htmlFor="department"
                style={{
                  fontSize: "20px",
                  fontWeight: "650",
                  marginLeft: "40px",
                  width: "200px",
                }}
              >
                Nội dung chi tiết:
              </label>
              <input
                type="text"
                id="department"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                style={{
                  width: "380px",
                  marginLeft: "35px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                  height: "85px",
                }}
                required
              />
            </div>
            <div style={{ display: "flex", marginRight: "40px" }}>
              <button type="submit">Đăng ký</button>
              <button>
                <MdOutlineLogout /> Huỷ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Request;
