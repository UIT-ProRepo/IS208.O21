import React, { useState } from "react";
import "./meeting.css";
import MeetingList from "./components/meetinglist/meetinglist";
import { getCookie } from "../../../helpers/cookie";
const Meeting = () => {
  const [ngayHop, setNgayHop] = useState("");
  const [buoiHop, setBuoiHop] = useState("");
  const [phongHop, setPhongHop] = useState("");
  const [phongBanDangKy, setPhongBanDangKy] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      ngayHop,
      buoiHop,
      phongHop,
      phongBanDangKy,
    });
  };
   
  const id = getCookie("id");
  

  return (
    <>
      <div className="Meeting">
        <h1>Đăng ký lịch họp</h1>
        <form onSubmit={handleSubmit} className="meetingRegistration">
          <div className="form-group">
            <label htmlFor="ngayHop">Ngày họp:</label>
            <input
              type="date"
              id="ngayHop"
              value={ngayHop}
              onChange={(event) => setNgayHop(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="buoiHop">Buổi họp:</label>
            <select
              id="buoiHop"
              value={buoiHop}
              onChange={(event) => setBuoiHop(event.target.value)}
            >
              <option value="">Chọn buổi họp</option>
              <option value="sang">Sáng</option>
              <option value="chieu">Chiều</option>
              <option value="toi">Tối</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phongHop">Phòng họp:</label>
            <select
              id="phongHop"
              value={phongHop}
              onChange={(event) => setPhongHop(event.target.value)}
            >
              <option value="">Chọn phòng họp</option>
              <option value="PH1">Phòng họp A.105 (Tòa A)</option>
              <option value="PH2">Phòng họp A.205 (Tòa A )</option>
              <option value="PH3">Phòng họp E.802 ( Tòa E )</option>
              <option value="PH4">Phòng họp B.702 ( Tòa B )</option>
              <option value="PH5">Phòng họp B.412 ( Tòa B )</option>
              <option value="PH6">Phòng họp B.110 ( Tòa B )</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phongBanDangKy">Nội dung họp:</label>
            <input
              type="text"
              id="phongBanDangKy"
              value={phongBanDangKy}
              onChange={(event) => setPhongBanDangKy(event.target.value)}
            />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
      <MeetingList />
    </>
  );
};

export default Meeting;
