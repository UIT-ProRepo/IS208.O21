import React, { useEffect, useState } from "react";
import "./requestList.css";
import { getCookie } from "../../../../helpers/cookie";
import { get } from "../../../../utils/request";

const RequestList = (props) => {
  const { reload } = props;
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const fetchRequest = async () => {
      const response = await get("request");
      setRequest(response);
    };
    fetchRequest();
  }, [reload]);

  const statusCSS = (e) => {
    if (e == "Chưa gửi") return "notSend b";
    else if (e == "Đang chờ duyệt") return "waiting b";
    else if (e == "Chấp nhận") return "accept b";
    else if (e == "Từ chối") return "reject b";
  };

  const uHasdId = getCookie("hashId");
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "930px",
        height: "578px",
        marginTop: "20px",
        marginRight: "30px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "15px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1>Danh sách yêu cầu</h1>
      <table>
        <thead>
          <tr>
            <th>Ngày gửi</th>
            <th>Phạm vi</th>
            <th>Nội dung yêu cầu</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {request
            .filter((resq) => {
              return resq.hashId_user == uHasdId;
            })
            .map((request, index) => (
              <tr key={index}>
                <td>{request.date_sent}</td>
                <td>{request.scope}</td>
                <td>{request.content}</td>
                <td><div className={statusCSS(request.status)}>{request.status}</div></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
