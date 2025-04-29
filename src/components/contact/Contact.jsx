import "./contact.css"
import logoWSP from "../../../public/WhatsApp.svg.webp"
import { useState } from "react"
import { API_BASE_URL } from "../../api"
const Contact = () => {

    const [nameSubname, setNameSubname] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const handlerNameSubnameChange = (e) => {
        setNameSubname(e.target.value)
    }
    const handlerAddressChange = (e) => {
        setAddress(e.target.value)
    }
    const handlerEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlerPhoneChange = (e) => {
        setPhone(e.target.value)
    }


    const handlerMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handlerSendMessage = async () => {
        console.log(nameSubname, address, email, phone, message)
        try {
            const response = await fetch(`${API_BASE_URL}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nameSubname,
                    address,
                    email,
                    phone,
                    message
                })
            })

            if (!response.ok)
                throw new Error("Error inesperado")

            const data = await response.json()
            console.log(data)
        }

        catch (e) {
            console.error(e)
            alert("Error al enviar el mensaje")
        }

    }


    return (
        <div className="cont-contact">
            <div className="form-contact">
                <div className="div-textos-contact">
                    <p>Podes escribirnos a nuestro numero de  WhatsApp haciendo click sobre el logo</p>
                    <img className="logo-contact" src={logoWSP} alt="logo" />
                    <p>Caso contrario podes llamarnos al siguiente numero </p>
                    <p>00000000000</p>
                    <p>Tambien si queres hacer alguna consulta particular podes mandarnos un correo </p>
                </div>
                <div className="div-contact">
                    <div className="div-div-contact">
                        <div>
                            <div><label htmlFor="">Nombre y aplellido</label><input type="text" value={nameSubname} onChange={handlerNameSubnameChange} /></div>
                            <div><label htmlFor="">Direccion</label><input type="text" value={address} onChange={handlerAddressChange} /></div>
                        </div>
                        <div>
                            <div><label htmlFor="">Correo</label><input type="email" value={email} onChange={handlerEmailChange} /></div>
                            <div><label htmlFor="">Telefono</label><input type="number" min="0" value={phone} onChange={handlerPhoneChange} /></div>
                        </div>
                    </div>


                    <div className="div-textarea-contact">
                        <label htmlFor="">Mensaje</label>
                        <textarea value={message} onChange={handlerMessageChange}></textarea>
                    </div>

                    <button className="button-contact" onClick={handlerSendMessage} type="button">Enviar</button>

                </div>
            </div>
        </div>
    )
}

export default Contact