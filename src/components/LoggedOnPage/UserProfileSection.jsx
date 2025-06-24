import { useState } from "react";

const UserProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    email: "usuario@ejemplo.com",
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "+5491122334455",
    altura: "175",
    peso: "75"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-xl mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Mi Perfil</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            isEditing 
              ? 'bg-gray-600 text-white hover:bg-gray-700' 
              : 'bg-orange-600 text-white hover:bg-orange-700'
          }`}
        >
          {isEditing ? 'Cancelar' : 'Editar Perfil'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Columna Izquierda */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
              />
            ) : (
              <p className="bg-gray-700 text-white p-3 rounded-lg">{userData.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Nombre</label>
            {isEditing ? (
              <input
                type="text"
                name="nombre"
                value={userData.nombre}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
              />
            ) : (
              <p className="bg-gray-700 text-white p-3 rounded-lg">{userData.nombre}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Apellido</label>
            {isEditing ? (
              <input
                type="text"
                name="apellido"
                value={userData.apellido}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
              />
            ) : (
              <p className="bg-gray-700 text-white p-3 rounded-lg">{userData.apellido}</p>
            )}
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Teléfono</label>
            {isEditing ? (
              <input
                type="tel"
                name="telefono"
                value={userData.telefono}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
              />
            ) : (
              <p className="bg-gray-700 text-white p-3 rounded-lg">{userData.telefono}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Altura (cm)</label>
            {isEditing ? (
              <input
                type="number"
                name="altura"
                value={userData.altura}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
              />
            ) : (
              <p className="bg-gray-700 text-white p-3 rounded-lg">{userData.altura} cm</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Peso (kg)</label>
            {isEditing ? (
              <input
                type="number"
                name="peso"
                value={userData.peso}
                onChange={handleInputChange}
                className="bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none"
              />
            ) : (
              <p className="bg-gray-700 text-white p-3 rounded-lg">{userData.peso} kg</p>
            )}
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="mt-8 flex justify-end">
          <button
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
          >
            Guardar Cambios
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileSection;