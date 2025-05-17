import logo from "../../../../public/logo-utnegger.jpg"
import iconMenu from "../../../../public/icon-menu.svg"
import iconClose from "../../../../public/icon-close.svg"
import "./headerPhone.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const HeaderPhone = () => {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    return (
        <div className="cont-header-phone">
            <div className="bg-black text-white py-4 flex items-center justify-evenly relative">
                {/* Línea naranja superior */}
                <div className="h-1 w-full bg-orange-600 absolute top-0 left-0"></div>

                {/* Logo y nombre del gimnasio */}
                <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { navigate("/") }}>
                    {/* <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      G
                    </div> */}
                    <img src={logo} alt="" className="flex items-center gap-2.5 w-10 h-10" />
                    <h1 className="logo text-xl font-bold">UTNegger</h1>
                </div>

                <img onClick={()=>{setVisible(true)}} src={iconMenu}  alt="" />

                <nav className="nav-headerphone" style={{display: visible ? "flex" : "none"}}>
                    <button onClick={()=>{setVisible(false)}} className="button-x" ><img src={iconClose} alt="" /></button>
                <ul className="flex flex-col gap-6 list-none items-center">
            <li className="px-2">
                <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300" onClick={()=>{navigate("/")}}>
                    Inicio
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
            </li>
            <li className="px-2">
                <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300" onClick={()=>{navigate("/shifts")}}>
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
            <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300" onClick={()=>{navigate("/contact")}}>
                    Contacto
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
            </li>
          </ul>
                </nav>
            </div>

        </div>
    )
}

export default HeaderPhone;