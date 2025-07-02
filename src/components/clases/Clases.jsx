import { useState } from "react";
import { modeContext } from "../../context/ModeContext";
import { useContext } from "react";

const Clases = () => {
  const { mode } = useContext(modeContext);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const classesData = [
    {
      title: "Muscle Building",
      shortDesc: "Entrenamiento para hipertrofia muscular",
      longDesc: "La hipertrofia muscular es el aumento del tamaño del músculo como respuesta al entrenamiento de fuerza. Esto ocurre cuando las fibras musculares se adaptan al esfuerzo, creciendo en tamaño y volumen. Para lograrla, es fundamental realizar ejercicios con cargas moderadas a altas, en rangos de 8 a 12 repeticiones, aplicando una sobrecarga progresiva. Además, se necesita una alimentación rica en proteínas y con un ligero superávit calórico para favorecer el crecimiento, junto con un buen descanso que permita la recuperación muscular. Los ejercicios compuestos como sentadillas, press de banca o peso muerto son especialmente eficaces para estimular la hipertrofia. La combinación de entrenamiento, nutrición adecuada y descanso es la clave para desarrollar masa muscular de forma efectiva.",
      icon: "💪",
      schedules: "Lunes y Miércoles - 18:00 a 19:30",
      coach: "Carlos Rodriguez",
      bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470"
    },
    {
      title: "Yoga",
      shortDesc: "Equilibrio entre cuerpo y mente",
      longDesc: "El yoga es una práctica originaria de la India que combina posturas físicas, técnicas de respiración y meditación con el objetivo de lograr un equilibrio entre el cuerpo y la mente. No se trata solo de ejercicio físico, sino también de una disciplina que busca el bienestar integral de la persona, conectando lo físico, lo mental y lo espiritual.",
      icon: "🧘",
      schedules: "Martes y Jueves - 20:00 a 21:30",
      coach: "María Vazquez",
      bgImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1470"
    },
    {
      title: "Boxing Session",
      shortDesc: "Entrenamiento completo de boxeo",
      longDesc: "El boxeo es un deporte de combate que consiste en enfrentamientos entre dos personas que utilizan únicamente los puños, protegidos con guantes, para golpear al oponente, siguiendo reglas específicas y bajo supervisión. Más allá de la competición profesional, el boxeo también se practica como entrenamiento físico, siendo una actividad muy completa.",
      icon: "🥊",
      schedules: "Lunes, Miércoles y Viernes - 9:00 a 10:00 y 17:00 a 18:00",
      coach: "Sergio Martinez",
      bgImage: "https://media.gq.com.mx/photos/6197fa2c9d62ea68964f2601/16:9/w_2560%2Cc_limit/GettyImages-685043825-beneficios-box-cover.jpg"
    },
    {
      title: "High Intensity Circuit",
      shortDesc: "Entrenamiento intensivo en corto tiempo",
      longDesc: "El circuito de alta intensidad es un tipo de entrenamiento que combina ejercicios realizados a máxima intensidad durante cortos períodos de tiempo, intercalados con breves descansos o actividad de baja intensidad. Este formato permite trabajar el cuerpo de forma eficiente en sesiones breves pero muy exigentes.",
      icon: "⚡",
      schedules: "Lunes a viernes - 18:30",
      coach: "Arnold Schwarzenegger",
      bgImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470"
    }
  ];

  return (
    <div className={`min-h-screen ${mode ? "bg-gray-900" : "bg-gray-100"} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-10 text-center ${mode ? "text-white" : "text-gray-800"}`}>
          Nuestras Clases
        </h2>
        
        <div className="space-y-6">
          {classesData.map((classItem, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${mode ? "bg-gray-800" : "bg-white"}`}
            >
              {/* Encabezado de la tarjeta */}
              <div 
                className="relative h-40 cursor-pointer group"
                onClick={() => toggleCard(index)}
              >
                {/* Imagen de fondo con overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${classItem.bgImage})` }}
                >
                  <div className={`absolute inset-0 ${mode ? "bg-black/50" : "bg-black/40"} transition-all duration-300`} />
                </div>
                
                {/* Contenido del encabezado */}
                <div className="relative h-full flex flex-col justify-center items-center p-6 text-center">
                  <span className="text-4xl mb-2">{classItem.icon}</span>
                  <h3 className={`text-2xl font-bold mb-1 ${mode ? "text-white" : "text-white"}`}>
                    {classItem.title}
                  </h3>
                  <p className={`text-lg mb-10 ${mode ? "text-gray-300" : "text-gray-200"}`}>
                    {classItem.shortDesc}
                  </p>
                </div>
                
                {/* Indicador de despliegue */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${mode ? "text-orange-400" : "text-orange-500"}`}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-6 w-6 transition-transform duration-300 ${expandedCard === index ? "rotate-180" : ""}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Contenido desplegable */}
              <div 
                className={`transition-all duration-300 overflow-hidden ${expandedCard === index ? "max-h-96" : "max-h-0"}`}
              >
                <div className={`p-6 ${mode ? "text-gray-300" : "text-gray-700"}`}>
                  <p className="mb-4">{classItem.longDesc}</p>
                  
                  {/* Información adicional (puedes personalizar) */}
                  <div className={`mt-4 pt-4 border-t ${mode ? "border-gray-700" : "border-gray-200"}`}>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold">Horarios:</h4>
                        <p>{classItem.schedules}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Instructor:</h4>
                        <p>{classItem.coach}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clases;