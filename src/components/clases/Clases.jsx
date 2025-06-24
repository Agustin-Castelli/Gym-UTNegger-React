import { modeContext } from "../../context/ModeContext"
import "./clases.css"
import { useContext } from "react"
const Clases = () =>{

    const {mode} = useContext(modeContext)


return (
    <div className={`cont-clases ${mode?"cont-clases-dark":""}`}>
    <div className="div-clases">
        <h2>Muscle Building</h2>
        <p>La hipertrofia muscular es el aumento del tamaño del músculo como respuesta al entrenamiento de fuerza. Esto ocurre cuando las fibras musculares se adaptan al esfuerzo, creciendo en tamaño y volumen. Para lograrla, es fundamental realizar ejercicios con cargas moderadas a altas, en rangos de 8 a 12 repeticiones, aplicando una sobrecarga progresiva. Además, se necesita una alimentación rica en proteínas y con un ligero superávit calórico para favorecer el crecimiento, junto con un buen descanso que permita la recuperación muscular. Los ejercicios compuestos como sentadillas, press de banca o peso muerto son especialmente eficaces para estimular la hipertrofia. La combinación de entrenamiento, nutrición adecuada y descanso es la clave para desarrollar masa muscular de forma efectiva.</p>
    </div>

    <div className="div-clases">
        <h2>Yoga</h2>
        <p>El yoga es una práctica originaria de la India que combina posturas físicas, técnicas de respiración y meditación con el objetivo de lograr un equilibrio entre el cuerpo y la mente. No se trata solo de ejercicio físico, sino también de una disciplina que busca el bienestar integral de la persona, conectando lo físico, lo mental y lo espiritual.</p>
    </div>

    <div className="div-clases">
        <h2>BoxingSession</h2>
        <p>El boxeo es un deporte de combate que consiste en enfrentamientos entre dos personas que utilizan únicamente los puños, protegidos con guantes, para golpear al oponente, siguiendo reglas específicas y bajo supervisión. Más allá de la competición profesional, el boxeo también se practica como entrenamiento físico, siendo una actividad muy completa.</p>
    </div>

    <div className="div-clases">
        <h2>HighIntensityCircuit</h2>
        <p>El circuito de alta intensidad es un tipo de entrenamiento que combina ejercicios realizados a máxima intensidad durante cortos períodos de tiempo, intercalados con breves descansos o actividad de baja intensidad. Este formato permite trabajar el cuerpo de forma eficiente en sesiones breves pero muy exigentes.
</p>
    </div>

    </div>

    
)
}
export default Clases