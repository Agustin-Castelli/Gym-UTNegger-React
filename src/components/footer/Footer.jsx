import "./footer.css"
const Footer = ()=>{

    return(
        <div className="div-footer">
            <div className="div-footer-horarios">
                <h3 className="h3-footer">Horarios</h3>
                <p>Lunes a Viernes: 9:00 a 18:00</p>
                <p>Sábados: 10:00 a 14:00</p>
            </div>
            <div className="div-footer-ubicacion">
                <h3 className="h3-footer">Ubicación</h3>
                <p>Rosario, Santa Fe</p>
                <p>Zeballos 1341</p>
                 <iframe className="mapa-footer" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.6009120993285!2d-60.644241115846995!3d-32.954766595371694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab11d0eb49c3%3A0x11f1d3d54f950dd0!2sUniversidad%20Tecnol%C3%B3gica%20Nacional%20%7C%20Facultad%20Regional%20Rosario!5e0!3m2!1ses-419!2sar!4v1745025694930!5m2!1ses-419!2sar"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="div-footer-siguenos">
                <h3 className="h3-footer">Siguenos</h3>
                <p>Facebook</p>
                <p>Instagram</p>
            </div>
        </div>
    )
}
export default Footer