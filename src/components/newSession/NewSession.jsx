import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "../../api";
import moment from "moment";
import { userContext } from "../../context/userContext";
import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import "./NewSession.css"
import { modeContext } from "../../context/ModeContext";




const NewSession = () => {

    const localizer = momentLocalizer(moment);

    //const { user } = useContext(userContext);
    const [sessions, setSessions] = useState([]);
    const [routines, setRoutines] = useState([])
    const [routinesSelected,setRoutinesSelected] = useState(-1)

    const selectRoutinesRef = useRef(null)

    const { user } = useContext(userContext)
    const { mode } = useContext(modeContext)

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



        fetch(`${API_BASE_URL}/Routine/routines/${jwtDecode(localStorage.getItem("tokenGYM")).sub}`, {
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
                setRoutines(data)
                console.log(data)

            })
            .catch((e) => {
                alert(e)
            })
    }, [])


    const handleSelectSlot = async (slotInfo) => {
        if (slotInfo.start in sessions || routinesSelected<0)
            return;
        console.log('Día seleccionado:', slotInfo.start)
        console.log(routinesSelected)
        try {
            const res = await fetch(`${API_BASE_URL}/GymSession`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
                    },
                    method: "POST",
                    body: JSON.stringify({
                        sessionDate: slotInfo.start,
                        trainerId: user.sub,
                        routineId: routinesSelected,
                        routineName: "aaaaaaaaaaaaaa",
                        id: 0,
                        sessionType: "MuscleBuildingClass",
                        reservedPlaces: 0
                    })
                }
            )
            if (!res.ok)
                throw new Error("Error Inesperado")
            const mensaje = await res.text()
            alert("Sesion logueada sastifactoriamente")

        } catch (error) {
            alert(error)
        }
        // Podés ejecutar cualquier función acá
    }


    return <div className="conteiner-NewSession">
        
        <div className={`div-selectRoutine-newSession ${mode?"":"div-selectRoutine-newSession-light"}`}>
            <p>selecciona tu rutina</p>
            <select name="" id="" ref={selectRoutinesRef} onChange={()=>{
                    console.log(selectRoutinesRef.current.value)
                setRoutinesSelected(Number(selectRoutinesRef.current.value))}} >
                <option value={0} disabled selected>Selecciona una opcion</option>
                <option value={-1} >Crear mi propia rutina</option>
                {routines.map(x=><option value={x.id} >{x.name}</option>)}
            </select>
        </div>
        
        <Calendar className="newSession-calendar"
        localizer={localizer}
        events={sessions.map((x) => (
            {
                title: x.routineName,
                start: x.sessionDate,
                end: x.sessionDate,
                id: x.id
            }))}
        selectable
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelectSlot}
    /></div>


}
export default NewSession