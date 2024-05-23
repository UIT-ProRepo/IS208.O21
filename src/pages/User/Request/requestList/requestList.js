import React, { useEffect, useState } from "react";
import "./requestList.css";
import { getCookie } from "../../../../../helpers/cookie";
import { getScheduledByUser } from "../../../../../services/scheduledService";

const MeetingSchedule = (props) => {
  const { reload } = props;
  const [scheduled, setScheduled] = useState([]);
  useEffect(() => {
    const fetchMeetingScheduled = async () => {
      const userId = getCookie(`id`);
      const response = await getScheduledByUser(userId);
      setScheduled(response);
    };
    fetchMeetingScheduled();
  }, [reload]);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "630px",
        height: "578px",
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1>Danh sách lịch họp</h1>
      <table>
        <thead>
          <tr>
            <th>Ngày họp</th>
            <th>Buổi họp</th>
            <th>Phòng họp</th>
            <th>Nội dung cuộc họp</th>
          </tr>
        </thead>
        <tbody>
          {scheduled.map((scheduled, index) => (
            <tr key={index}>
              <td>{scheduled.date}</td>
              <td>{scheduled.session}</td>
              <td>{scheduled.room}</td>
              <td>{scheduled.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingSchedule;
