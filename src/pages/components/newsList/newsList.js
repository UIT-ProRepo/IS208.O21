import { useEffect, useState } from "react";
import "./newsList.css";
import { getListNews } from "../../../services/newService";
import { getCookie, setCookie } from "../../../helpers/cookie";
import swal from "sweetalert";
function NewsList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await getListNews();
      setData(response);
      HPBDModal();
    };
    fetchNews();
  }, []);

  const countHPBD = getCookie("happy_birthday");
  const Name = getCookie("name");
  const HPBDModal = () => {
    if (countHPBD == 1000) {
      swal({
        title: "Chúc mừng sinh nhật",
        text: `Chúc mừng sinh nhật ${Name}!, mong rằng bạn sẽ tiếp tục cố gắng cống hiến cho ELEVEN`,
        icon: "info",
        button: "OK!",
      });
      setCookie("happy_birthday", 1, 1);
      console.log("asdf");
    }
  };
  return (
    <>
      <div className="backGround">
        <h1>Eleven & UIT</h1>
        <h2>Công nghệ vượt trội, dẫn đầu thị trường</h2>
      </div>
      <div className="wrapper">
        <div className="container">
          {data.map((item) => (
            <div className="new-item" key={item.id}>
              <img src={item.urlThumbnail} alt="Thông báo"></img>
              <div className="nofi">
                <span class="started">Getting Started</span>
                <h2>{item.title}</h2>
                <p className="content">{item.head_title}</p>
                <div className="timing">
                  <img
                    className="author"
                    src="https://static.ghost.org/v2.0.0/images/ghost.png"
                    alt="Người đăng"
                  ></img>
                  <span className="author_Name">Ghost</span>
                  <span className="min_read">2 phút đọc</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default NewsList;
