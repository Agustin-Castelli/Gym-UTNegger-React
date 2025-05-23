import { createContext, useState } from "react";

export const userContext = createContext();
export const ModeContextProvider = ({ children }) =>  {
    const [user,SetUser] = useState(null);


    return (
        <userContext.Provider value={{ user, SetUser }}>
            {children}
        </userContext.Provider>
    )
    }