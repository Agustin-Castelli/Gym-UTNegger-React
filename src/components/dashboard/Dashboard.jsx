import { useNavigate } from "react-router-dom";
import Video from "../video/Video";

const Dashboard = () => {

  const navigate = useNavigate()


  const cards = [
    {
      title: "Clases",
      description: "Descubre nuestras disciplinas",
      bgImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470')",
      link: "/classes"
    },
    {
      title: "Turnos",
      description: "Reserva tu horario",
      bgImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470')",
      link: "/shifts"
    },
    {
      title: "Contacto",
      description: "Escribinos directamente",
      bgImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470')",
      link: "/contact"
    }
  ];
  
  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Final de la página
      behavior: 'smooth' // Desplazamiento suave
    });
  };

  return (
    <div className="w-full"> {/* Elimina h-screen y overflow-hidden */}
      {/* Sección del video con contenido superpuesto */}
      <div className="relative h-screen"> {/* Contenedor del video con altura completa */}
        {/* Video de fondo */}
        <div className="absolute inset-0 z-0">
          <Video className="w-full h-full object-cover" />
        </div>
        
        {/* Contenido superpuesto CENTRADO */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-white text-6xl my-20 font-bold text-shadow">TRANSFORMA TU CUERPO HOY</h1>
          
          <button 
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-12 rounded-full text-2xl md:text-3xl mb-6 transform transition-transform duration-300 hover:scale-105 shadow-lg"
            onClick={() => {navigate("/login")}}
          >
            Únete Ahora
          </button>
          
          <a 
            href="https://wa.me/[TU_NUMERO]" 
            className="bg-green-500 hover:bg-green-600 text-white text-2xl font-medium py-4 px-12 rounded-full flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consúltanos
          </a>
        </div>
      </div>

      {/* Sección ubicación */}
      <div className="bg-orange-600 p-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-black ">Conoce nuestra sede en Rosario</h2>
        <button className="bg-black text-white px-10 py-3 rounded-full text-2xl hover:bg-gray-800 transition-colors" onClick={scrollToFooter}>
          CLICK AQUÍ
        </button>
      </div>

      {/* Sección menú de opciones con tarjetas interactivas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-black">
        {cards.map((card, index) => (
          <a 
            key={index} 
            href={card.link}
            className="group relative h-64 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
              style={{ backgroundImage: card.bgImage }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
            </div>
            
            {/* Contenido */}
            <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
              <h3 className="text-3xl font-bold mb-2 text-center">{card.title}</h3>
              <p className="text-lg text-center opacity-90">{card.description}</p>
              <button className="mt-4 px-6 py-2 bg-orange-600 rounded-full text-sm font-semibold opacity-0 hover:bg-orange-800 group-hover:opacity-100 transition-opacity duration-300">
                Ver más
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
