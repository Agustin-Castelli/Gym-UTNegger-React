import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">
        <Outlet /> {/* Esto renderizará las páginas */}
      </main>
      {/* Aquí podrías agregar un Footer si lo necesitas */}
    </div>
  );
};

export default Layout;