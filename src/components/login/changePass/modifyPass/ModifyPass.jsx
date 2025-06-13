import { useState } from "react"
import "./modifyPass.css"
import { API_BASE_URL } from "../../../../api"
import { useContext } from "react"
import { modeContext } from "../../../../context/ModeContext"
const ModifyPass = () => {


    const {mode} = useContext(modeContext)

    const [token, setToken] = useState("")
    const [pass, setPass] = useState("")

    const handlerToken = (e) => {
        setToken(e.target.value)
    }

    const handlerPass = (e) => {
        setPass(e.target.value)
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()

        if(!token)
            return;

        if(!pass)
            return;

        try {
            const res = await fetch(`${API_BASE_URL}/Account/reset-password`,{
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    token: token,
                    newPassword: pass
                })
            })

            if(!res.ok)
                throw new Error("Error Inesperado")

            alert("Contraseña modificada sastifactoriamente")


        }
        catch {

        }
    }
    return <div className={`container-modifyPass ${mode?"":"light-modifyPass"}`}>
        <form action="" onSubmit={handlerSubmit}>
            <div>
                <label htmlFor="">Ingrese su Token</label>
                <input type="text" onChange={handlerToken} value={token} />
            </div>
            <div>
                <label htmlFor="">Ingrese su nueva contraseña</label>
                <input type="password" onChange={handlerPass} value={pass} />
            </div>
            <input type="submit" value="Modificar Contraseña" />
        </form>
    </div>
}
export default ModifyPass