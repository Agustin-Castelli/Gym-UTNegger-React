import { Navigate} from "react-router-dom"
import { userContext } from "../../context/userContext"
import { useContext } from "react"
import { jwtDecode } from "jwt-decode"

const ProtectedTrainer = ({children}) => {

    //const {user} = useContext(userContext)
    const token = localStorage.getItem('tokenGYM')
   // alert(jwtDecode(token).role)
if( !token || jwtDecode(token).role != "Trainer") {
    return <Navigate to="/login" />
}
return children
}
export default ProtectedTrainer