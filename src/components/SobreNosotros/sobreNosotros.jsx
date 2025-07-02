import { useState } from 'react';
import { modeContext } from "../../context/ModeContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

const SobreNosotros = () => {
  const { mode } = useContext(modeContext);
  const [activeTab, setActiveTab] = useState('mision');
  const navigate = useNavigate();

  const content = {
    mision: {
      title: "Nuestra Misión",
      text: "En UTNegger, ayudamos a todas las personas a alcanzar sus objetivos fitness, sin importar su nivel inicial. Creemos que el camino hacia una vida más saludable debe ser accesible, personalizado y motivador.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1470"
    },
    vision: {
      title: "Nuestra Visión",
      text: "Ser el espacio fitness de referencia en Rosario, donde cada persona encuentre su propia versión del éxito físico y mental, apoyada por una comunidad comprometida y profesionales apasionados.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469"
    },
    valores: {
      title: "Nuestros Valores",
      text: "Personalización, comunidad y excelencia. Ofrecemos diversidad de disciplinas adaptadas a todos los niveles, con atención personalizada y acompañamiento constante para cada miembro.",
      image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1470"
    }
  };

  return (
    <section className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${mode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${mode ? "text-white" : "text-gray-800"}`}>
            Sobre <span className="text-orange-500">UTNegger</span>
          </h2>
          <div className={`w-24 h-1 mx-auto ${mode ? "bg-orange-500" : "bg-orange-400"} mb-8`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${mode ? "text-gray-300" : "text-gray-600"}`}>
            Un espacio fitness en el corazón de Rosario donde cada logro personal es nuestra mayor recompensa.
          </p>
        </div>

        {/* Sección interactiva con tabs */}
        <div className="mb-20">
          <div className="flex justify-center space-x-2 mb-12">
            {Object.keys(content).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${activeTab === tab 
                  ? mode 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-orange-500 text-white' 
                  : mode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {content[tab].title}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={content[activeTab].image} 
                  alt={content[activeTab].title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                />
                <div className={`absolute inset-0 ${mode ? "bg-black/40" : "bg-black/30"}`}></div>
              </div>
            </div>
            <div className={`md:w-1/2 p-6 ${mode ? "text-gray-300" : "text-gray-700"}`}>
              <h3 className="text-3xl font-bold mb-4">{content[activeTab].title}</h3>
              <p className="text-lg leading-relaxed mb-6">{content[activeTab].text}</p>
              
              {activeTab === 'mision' && (
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className={`inline-block mr-3 mt-1 ${mode ? "text-orange-400" : "text-orange-500"}`}>✓</span>
                    <span>Fundado en 2025 en Rosario</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block mr-3 mt-1 ${mode ? "text-orange-400" : "text-orange-500"}`}>✓</span>
                    <span>Programas adaptados a todos los niveles</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block mr-3 mt-1 ${mode ? "text-orange-400" : "text-orange-500"}`}>✓</span>
                    <span>Equipo de profesionales certificados</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Sección de comunidad */}
        <div className={`p-8 rounded-xl ${mode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className={`text-3xl font-bold mb-4 ${mode ? "text-white" : "text-gray-800"}`}>
                Más que un gimnasio, una <span className="text-orange-500">comunidad</span>
              </h3>
              <p className={`text-lg mb-6 ${mode ? "text-gray-300" : "text-gray-600"}`}>
                En UTNegger fomentamos un ambiente donde cada miembro se siente apoyado. Nuestros entrenadores ajustan sus horarios para crear un espacio laboral sano que se traduce en mejor atención para ti.
              </p>
              <button onClick={() => {navigate("/login")}} className={`px-6 py-3 rounded-lg font-bold ${mode ? "bg-orange-600 hover:bg-orange-700" : "bg-orange-500 hover:bg-orange-600"} text-white transition-colors`}>
                Únete a nuestra comunidad
              </button>
            </div>
            <div className="md:w-1/3">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470" 
                  alt="Comunidad UTNegger"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${mode ? "bg-black/40" : "bg-black/30"}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
