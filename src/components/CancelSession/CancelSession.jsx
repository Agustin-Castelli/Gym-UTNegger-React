import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../api";
import moment from "moment";
import { userContext } from "../../context/userContext";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { modeContext } from "../../context/ModeContext";

const CancelSession = () => {
  const localizer = momentLocalizer(moment);
  const [sessions, setSessions] = useState([]);

  const { user } = useContext(userContext);
  const { mode } = useContext(modeContext);
  const trainerId = jwtDecode(localStorage.getItem("tokenGYM")).sub;

  useEffect(() => {
    fetch(`${API_BASE_URL}/GymSession/GetMyTrainerSessions/${trainerId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener sesiones");
        return res.json();
      })
      .then((data) => {
        setSessions(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [trainerId]);

  const handleCancelSession = async (sessionId) => {
    if (!window.confirm("¿Estás seguro de que querés cancelar esta sesión?")) return;

    try {
      const res = await fetch(`${API_BASE_URL}/GymSession/Cancel/${sessionId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`,
        },
      });

      if (!res.ok) throw new Error("No se pudo cancelar la sesión");

      alert("Sesión cancelada exitosamente");
      // Remover del estado para actualizar la vista
      setSessions((prev) => prev.filter((s) => s.id !== sessionId));
    } catch (error) {
      alert("Error al cancelar la sesión: " + error.message);
    }
  };

  const events = sessions.map((x) => ({
    title: `${x.sessionType}`,
    start: x.sessionDate,
    end: x.sessionDate,
    id: x.id,
  }));

  return (
    <div className="conteiner-NewSession">
      <h2 className={`text-xl font-bold mb-4 ${mode ? "text-white" : ""}`}>
        Cancelar Sesiones
      </h2>

      <Calendar
        className="newSession-calendar"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => handleCancelSession(event.id)}
      />
    </div>
  );
};

export default CancelSession;