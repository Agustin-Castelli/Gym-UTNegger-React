import { modeContext } from "../../context/ModeContext"
import { useContext } from "react"

const DivViewRoutines = ({name,exercises})=>{

    const { mode } = useContext(modeContext)

return <div className={`cont-viewRoutines-div ${mode?"cont-viewRoutines-div-dark":""}`} >
    <h3 className="viewRoutines-h3">{name}</h3>
    {exercises.map((x,i)=><div key={i+x.name} >
        <p>Ejercicio: {x.name}</p>
        <p>Series: {x.sets}</p>
        <p>Repeticiones: {x.reps}</p>
        <p>Descanso {x.restTime}s</p>
    </div>)}
</div>
}
export default DivViewRoutines