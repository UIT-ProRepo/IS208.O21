import React, { useEffect, useState } from "react";
import "./meeting.css";
import MeetingList from "./components/meetinglist/meetinglist";
import { MdOutlineLogout } from "react-icons/md";
import { createScheduled } from "../../../services/scheduledService";
import { getCookie } from "../../../helpers/cookie";

const Meeting = (props) => {
  const { onReload } = props;
  const [date, setDate] = useState("");
  const [session, setSession] = useState("");
  const [room, setRoom] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async (event) => {
    const userId = getCookie("id");
    event.preventDefault();
    const newSched = {
      date,
      session,
      room,
      department,
    };
    const res = await createScheduled(userId, newSched);
    onReload();
  };

  return (
    <>
      <div style={{ display: "flex", marginBottom: "12px" }}>
        <div className="Meeting">
          <h1>Đăng ký lịch họp</h1>
          <form onSubmit={handleSubmit} className="meetingRegistration">
            <div className="form-group-1">
              <div style={{ marginLeft: "20px", marginRight: "200px" }}>
                <label
                  htmlFor="date"
                  style={{ fontSize: "20px", fontWeight: "650" }}
                >
                  Ngày họp:
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  style={{
                    padding: "20px",
                    borderRadius: "40px",
                    textAlign: "center",
                    height: "60px",
                    border: "2px solid #000",
                    width: "200px",
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="session"
                  style={{ fontSize: "20px", fontWeight: "650" }}
                >
                  Buổi họp:
                </label>
                <select
                  id="session"
                  value={session}
                  onChange={(event) => setSession(event.target.value)}
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    borderRadius: "30px",
                    border: "2px solid #000",
                  }}
                  required
                >
                  <option value="">Chọn buổi họp</option>
                  <option value="Sáng">Sáng</option>
                  <option value="Chiều">Chiều</option>
                  <option value="Tối">Tối</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="room"
                style={{
                  fontSize: "20px",
                  fontWeight: "650",
                  marginLeft: "40px",
                }}
              >
                Phòng họp:
              </label>
              <select
                id="room"
                value={room}
                onChange={(event) => setRoom(event.target.value)}
                style={{
                  width: "575px",
                  marginLeft: "35px",
                  borderRadius: "20px",
                  border: "2px solid #000",
                  padding: "15px",
                }}
                required
              >
                <option value="">Chọn phòng họp</option>
                <option value="Phòng họp A.105 (Tòa A)">
                  Phòng họp A.105 (Tòa A)
                </option>
                <option value="Phòng họp A.205 (Tòa A )">
                  Phòng họp A.205 (Tòa A )
                </option>
                <option value="Phòng họp E.802 ( Tòa E )">
                  Phòng họp E.802 ( Tòa E )
                </option>
                <option value="Phòng họp B.702 ( Tòa B )">
                  Phòng họp B.702 ( Tòa B )
                </option>
                <option value="Phòng họp B.412 ( Tòa B )">
                  Phòng họp B.412 ( Tòa B )
                </option>
                <option value="Phòng họp B.110 ( Tòa B )">
                  Phòng họp B.110 ( Tòa B )
                </option>
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
                Nội dung họp:
              </label>
              <input
                type="text"
                id="department"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                style={{
                  width: "575px",
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

export default Meeting;
