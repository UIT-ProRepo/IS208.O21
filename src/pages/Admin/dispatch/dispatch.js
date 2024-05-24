import React, { useEffect, useState } from "react";
import "./dispatch.css";
import { getCookie } from "../../../helpers/cookie";
import { get } from "../../../utils/request";
import { updateRequest } from "../../../services/requestService";

const Dispatch = (props) => {
  const [reload, setReload] = useState(false);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const fetchRequest = async () => {
      const response = await get("request");
      setRequest(response);
    };
    fetchRequest();
  }, [reload]);

  const handleReload = () => {
    setReload(!reload);
  };

  const statusCSS = (e) => {
    if (e == "Chưa gửi") return "notSend b";
    else if (e == "Đang chờ duyệt") return "waiting b";
    else if (e == "Chấp nhận") return "accept b";
    else if (e == "Từ chối") return "reject b";
  };

  const handleDispatch = async (request) => {
    var Dispatch = request;
    console.log(Dispatch);
    const updateField = { status: "Đang chờ duyệt" };
    const res = await updateRequest(Dispatch.id, updateField);
    handleReload();
  };

  const handleReject = (resquest) => {};

  const uHasdId = getCookie("hashId");
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "1280px",
        height: "578px",
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
      <h1>Danh sách yêu cầu</h1>
      <table>
        <thead>
          <tr>
            <th>Ngày gửi</th>
            <th>Mã nhân viên</th>
            <th>Phạm vi</th>
            <th>Nội dung yêu cầu</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {request
            .filter((resq) => {
              return resq.status == "Chưa gửi";
            })
            .map((request, index) => (
              <tr key={index}>
                <td>{request.date_sent}</td>
                <td>{request.hashId_user}</td>
                <td>{request.scope}</td>
                <td>{request.content}</td>
                <td>
                  <div className={statusCSS(request.status)}>
                    {request.status}
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex" }}>
                    <div
                      className="dispatchTo"
                      onClick={() => handleDispatch(request)}
                    >
                      Chuyển tiếp
                    </div>
                    <div
                      className="rejectNow"
                      onClick={() => handleReject(request, request.id)}
                    >
                      Từ chối
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dispatch;
