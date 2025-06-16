import { createContext, useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
export const userContext = createContext();
export const UserContextProvider = ({ children }) =>  {
    const [user,setUser] = useState(null);

useEffect(() => {
      let token = localStorage.getItem("tokenGYM");
      if (token)
        setUser(jwtDecode(token));
      console.log(user);
    //fetch(`${API_BASE_URL}/Client/RegisterToGymSession/${user}/1234234`)
  },[]);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
    }