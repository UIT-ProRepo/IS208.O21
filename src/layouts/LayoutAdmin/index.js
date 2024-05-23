import { Outlet } from "react-router-dom";
import Footer from "../../pages/components/footer/footer";
import Header from "../../pages/Admin/components/header/header"

function Layout() {
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
