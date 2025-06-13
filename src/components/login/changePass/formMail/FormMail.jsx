
import { useState } from "react"
import { API_BASE_URL } from "../../../../api"
import { useContext } from "react"
import { modeContext } from "../../../../context/ModeContext"
import { useNavigate } from "react-router-dom"

const FormMail = () => {

    const { mode } = useContext(modeContext)

    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const handlerEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${API_BASE_URL}/Account/forgot-password`,{
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    email:email
                })})

                

                if(!res.ok)
                throw new Error("Usuario no encontrado")

                navigate("/modifyPass")

        } catch (error) {
            alert(error.message)
        }
    }

    return <div className={`container-modifyPass ${mode ? "" : "light-modifyPass"}`}>
        <form action="" onSubmit={handlerSubmit}>
            <div>
                <label htmlFor="">Ingrese su Mail</label>
                <input type="email" onChange={handlerEmail} value={email} />
            </div>
            <input type="submit" value="Modificar Contraseña" />
        </form>
    </div>
}
export default FormMail