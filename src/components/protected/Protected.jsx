import { Navigate} from "react-router-dom"
import { userContext } from "../../context/userContext"
import { useContext } from "react"

const Protected = ({children}) => {

//  const { user } = useContext(userContext);
//alert(user.role)

const token = localStorage.getItem('tokenGYM')

if(!token) {
    return <Navigate to="/login" />
}
return children
}
export default Protected