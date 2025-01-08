import React, { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa"; // Importamos el ícono de lápiz desde React Icons

const Adscripcion = () => {
  const [Adscripcion, setAdscripcion] = useState([]);

  useEffect(() => {
    const fetchAdscripcion = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/adscripcion/");
        if (!response.ok) {
          throw new Error("Error al obtener las adscripciones");
        }
        const data = await response.json();
        setAdscripcion(data);
      } catch (error) {
        console.error("Error al obtener las adscripciones:", error);
      }
    };
    fetchAdscripcion();
  }, []);

  return (
    <div className="contenedor-full">
      {/* Contenedor de botones alineados a la izquierda */}
      <div className="flex justify-end space-x-4 mb-4">
        <button className="px-4 py-2 bg-transparent text-blue-500 font-bold border-2 border-blue-500 rounded-lg text-xs hover:bg-blue-500 hover:text-black transition-colors duration-200 ease-in-out">
          Exportar
        </button>

        <button
          className="px-4 py-2 bg-green-900 text-white font-bold border-2 border-green-900 rounded-lg text-xs hover:bg-green-900 hover:text-black transition-colors duration-200 ease-in-out"
          aria-label="Agregar Adscripción"
        >
          Agregar Adscripción
        </button>

        <button className="px-4 py-2 bg-transparent text-red-800 font-bold border-2 border-red-800 rounded-lg text-xs hover:bg-red-800 hover:text-black transition-colors duration-200 ease-in-out">
          Eliminar Adscripción
        </button>
      </div>
      <div className="flex justify-end">
        <div className="form-control ">
          {/* Cuadro de búsqueda más pequeño */}
          <input
            type="text"
            placeholder="Buscar"
            className="input input-bordered w-16 md:w-auto"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Clave</th>
              <th>Nombre de la Adscripción</th>
              <th>CTT</th>
              <th>Municipio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí mapeas las adscripciones */}
            {Adscripcion.map((item, index) => (
              <tr key={index}>
                <td>{item.clave}</td>
                <td>{item.nombre}</td>
                <td>{item.ctt}</td>
                <td>{item.municipio}</td>
                <td>
                  <div className="flex items-center gap-3">
                    {/* Icono de editar (lápiz) */}
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaPen className="w-5 h-5" />
                    </button>
                    {/* Checkbox */}
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adscripcion;
