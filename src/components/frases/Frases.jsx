import { useEffect, useState } from "react";
import "./frases.css"
import a from "../../../public/images-frases/coleman.jpg"
import { useContext } from "react";
import { modeContext } from "../../context/ModeContext";
const Frases = () => {


    const [numFrase, setNumFrase] = useState(0);

    const { mode } = useContext(modeContext);

    const listaFrases = [
        {
            img: "../../../public/images-frases/arnold.avif",
            frase: `"La fuerza no viene de ganar. Tus luchas desarrollan tus fortalezas. Cuando atraviesas dificultades y decides no rendirte, esa es la fuerza."`,
            autor: "Arnold Schwarzenegger"
        },
        {
            img: "../../../public/images-frases/stallone.jpg",
            frase: `"Aguantar una ronda más cuando crees que no puedes, eso es lo que marca la diferencia en tu vida."`,
            autor: "Sylvester Stallone"
        },
        {
            img: "../../../public/images-frases/coleman.jpg",
            frase: `"Todo el mundo quiere ser fisicoculturista, ¡pero nadie quiere levantar pesos!"`,
            autor: "Ronnie Coleman"
        }
    ]



useEffect(() => {
    const interval = setInterval(() => {
        setNumFrase((prev) => (prev == listaFrases.length - 1 ? 0 : prev + 1));

    }, 5000);

    return () => clearInterval(interval);
}, []);
/*
setInterval(() => {
    setNumFrase(numFrase == listaFrases.length - 1 ? 0 : numFrase + 1);
}, 5000);*/


    return (
        <div className={`div-frases ${mode? "" : "light-frases"}`}>
            <div className="div-img-frases">
                <img src={listaFrases[numFrase].img} alt="" />
            </div>
            <div className="div-frase-frases">
                <p>{listaFrases[numFrase].frase}</p>
                <h2>{listaFrases[numFrase].autor}</h2>
            </div>
        </div>
    );
}
export default Frases;