// TurnosGym.jsx
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { API_BASE_URL } from "../../api";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";


const localizer = momentLocalizer(moment);



const events = [
  {
    title: "Clase de Spinning",
    start: new Date(2025, 3, 26, 18, 0),
    end: new Date(2025, 3, 27, 19, 0),
  },
  {
    title: "Entrenamiento Funcional",
    start: new Date(2025, 4, 27, 17, 0),
    end: new Date(2025, 4, 27, 18, 0),
  },
];


export default function TurnosGym() {

  const { user } = useContext(userContext);
  const [sessions, setSessions] = useState([]);

  console.log(user);

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/GymSession/GetAllGymSessionsAvailable`, {
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
      })
  }, [])
 console.log(sessions)
  console.log(sessions.map(x=>x.sessionDate))

  const reservar = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/ClientGymSession/RegisterToGymSession/${user.sub}/${id}` , {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`},
        method:"POST"
        }
      )
      
      
        if(!res.ok)
        {
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
    <div className="min-h-screen bg-gray-100">
      {/* Contenido */}
      <div className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Seleccioná tu turno</h2>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <Calendar
            localizer={localizer}
            events={sessions.map((x)=>(
              {
                title:x.routineName,
                start:x.sessionDate,
                end:x.sessionDate,
                id:x.id
              }))}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={(event) => setSelectedEvent(event)}
          />
        </div>

        {/* Modal de Confirmación */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-lg font-semibold mb-4">
                ¿Querés reservar este turno?
              </h3>
              <p className="mb-2">{selectedEvent.title}</p>
              <p className="text-gray-600 text-sm mb-4">
                {moment(selectedEvent.start).format("dddd, HH:mm")} hs
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-green-500 hover:bg-green-600 rounded-md px-6"
                  onClick={() => {
                    reservar(selectedEvent.id)
                  //  alert("¡Turno reservado!");
                    setSelectedEvent(null);
                  }}
                >
                  Confirmar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 rounded-md px-6"
                  onClick={() => setSelectedEvent(null)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
