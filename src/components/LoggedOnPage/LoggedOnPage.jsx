import { useContext } from "react";
import { userContext } from "../../context/userContext";
import ShiftsDropdown from "./ShiftsDropDown";

const LoggedOnPage = () => {

        const { user } = useContext(userContext);

        console.log(user);

        const cards = [
        {
        title: "Clases",
        description: "Descubre nuestras disciplinas",
        bgImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470')",
        link: "/classes"
        },
        {
        title: "Turnos",
        description: "Reserva o modifica tu horario",
        bgImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470')",
        link: "/shifts"
        },
        {
        title: "Contactanos",
        description: `¿Algún problema, ${user.given_name}? ¡Contactanos!`,
        bgImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470')",
        link: "/contact"
        }
    ];

    if (!user) {
            return(
                <div>
                    <h3 className="text-white text-4xl flex justify-center font-bold mt-5">Cargando...</h3>
                </div>
            )
        }

    return(
        <>
            <h3 className="text-white text-4xl flex justify-center font-bold mt-5">Bienvenido de nuevo, {user.given_name}!</h3>

            <div className="flex justify-center mx-36 my-10">
                <ShiftsDropdown/>
            </div>

            {/* Sección menú de opciones con tarjetas interactivas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-black">
                {cards.map((card, index) => (
                <a 
                    key={index} 
                    href={card.link}
                    className="group relative h-64 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                    {/* Imagen de fondo */}
                    <div 
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{ backgroundImage: card.bgImage }}
                    >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                    </div>
                    
                    {/* Contenido */}
                    <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-3xl font-bold mb-2 text-center">{card.title}</h3>
                    <p className="text-lg text-center opacity-90">{card.description}</p>
                    <button className="mt-4 px-6 py-2 bg-orange-600 rounded-full text-sm font-semibold opacity-0 hover:bg-orange-800 group-hover:opacity-100 transition-opacity duration-300">
                        Ver más
                    </button>
                    </div>
                </a>
                ))}
            </div>
        </>
    )
}

export default LoggedOnPage;
