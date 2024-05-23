import Request from "./request";
import RequestList from "./requestList/requestList";
import { useState } from "react";

function RequestUser() {
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };
  return (
    <>
      <div style={{ display: "flex", marginBottom: "12px" }}>
        <Request onReload={handleReload} />
        <RequestList reload={reload} />
      </div>
    </>
  );
}

export default RequestUser;
