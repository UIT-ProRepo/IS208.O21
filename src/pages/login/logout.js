import { useNavigate } from "react-router-dom";
import { deleteAllCookie } from "../../helpers/cookie";
import { useEffect } from "react";

function Logout() {
  const navigate = useNavigate();
  deleteAllCookie();

  useEffect(() => {
    navigate("/login");
  });
  return <></>;
}

export default Logout;
