import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../api';
import { jwtDecode } from 'jwt-decode';

const ShiftsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessions,setSessions] = useState([])
  const user = jwtDecode(localStorage.getItem("tokenGYM"))

  useEffect(()=>{
    if(user.role == "Client"){
    fetch(`${API_BASE_URL}/Client/GetMyClientSessions/${user.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
                }
            })
                .then((res) => {
                    if (!res.ok)
                        throw new Error("Error inesperado")
                    return res.json()
                })
                .then((data) => {
                    setSessions(data)
                    console.log(data)
                })
                .catch((e) => {
                    alert(e)
                })}
    if (user.role == "Trainer"){
      fetch(`${API_BASE_URL}/GymSession/GetMyTrainerSessions/${user.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
                }
            })
                .then((res) => {
                    if (!res.ok)
                        throw new Error("Error inesperado")
                    return res.json()
                })
                .then((data) => {
                    setSessions(data)
                    console.log(data)
    
                })
                .catch((e) => {
                    alert(e)
                    alert("Trainer")
                })}
  },[])

  const eliminarTurno = async (id) => {
      try {
        const res = await fetch(`${API_BASE_URL}/ClientGymSession/UnregisterToGymSession/${user.sub}/${id}`, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
          },
          method: "DELETE"
        }
        )
  
  
        if (!res.ok) {
          const errorData = await res.text();
          console.log(errorData.match(/: (.+?)\r?\n/))
          throw new Error(errorData.match(/: (.+?)\r?\n/)[1])
        }
        const mensaje = await res.text()
  
        alert(mensaje)
  
      } catch (error) {
        alert("Error: " + error.message)
      }
    }

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
      style={{overflow:"auto"}}
        className={`overflow-auto bg-gray-700 rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div style={{overflow:"auto"}} className="p-6">
          {/* Ejemplo de turno 1 */}
          {/* <div className="mb-4 p-4 bg-gray-600 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">Yoga Matutino</h3>
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">Confirmado</span>
            </div>
            <p className="text-gray-300 mt-2">Lunes 15 de Mayo, 8:00 - 9:00 AM</p>
            <p className="text-gray-300">Instructor: María López</p>
          </div> */}

          {sessions.map(x=><div className="mb-4 p-4 bg-gray-600 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">{x.sessionType}</h3>
              <div>
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">Confirmado</span>
                <button className='ml-1.5'><span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm" onClick={() => {eliminarTurno(x.id); console.log(x.id)}}>Eliminar turno</span></button>
              </div>
            </div>
            <p className="text-gray-300 mt-2">{x.sessionDate.substring(0,10)}</p>
            {/* <p className="text-gray-300">Instructor: María López</p> */}
          </div>)}

          {/* Ejemplo de turno 2 */}
          {/* <div className="mb-4 p-4 bg-gray-600 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">Boxeo Avanzado</h3>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Próxima clase</span>
            </div>
            <p className="text-gray-300 mt-2">Miércoles 17 de Mayo, 6:00 - 7:30 PM</p>
            <p className="text-gray-300">Instructor: Carlos Méndez</p>
          </div> */}

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