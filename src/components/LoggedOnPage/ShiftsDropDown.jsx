import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../api';
import { jwtDecode } from 'jwt-decode';

const ShiftsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = jwtDecode(localStorage.getItem("tokenGYM"));

  const fetchSessions = () => {
    setLoading(true);

    const endpoint = user.role === "Client"
      ? `${API_BASE_URL}/Client/GetMyClientSessions/${user.sub}`
      : `${API_BASE_URL}/GymSession/GetMyTrainerSessions/${user.sub}`;

    fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error inesperado");
        return res.json();
      })
      .then((data) => {
        setSessions(data);
        console.log(data);
      })
      .catch((e) => {
        alert(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const eliminarTurno = async (id) => {
  const confirmado = window.confirm("¿Estás seguro que querés cancelar este turno?");
  if (!confirmado) return;

  try {
    setLoading(true); // ⬅️ Mostrar ruedita

    const res = await fetch(`${API_BASE_URL}/ClientGymSession/UnregisterToGymSession/${user.sub}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
      },
      method: "DELETE"
    });

    if (!res.ok) {
      const errorData = await res.text();
      throw new Error(errorData.match(/: (.+?)\r?\n/)?.[1] || "Error al cancelar el turno");
    }

    const mensaje = await res.text();
    alert(mensaje);

    // 👇 Re-cargás la lista de sesiones
    await fetchSessions();

  } catch (error) {
    alert("Error: " + error.message);
  } finally {
    setLoading(false); // ⬅️ Ocultar ruedita
  }
};

  return (
    <div className="w-full px-4 min-w-xs relative">
      {/* Spinner centrado mientras carga */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 rounded-lg">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

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

      <div 
        style={{ overflow: "auto" }}
        className={`overflow-auto bg-gray-700 rounded-b-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6">
          {!loading && sessions.length === 0 ? (
            <div className="text-center py-8 text-gray-400">No tienes turnos reservados actualmente</div>
          ) : (
            sessions.map(x => (
              <div key={x.id} className="mb-4 p-4 bg-gray-600 rounded-lg">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{x.sessionType}</h3>
                  <div>
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">Confirmado</span>
                    <button className='ml-1.5' onClick={() => eliminarTurno(x.id)}>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">Eliminar turno</span>
                    </button>
                  </div>
                </div>
                <p className="text-gray-300 mt-2">{x.sessionDate.substring(0, 10)}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShiftsDropdown;
