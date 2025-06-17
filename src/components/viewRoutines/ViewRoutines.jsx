import { useEffect, useState } from "react"
import { API_BASE_URL } from "../../api"
import { jwtDecode } from "jwt-decode"
import DivViewRoutines from "./DivViewRoutines"
import "./viewRoutines.css"
const ViewRoutines = () => {
    const [routines,setRoutines] = useState([])
    useEffect(() => {
        fetch(`${API_BASE_URL}/Routine/routines/${jwtDecode(localStorage.getItem("tokenGYM")).sub}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
                }
            })
            .then((res)=>{
                if(!res.ok)
                    throw new Error("Error Inesperado")
                return res.json()
            })
            .then((data)=>{
                setRoutines(data)
            })
            .catch((e)=>alert(e))
    }, [])
    return <div className="cont-viewRoutines">
        {routines.map(x=><DivViewRoutines name={x.name} exercises={x.exercises}/>)}  
    </div>
}
export default ViewRoutines