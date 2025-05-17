import { createContext, useState } from "react";

export const modeContext = createContext();
export const ModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState(true);

    const changeMode = () => {
        setMode(!mode);
    };

    return (
        <modeContext.Provider value={{ mode,setMode, changeMode }}>
            {children}
        </modeContext.Provider>
    );
}

