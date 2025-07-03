import { Navigate} from "react-router-dom"
import { userContext } from "../../context/userContext"
import { useContext } from "react"
import { jwtDecode } from "jwt-decode"

const ProtectedAdmin = ({children}) => {

    //const {user} = useContext(userContext)
    const token = localStorage.getItem('tokenGYM')
   // alert(jwtDecode(token).role)
   const userRole = jwtDecode(token).role
if( !token || userRole != "Admin") {
    return <Navigate to="/login" />
}
return children
}
export default ProtectedAdmin