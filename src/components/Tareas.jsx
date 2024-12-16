"use client";  // Asegúrate de añadir esta línea para usar hooks de cliente en Next.js

import { useState, useEffect, useRef } from "react";

const Tareas = () => {
  // Definir el estado para la página actual, la cantidad de elementos por página y las tareas
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [tareas, setTareas] = useState([]); // Estado para almacenar las tareas
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores en la solicitud
  const containerRef = useRef(null); // Referencia para el contenedor de las tareas

  // Realizar la solicitud a la API cuando el componente se monte
  useEffect(() => {
    const fetchTareas = async () => {
      try {
        // Realizar la solicitud GET a tu API
        const response = await fetch("http://localhost:3000/api/tasks/");
        if (!response.ok) {
          throw new Error("Error al obtener las tareas");
        }
        const data = await response.json();
        setTareas(data); // Actualizar el estado con los datos de las tareas
      } catch (error) {
        setError(error.message); // Manejo de errores
      } finally {
        setLoading(false); // Finalizar el estado de carga
      }
    };

    fetchTareas(); // Llamar a la función para obtener las tareas
  }, []); // El array vacío asegura que se ejecute solo una vez cuando el componente se monta

  // Calcular los índices para las tareas actuales
  const indexOfLastTask = currentPage * itemsPerPage;
  const indexOfFirstTask = indexOfLastTask - itemsPerPage;
  const currentTasks = tareas.slice(indexOfFirstTask, indexOfLastTask);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(tareas.length / itemsPerPage);

  // Funciones para cambiar de página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-2">
      {loading ? (
        <div>Loading...</div> // Mostrar un mensaje de carga mientras se obtienen las tareas
      ) : error ? (
        <div className="text-red-500">{error}</div> // Mostrar un mensaje de error si hubo un problema con la solicitud
      ) : (
        <div ref={containerRef} className="space-y-4 overflow-y-auto" style={{ maxHeight: "485px" }}>
          {currentTasks.map((tarea) => (
            <div
              key={tarea.tarea_id}
              className="bg-white border border-gray-200 rounded-md shadow-sm p-2 flex items-center justify-between space-x-4"
            >
              {/* Mostrar el nombre del creador de la tarea */}
              <div className="text-xs text-gray-500 truncate max-w-[250px]">
                {tarea.nombre} {/* Aquí se accede al campo 'nombre' */}
              </div>

              <div className="text-sm text-gray-700 truncate max-w-[150px]">
                {tarea.asunto.slice(0, 40)}{tarea.asunto.length > 40 ? "..." : ""}
              </div>

              <div className="text-sm text-gray-600 truncate max-w-[250px]">
                {tarea.descripcion.slice(0, 120)}{tarea.descripcion.length > 120 ? "..." : ""}
              </div>

              <div className="flex space-x-2">
                <button className="px-2 py-1 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-600 transition duration-200">
                  {tarea.estatus}
                </button>
                <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md text-xs hover:bg-gray-300 transition duration-200">
                  Denegar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Paginación */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md text-xs hover:bg-gray-300 disabled:opacity-50 transition duration-200"
        >
          Anterior
        </button>

        <span className="text-xs text-gray-700">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md text-xs hover:bg-gray-300 disabled:opacity-50 transition duration-200"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Tareas;
