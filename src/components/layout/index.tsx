import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

function Layout() {
  return (
    <>
      <Header />

      {/* content of page */}
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
