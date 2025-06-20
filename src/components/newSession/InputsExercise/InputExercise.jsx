import { useEffect, useState } from "react"
import "./inputExercise.css"
const InputExercise = ({ id, exercises, setExercises }) => {
    const [name, setName] = useState("")
    const [sets, setSets] = useState(0)
    const [reps, setReps] = useState(0)
    const [rest, setRest] = useState(0)

    const actualizateExercises = () => {
        //setExercises((prev)=>{prev.map(x=>x.id==id?{id:id,exercise:exercise,sets:sets,rest:rest}:x)})
        /*let newExercises = [...exercises]
        const idInExercises = newExercises.findIndex(x=>x.id==id)
        newExercises[idInExercises] = {id:id,exercise:exercise,sets:sets,rest:rest}
        setExercises(newExercises)*/
        setExercises((prev) =>
            prev.map((x) => x.id === id
                ? { id, name, sets, reps, rest } : x))
        console.log(exercises)
    }

    const validate = (e) => {
        if (['-', 'e', "."].includes(e.key))
            e.preventDefault()
    }

    useEffect(actualizateExercises, [name, sets, reps, rest])

    return <div className="cont-InputExercise">
        <div><label htmlFor="">Nombre: </label><input type="text"  value={name} onChange={(e) => { setName(e.target.value) }} /></div>
        <div><label htmlFor="">Series: </label><input type="number" min={1} onKeyDown={validate} value={sets} onChange={(e) => { setSets(e.target.value) }} /></div>
        <div><label htmlFor="">Repeticiones: </label> <input type="number" min={1} onKeyDown={validate} value={reps} onChange={(e) => { setReps(e.target.value) }} /></div>
        <div><label htmlFor="">Descanso: </label> <input type="number" min={1} onKeyDown={validate} value={rest} onChange={(e) => { setRest(e.target.value) }} /></div>
        <button onClick={()=>{setExercises(exercises.filter(x=>x.id!=id))}} >X</button>

    </div>
}
export default InputExercise