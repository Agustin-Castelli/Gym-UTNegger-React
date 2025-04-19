import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">
        <Outlet /> {/* Esto renderizará las páginas */}
      </main>
      {/* Aquí podrías agregar un Footer si lo necesitas */}
      <Footer/>
    </div>
  );
};

export default Layout;