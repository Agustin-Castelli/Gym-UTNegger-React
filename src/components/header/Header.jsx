const Header = () => {
    return (
      <nav className="w-full">
        {/* Parte superior con línea naranja */}
        <div className="bg-black text-white py-4 flex items-center justify-center relative">
          {/* Línea naranja superior */}
          <div className="h-1 w-full bg-orange-600 absolute top-0 left-0"></div>
          
          {/* Logo y nombre del gimnasio */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              G
            </div>
            <h1 className="text-2xl font-bold">POWER GYM</h1>
          </div>
        </div>
        
        {/* Barra de menú inferior */}
        <div className="bg-gray-800 px-[5%] py-2.5 flex justify-between">
          {/* Links de navegación */}
          <ul className="flex gap-6 list-none">
            <li>
              <a href="#" className="text-white font-medium hover:text-orange-600 transition-colors duration-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium hover:text-orange-600 transition-colors duration-300">
                Clases
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium hover:text-orange-600 transition-colors duration-300">
                Entrenadores
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium hover:text-orange-600 transition-colors duration-300">
                Precios
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-medium hover:text-orange-600 transition-colors duration-300">
                Contacto
              </a>
            </li>
          </ul>
          
          {/* Botón de Login */}
          <button className="bg-orange-600 text-white px-5 py-2 rounded font-bold hover:bg-orange-700 transition-colors duration-300">
            Login
          </button>
        </div>
      </nav>
    );
  }
  
  export default Header;