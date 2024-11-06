import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="max-w-screen-xl mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
