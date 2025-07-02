import logo from "../../../../public/logo-utnegger.jpg"
import { IoClose } from "react-icons/io5";
import "./headerPhone.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { modeContext } from "../../../context/ModeContext"
import OscureButton from "../../oscureButton/oscureButton"
import { FiMenu } from "react-icons/fi";
import { userContext } from "../../../context/userContext";

const HeaderPhone = () => {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)

    const { mode } = useContext(modeContext)
    const { user } = useContext(userContext)


    const cerrarSesion = ()=>{
    
    
    //setRefreshHeader(!refreshHeader)
    console.log(user)
    localStorage.removeItem("tokenGYM")
    setTimeout(()=>{setUser({})},5000)
    //ReactDOM.createRoot().render()
    //root.render(nav)
    navigate(0)
  }

    return (
        <div className="cont-header-phone">
            <div className={`bg-${mode ? "black" : "white"} text-${mode ? "white" : "black"} border-b-4 py-4 flex items-center justify-evenly relative`}>
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

                <div className="text-2xl" onClick={() => { setVisible(true) }}> <FiMenu /> </div>

                <nav className="nav-headerphone" style={{ display: visible ? "flex" : "none" }}>
                    <button onClick={() => { setVisible(false) }} className="button-x" ><IoClose /></button>
                    <ul className="flex flex-col gap-6 list-none items-center">
                        <li className="px-2">
                            <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300" onClick={() => { navigate("/") }}>
                                Inicio
                                <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </button>
                        </li>
                        <li className="px-2">
                            <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300" onClick={() => { navigate("/shifts") }}>
                                Turnos
                                <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </button>
                        </li>
                        <li className="px-2">
                            <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300" onClick={() => { navigate("/clases") }}>
                                Clases
                                <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </button>
                        </li>
                        <li className="px-2">
                            <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300" onClick={() => navigate("/sobre-nosotros")}>
                                Sobre nosotros
                                <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </button>
                        </li>
                        <li className="px-2">
                            <button className="bg-transparent border-hidden py-3 relative group text-white font-medium hover:text-orange-600 transition-colors duration-300" onClick={() => { navigate("/contact") }}>
                                Contacto
                                <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                            </button>
                        </li>
                        <li> {/* Botón condicional */}
                            {user ? (
                                <div className="flex items-center justify-center flex-col gap-5" >
                                    <button
                                        className="flex items-center justify-end w-10 h-10 rounded-full bg-orange-600 text-white hover:w-32 hover:justify-start transition-all duration-300 overflow-hidden group"
                                        onClick={() => navigate("/loggedOn")}
                                    >
                                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2 pl-5">
                                            Mi Perfil
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="w-5 h-5 absolute mx-2.5 group-hover:relative group-hover:mr-0 group-hover:ml-2"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </button>
                                    <button type="button" className="bg-orange-600 text-white px-5 py-2 rounded font-bold hover:bg-orange-700 transition-colors duration-300" onClick={cerrarSesion}>
                                        Cerrar Sesión
                                    </button>
                                </div>

                            ) : (
                                <button className="bg-orange-600 text-white px-5 py-2 rounded font-bold hover:bg-orange-700 transition-colors duration-300" onClick={() => { navigate("/login") }}>
                                    Login
                                </button>
                            )}</li>
                        <li><OscureButton /></li>
                    </ul>
                </nav>
                <div className="contraparte-nav" style={{ display: visible ? "flex" : "none" }} onClick={() => { setVisible(false) }}></div>
            </div>
        </div>
    )
}

export default HeaderPhone;