import Meeting from "./meeting";
import MeetingList from "./components/meetinglist/meetinglist";
import { useState } from "react";

function Scheduled() {
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };
  return (
    <>
      <div style={{ display: "flex", marginBottom: "12px" }}>
        <Meeting onReload={handleReload} />
        <MeetingList reload={reload} />
      </div>
    </>
  );
}

export default Scheduled;
