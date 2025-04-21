
const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Horarios */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Horarios</h3>
                    <p>Lunes a Viernes: 9:00 a 18:00</p>
                    <p>Sábados: 10:00 a 14:00</p>
                </div>

                {/* Ubicación */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Ubicación</h3>
                    <p>Rosario, Santa Fe</p>
                    <p>Zeballos 1341</p>
                    <div className="mt-3">
                        <iframe
                            className="w-full h-48 rounded-md"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.6009120993285!2d-60.644241115846995!3d-32.954766595371694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab11d0eb49c3%3A0x11f1d3d54f950dd0!2sUniversidad%20Tecnol%C3%B3gica%20Nacional%20%7C%20Facultad%20Regional%20Rosario!5e0!3m2!1ses-419!2sar!4v1745025694930!5m2!1ses-419!2sar"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Síguenos */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Síguenos</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} PPS. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
