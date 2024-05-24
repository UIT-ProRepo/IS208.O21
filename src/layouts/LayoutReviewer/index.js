import { Outlet } from "react-router-dom";
import Footer from "../../pages/components/footer/footer";
import Header from "../../pages/components/header-reviewer/header";
import { getCookie } from "../../helpers/cookie";

function Layout() {
  const token = getCookie("token");
  return (
    <>
      <div className="Layout-default">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
