import "./contact.css"
import logoWSP from "../../../public/WhatsApp.svg.webp"
import { useState } from "react"
import { API_BASE_URL } from "../../api"
import { Link } from "react-router-dom"
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
                    <p>Podés escribirnos a nuestro número de WhatsApp haciendo click sobre el logo</p>
                    <a href="https://wa.me/3416489983"><img className="logo-contact" src={logoWSP}  alt="logo" /></a>
                    <p>Caso contrario podés llamarnos al siguiente número </p>
                    <p>00000000000</p>
                    <p>También si querés hacer alguna consulta particular podés mandarnos un correo </p>
                </div>
                <div className="div-contact">
                    <div className="div-div-contact">
                        <div>
                            <div><label htmlFor="">Nombre y apellido</label><input type="text" value={nameSubname} onChange={handlerNameSubnameChange} /></div>
                            <div><label htmlFor="">Dirección</label><input type="text" value={address} onChange={handlerAddressChange} /></div>
                        </div>
                        <div>
                            <div><label htmlFor="">Correo</label><input type="email" value={email} onChange={handlerEmailChange} /></div>
                            <div><label htmlFor="">Teléfono</label><input type="number" min="0" value={phone} onChange={handlerPhoneChange} /></div>
                        </div>
                    </div>


                    <div className="div-textarea-contact">
                        <label htmlFor="">Mensaje</label>
                        <textarea value={message} onChange={handlerMessageChange}></textarea>
                    </div>

                    <button className="button-contact" onClick={handlerSendMessage} type="button">Envíar</button>

                </div>
            </div>
        </div>
    )
}

export default Contact