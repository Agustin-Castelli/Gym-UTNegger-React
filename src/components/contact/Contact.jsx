import "./contact.css"
import logo from "../../../public/logo-utnegger.jpg"
const Contact = () => {
    return (
        <div className="cont-contact">
            <div className="div-textos-contact">
                <p>Podes escribirnos a nuestro numero de  WhatsApp haciendo click sobre el logo</p>
                <img className="logo-contact" src={logo} alt="logo" />
                <p>Caso contrario podes llamarnos al siguiente numero </p>
                <p>00000000000</p>
                <p>Tambien si queres hacer alguna consulta particular podes mandarnos un correo </p>
            </div>
            <div className="div-contact">
                <div className="div-div-contact">
                    <div>
                        <div><label htmlFor="">Nombre y aplellido</label><input type="text" /></div>
                        <div><label htmlFor="">Direccion</label><input type="text" /></div>
                    </div>
                    <div>
                        <div><label htmlFor="">Correo</label><input type="text" /></div>
                        <div><label htmlFor="">Telefono</label><input type="text" /></div>
                    </div>
                </div>


                <div className="div-textarea-contact">
                    <label htmlFor="">Mensaje</label>
                    <textarea></textarea>
                </div>

                <button className="button-contact" type="button">Enviar</button>

            </div>
        </div>
    )
}
export default Contact