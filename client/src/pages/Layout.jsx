import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="bg-gray-200 max-w-screen-xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
