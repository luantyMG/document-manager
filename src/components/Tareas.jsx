"use client";  // Asegúrate de añadir esta línea si usas Next.js con renderizado del lado del cliente

import { useState, useRef } from "react";
import { data } from "../utils/data";

const Tareas = () => {
  // Definir el estado para la página actual y la cantidad de elementos por página
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
 // Establece un valor inicial para los items por página

  const containerRef = useRef(null); // Referencia para el contenedor de las tareas

  // Calcular los índices para las tareas actuales
  const indexOfLastTask = currentPage * itemsPerPage;  
  const indexOfFirstTask = indexOfLastTask - itemsPerPage;
  const currentTasks = data.tarea.slice(indexOfFirstTask, indexOfLastTask);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(data.tarea.length / itemsPerPage);

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
   
      <div ref={containerRef} className="space-y-4 overflow-y-auto" style={{ maxHeight: "485px" }}>
        {currentTasks.map((tarea) => (
          <div
            key={tarea.tarea_id}
            className="bg-white border border-gray-200 rounded-md shadow-sm p-2 flex items-center justify-between space-x-4"
          >
          
            <div className="text-xs text-gray-500 truncate max-w-[250px]">
              {tarea.asignador_nombre}
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
