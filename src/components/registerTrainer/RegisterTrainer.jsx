import "./register.css";
import { useContext } from "react";
import { modeContext } from "../../context/ModeContext";
import { useState } from "react";
import { useRef } from "react";
import { API_BASE_URL } from "../../api";
import { useNavigate } from "react-router-dom";
const RegisterTrainer = () => {

    const navigate = useNavigate();

    const { mode } = useContext(modeContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [viewPass, setViewPass] = useState(false);
    const [phone, setPhone] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);



    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const phoneRef = useRef(null);
    const weightRef = useRef(null);
    const heightRef = useRef(null);
    const selectSpecialityRef = useRef(null)

    const handlerName = (e) => {
        setName(e.target.value);
        nameRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    const handlerLastName = (e) => {
        setLastName(e.target.value);
        lastNameRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    const handlerEmail = (e) => {
        setEmail(e.target.value);
        emailRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    const handlerPass = (e) => {
        setPass(e.target.value);
        passRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    const handlerPhone = (e) => {
        setPhone(e.target.value);
        phoneRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

    const validate = (e) => {
        if (['-', 'e', "."].includes(e.key))
            e.preventDefault()
    }

    const handlerWeight = (e) => {
        console.log(e.target.value.length);
        if (e.target.value[e.target.value.length] == "-")  // This line seems incorrect, it should be a check for empty or invalid input
            return;
        setWeight(e.target.value);
        weightRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
        //console.log(weight);
    }
    const handlerHeight = (e) => {
        setHeight(e.target.value);
        heightRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();



        let colorError = "darkRed"


        let error = false;
        if (!name) {
            error = true;
            nameRef.current.style.backgroundColor = colorError;
        }
        if (!lastName) {
            error = true;
            lastNameRef.current.style.backgroundColor = colorError;
        }
        if (!email) {
            error = true;
            emailRef.current.style.backgroundColor = colorError;
        }
        if (!pass) {
            error = true;
            passRef.current.style.backgroundColor = colorError;
        }
        if (!phone) {
            error = true;
            phoneRef.current.style.backgroundColor = colorError;
        }

        if (error) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const res = await fetch(`${API_BASE_URL}/Trainer`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("tokenGYM")}`
                    },
                    body: JSON.stringify({
                        name: name,
                        surname: lastName,
                        email: email,
                        password: pass,
                        phone: phone,
                        trainerSpeciality : selectSpecialityRef.current.value
                    }),
                    method: "POST"
                }
            )
            /*  "name": "string",
 "surname": "string",
 "email": "string",
 "password": "string",
 "phone": 0,
 "weight": 0,
 "height": 0 */
            if (!res.ok)
                throw new Error("Error en la creación de la cuenta");
            alert("Cuenta creada con éxito");
            navigate("/login");

        }
        catch (error) {
            alert(error.message);
        }
    };






    return (
        <div className={`container-register ${mode ? "dark-register" : ""}`}>
            <form className="form-register" onSubmit={handleSubmit}>
                <h2>Crear Cuenta de Entrenador</h2>
                <div className="cont-datos">
                    <div className="div-form-register">
                        <div className="datos-register">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" ref={nameRef} value={name} onChange={handlerName} id="name" name="name" placeholder="Ingrese su nombre aqui" />
                        </div>
                        <div className="datos-register">
                            <label htmlFor="lastName">Apellido</label>
                            <input type="text" ref={lastNameRef} value={lastName} onChange={handlerLastName} id="lastName" name="lastName" placeholder="Ingrese su apellido aqui" />
                        </div>
                        <div className="datos-register">
                            <label htmlFor="email">Email</label>
                            <input type="email" ref={emailRef} value={email} onChange={handlerEmail} id="email" name="email" placeholder="Ingrese su email aqui" />
                        </div>
                        <div className="datos-register">
                            <label htmlFor="password">Contraseña</label>
                            <input type={`${viewPass ? "text" : "password"}`} ref={passRef} value={pass} onChange={handlerPass} id="password" name="password" placeholder="Ingrese su contraseña aqui" />
                            <div className="viewPass-register">
                                <input type="checkbox" value={viewPass} onChange={() => { setViewPass(!viewPass) }} id="viewPass" name="viewPass" />
                                <label htmlFor="viewPass">Ver contraseña</label>
                            </div>
                        </div>
                    </div>
                    <div className="div-form-register">
                        <div className="datos-register">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="number" ref={phoneRef} onKeyDown={validate} value={phone} onChange={handlerPhone} min={0} id="phone" name="phone" placeholder="Ingrese su teléfono aqui" />
                        </div>
                        <div className="datos-register">
                            <label htmlFor="phone">Especialidad</label>
                            <select name="" id="" ref={selectSpecialityRef} >
                                <option value="StrengthTraining">StrengthTraining</option>
                                <option value="Yoga">Yoga</option>
                                <option value="Boxing">Boxing</option>
                                <option value="Hiit">Hiit</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit" className="button-register">Registrar</button>
            </form>
        </div>
    )
}
export default RegisterTrainer