import { useNavigate } from "react-router-dom";
import logo from "../../../public/logo-utnegger.jpg"
const Header = () => {

  const navigate = useNavigate()



    return (
      <nav className="w-full">
        {/* Parte superior con línea naranja */}
        <div className="bg-black text-white py-4 flex items-center justify-center relative">
          {/* Línea naranja superior */}
          <div className="h-1 w-full bg-orange-600 absolute top-0 left-0"></div>
          
          {/* Logo y nombre del gimnasio */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={()=>{navigate("/")}}>
            {/* <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              G
            </div> */}
            <img src={logo} alt="" className="flex items-center gap-2.5 w-20 h-20"/>
            <h1 className="logo text-2xl font-bold">UTNegger</h1>
          </div>
        </div>
        
        {/* Barra de menú inferior */}
        <div className="bg-gray-800 px-[5%] py-2.5 flex justify-between">
          {/* Links de navegación */}
          <ul className="flex gap-6 list-none items-center">
            <li className="px-2">
                <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300">
                    Inicio
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
            </li>
            <li className="px-2">
                <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300">
                    Turnos
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
            </li>
            <li className="px-2">
                <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300">
                    Clases
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
            </li>
            <li className="px-2">
                <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300">
                    Sobre nosotros
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
            </li>
            <li className="px-2">
            <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300">
                    Contacto
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
            </li>
          </ul>
          
          {/* Botón de Login */}
          <button className="bg-orange-600 text-white px-5 py-2 rounded font-bold hover:bg-orange-700 transition-colors duration-300" onClick={()=>{navigate("/login")}}>
            Login
          </button>
        </div>
      </nav>
    );
  }
  
  export default Header;