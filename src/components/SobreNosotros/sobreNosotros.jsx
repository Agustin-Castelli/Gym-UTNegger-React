import React from "react";

const SobreNosotros = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-40" id="sobre-nosotros">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-400 inline-block pb-2">
          Sobre Nosotros
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          <strong>UTNegger</strong> es un gimnasio ubicado en el corazón de <strong>Rosario</strong>,
          fundado en 2025 con un propósito claro: <em>ayudar a todas las personas a alcanzar sus objetivos</em>,
          sin importar cuáles sean.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Creemos que el camino hacia una vida más saludable debe ser accesible, personalizado y motivador.
          Por eso, ofrecemos una <strong>gran diversidad de disciplinas</strong>, adaptadas a distintos niveles y preferencias.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          En UTNegger, cada cliente recibe una <strong>atención personalizada</strong>, acompañamiento constante y el respaldo de un equipo comprometido.
          Además, nuestros entrenadores cuentan con la <strong>flexibilidad</strong> para ajustar sus horarios, fomentando un ambiente laboral sano y motivador.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          No somos solo un gimnasio: somos una <strong>comunidad</strong> que crece, se apoya y se transforma todos los días.
        </p>
      </div>
    </section>
  );
};

export default SobreNosotros;
