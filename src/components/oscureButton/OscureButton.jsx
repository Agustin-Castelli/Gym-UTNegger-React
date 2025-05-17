import "./oscureButton.css";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import { modeContext } from "../../context/ModeContext";

const OscureButton= ()=>{
    const {changeMode, mode} = useContext(modeContext);


return(
    <div className="oscureButton" onClick={changeMode}>{mode?<MdLightMode className="sun"/>:<MdOutlineDarkMode className="moon"/>}</div>
)
}
export default OscureButton;