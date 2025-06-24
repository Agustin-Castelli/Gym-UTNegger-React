import "./contact.css"
import logoWSP from "../../../public/WhatsApp.svg.webp"
import { useState } from "react"
import { API_BASE_URL } from "../../api"
import { Link } from "react-router-dom"
const Contact = () => {

    const [name, setName] = useState("")
    const [subName, setSubName] = useState("")
    //const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const handlerNameChange = (e) => {
        setName(e.target.value)
    }
        const handlerSubnameChange = (e) => {
        setSubName(e.target.value)
    }
    // const handlerAddressChange = (e) => {
    //     setAddress(e.target.value)
    // }
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
        console.log(name,subName, email, phone, message)
        try {
            const response = await fetch(`${API_BASE_URL}/Admin/enviar-consulta`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name:name,
                    surname:subName,
                    email:email,
                    phone:phone,
                    message:message
                })
            })

            if (!response.ok)
                throw new Error("Error inesperado")

            const data = await response.text()
            console.log(data)
            alert(data)
        }

        catch (e) {
            console.log(e)
            alert(e)
        }

    }


    return (
        <div className="cont-contact">
            <div className="form-contact">
                <div className="div-textos-contact">
                    <p>Podés escribirnos a nuestro número de WhatsApp haciendo click sobre el logo</p>
                    <a href="https://wa.me/3416489983"><img className="logo-contact" src={logoWSP}  alt="logo" /></a>
                    <p>Caso contrario podés llamarnos al siguiente número </p>
                    <p>+54 9 341-648-9983</p>
                    <p>También si querés hacer alguna consulta particular podés mandarnos un correo </p>
                </div>
                <div className="div-contact">
                    <div className="div-div-contact">
                        <div>
                            <div><label htmlFor="">Nombre</label><input type="text" value={name} onChange={handlerNameChange} /></div>
                            {/* <div><label htmlFor="">Dirección</label><input type="text" value={address} onChange={handlerAddressChange} /></div> */}
                            <div><label htmlFor="">Teléfono</label><input type="number" min="0" value={phone} onChange={handlerPhoneChange} /></div>
                        </div>
                        <div>
                            <div><label htmlFor="">Apellido</label><input type="text" value={subName} onChange={handlerSubnameChange} /></div>
                            <div><label htmlFor="">Correo</label><input type="email" value={email} onChange={handlerEmailChange} /></div>
                            
                            
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