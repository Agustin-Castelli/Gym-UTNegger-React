import { Navigate, useNavigate } from "react-router-dom"
import Login from "../login/Login"

const Protected = ({children}) => {

const navigate = useNavigate
const token = localStorage.getItem('tokenGYM')
if(!token) {
    return <Navigate to="/login" />
}
return children
}
export default Protected