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
import InputExercise from "./InputsExercise/InputExercise";




const NewSession = () => {

    const localizer = momentLocalizer(moment);

    //const { user } = useContext(userContext);
    const [sessions, setSessions] = useState([]);
    const [routines, setRoutines] = useState([])
    const [routinesSelected, setRoutinesSelected] = useState(-1)
    const [exercises, setExercises] = useState([])
    const [lastId, setLastId] = useState(1)
    const [newRoutineName, setNewRoutineName]= useState("")

    const selectRoutinesRef = useRef(null)
    const selectSessionTypeRef = useRef(null)

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
        if (slotInfo.start in sessions || routinesSelected < 0)
            return;
        console.log('Día seleccionado:', slotInfo.start)
        console.log(routinesSelected)


        try {
            let routine
            if (routinesSelected == 0) {
                
                if(newRoutineName=="")
                    throw new Error("Agrega un nombre a la rutina");
                
                if(exercises.length == 0)
                    throw new Error("Agrega ejercicios");


                for (let exe of exercises) 
                    if (exe.name == "" || exe.reps == 0 || exe.sets == 0 || exe.restTime == 0)
                        throw new Error("Hay campos vacios");

                
                

                const newRoutine = await fetch(`${API_BASE_URL}/Routine/AddRange`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
                    },
                    method: "POST",
                    body: JSON.stringify({
                        id: 0,
                        name: newRoutineName,
                        isAvailable: true,
                        exercises: exercises

                    })
                })

                if(!newRoutine.ok)
                    throw new Error("Error al crear la rutina")
                routine = await newRoutine.json()
                //setRoutinesSelected(routine.id)
                console.log(routine)
            }
            console.log(JSON.stringify({
                        sessionDate: slotInfo.start,
                        trainerId: user.sub,
                        routineId: routinesSelected==0?routine.id:routinesSelected,
                        routineName: "",
                        id: 0,
                        sessionType: selectSessionTypeRef.current.value,
                        reservedPlaces: 0
                    })); 






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
                        routineId: routinesSelected==0?routine.id:routinesSelected,
                        routineName: "",
                        id: 0,
                        sessionType: selectSessionTypeRef.current.value,
                        reservedPlaces: 0
                    })
                }
            )
            if (!res.ok){
                console.log(await res.text())
                throw new Error("Error Inesperado")}
            let json = await res.json()
            json = json.routineName==null?{...json,routineName:newRoutineName}:json
            console.log(json)
            setSessions([...sessions, json])
            alert("Sesion logueada sastifactoriamente")

        } catch (error) {
            alert(error)
        }
        // Podés ejecutar cualquier función acá
    }


    return <div className="conteiner-NewSession" onClick={() => console.log(exercises)}>

        <div className={`div-selectRoutine-newSession ${mode ? "" : "div-selectRoutine-newSession-light"}`}>
            <p> <u>Selecciona el tipo de clase</u> </p>
            <select ref={selectSessionTypeRef} name="" id="selectType">
                <option value="MuscleBuildingClass">MuscleBuildingClass</option>
                <option value="YogaSession">YogaSession</option>
                <option value="BoxingSession">BoxingSession</option>
                <option value="HighIntensityCircuit">HighIntensityCircuit</option>
            </select>
            <p><u>Selecciona tu rutina </u></p>
            <select name="" id="" ref={selectRoutinesRef} onChange={() => {
                console.log(selectRoutinesRef.current.value)
                setRoutinesSelected(Number(selectRoutinesRef.current.value))
            }} >
                <option value={-1} disabled selected>Selecciona una opcion</option>
                <option value={0} >Crear mi propia rutina</option>
                {routines.map((x, i) => <option key={x.id + x.name + i} value={x.id} >{x.name}</option>)}
            </select>
        </div>

        {routinesSelected == 0 ?
            <div className={`Divs-Exercises ${mode ? "Divs-Exercises-dark" : ""}`}>
                <div><label htmlFor="">Nombre de la rutina: </label>
                <input type="text" className={`newRoutineName ${mode ? "newRoutineName-dark" : ""}`} value={newRoutineName} onChange={(e)=>{setNewRoutineName(e.target.value)}} /></div>
                {exercises.map(x => <InputExercise id={x.id} key={x.id} exercises={exercises} setExercises={setExercises} />)}
                <input type="button" className={`add-exercise-button`} value="Agregar Ejercicio" onClick={() => { setExercises([...exercises, { id: lastId, exercise: "", sets: 0, rest: 0 }]); setLastId(lastId + 1) }} />
            </div>
            : <></>}

        <Calendar className="newSession-calendar"
            localizer={localizer}
            events={sessions.map((x) => (
                {
                    title: x.sessionType,
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