// TurnosGym.jsx
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Clase de Spinning",
    start: new Date(2025, 3, 26, 18, 0),
    end: new Date(2025, 3, 26, 19, 0),
  },
  {
    title: "Entrenamiento Funcional",
    start: new Date(2025, 3, 27, 17, 0),
    end: new Date(2025, 3, 27, 18, 0),
  },
];

export default function TurnosGym() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contenido */}
      <div className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Seleccioná tu turno</h2>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <Calendar
            localizer={localizer}
            events={events}
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
                    alert("¡Turno reservado!");
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
