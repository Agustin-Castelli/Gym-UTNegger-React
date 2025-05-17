import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Frases from "../frases/Frases";
import MediaQuery from "react-responsive";
import HeaderPhone from "../header/headerPhone/HeaderPhone";
import OscureButton from "../oscureButton/oscureButton";
import { useContext } from "react";
import { modeContext } from "../../context/ModeContext";


const Layout = () => {
  const {mode} = useContext(modeContext)
  return (
    <div className="min-h-screen flex flex-col">

      

      <MediaQuery minWidth={750}>
      <Header/>
      </MediaQuery>

      <MediaQuery maxWidth={750}>
        <HeaderPhone/>
      </MediaQuery>

      <main className={`flex-grow ${mode?"bg-black":""}`}>
        <Outlet /> {/* Esto renderizará las páginas */}
      </main>
      {/* Aquí podrías agregar un Footer si lo necesitas */}
      <Frases/>
      <Footer/>
      
    </div>
  );
};

export default Layout;