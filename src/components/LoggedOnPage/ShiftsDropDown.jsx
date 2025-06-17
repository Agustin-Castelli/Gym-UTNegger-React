import { useState } from 'react';

const ShiftsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 min-w-xs">
      {/* Botón principal */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ${isOpen ? 'rounded-b-none' : ''}`}
      >
        <h2 className="text-white text-3xl font-bold flex items-center justify-center">
          Mis turnos
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-6 w-6 ml-3 text-orange-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </h2>
      </button>

      {/* Contenido desplegable */}
      <div 
        className={`bg-gray-700 rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6">
          {/* Ejemplo de turno 1 */}
          <div className="mb-4 p-4 bg-gray-600 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">Yoga Matutino</h3>
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">Confirmado</span>
            </div>
            <p className="text-gray-300 mt-2">Lunes 15 de Mayo, 8:00 - 9:00 AM</p>
            <p className="text-gray-300">Instructor: María López</p>
          </div>

          {/* Ejemplo de turno 2 */}
          <div className="mb-4 p-4 bg-gray-600 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">Boxeo Avanzado</h3>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Próxima clase</span>
            </div>
            <p className="text-gray-300 mt-2">Miércoles 17 de Mayo, 6:00 - 7:30 PM</p>
            <p className="text-gray-300">Instructor: Carlos Méndez</p>
          </div>

          {/* Mensaje cuando no hay turnos (opcional) */}
          {/* <div className="text-center py-8 text-gray-400">
            No tienes turnos reservados actualmente
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShiftsDropdown;