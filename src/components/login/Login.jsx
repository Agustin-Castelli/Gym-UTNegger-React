import { useRef, useState } from "react"
import "./login.css"
import { API_BASE_URL } from "../../api"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { modeContext } from "../../context/ModeContext"


const Login = () => {

    const navigate = useNavigate()

    const mailRef = useRef(null)
    const passRef = useRef(null)

    const { mode } = useContext(modeContext)

    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [viewPass, setViewPass] = useState(false)

    const handlerChangeMail = (e) => {
        setMail(e.target.value)
        mailRef.current.style.backgroundColor = "white"

    }

    const handlerChangePass = (e) => {
        setPass(e.target.value)
        passRef.current.style.backgroundColor = "white"

    }

    const handlerRegister = () => {
        navigate("/register")
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()
        let error = false
        if (mail == "") {
            mailRef.current.style.backgroundColor = "red"
            error = true
        }

        if (pass == "") {
            passRef.current.style.backgroundColor = "red"
            error = true
        }

        if (error)
            return null;


        try {
            const res = await fetch(`${API_BASE_URL}/Authentication/authenticate`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email: mail,
                        password: pass
                    })
                }
            )

            if (!res.ok)
                throw new Error("Error Inesperado")

            const token = await res.text()
            localStorage.setItem("tokenGYM", token)
            navigate("/")

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={`div-login ${mode ? "div-login-dark" : ""}`}>
            <form className="form-login" onSubmit={handlerSubmit}>
                <h2 className="h2-login">Iniciar sesión</h2>
                <div className="div-de-divs-login">
                    <div className="div-interno-login">
                        <label htmlFor="input-login-mail" className="label-login">Email</label>
                        <input id="input-login-mail" className="input-login" ref={mailRef} value={mail} onChange={handlerChangeMail} type="text" placeholder="Ingrese su email aqui" />
                    </div>
                    <div className="div-interno-login">
                        <label htmlFor="input-login-pass" className="label-login">Contraseña</label>
                        <input id="input-login-pass" className="input-login" ref={passRef} value={pass} onChange={handlerChangePass} type={`${viewPass ? "text" : "password"}`} placeholder="**********" />
                        <div className="view-pass">
                            <input type="checkbox" id="view" value={viewPass} onChange={() => { setViewPass(!viewPass) }} className="checkbox-login" />
                            <label htmlFor="view">Mostrar Contraseña</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="button-login">Iniciar sesión</button>
                <div className="div-p-login"><p>No tenés cuenta?</p> <p className="click-aqui-login" onClick={handlerRegister}>Hacé click aquí</p></div>
            </form>
        </div>
    )
}
export default Login