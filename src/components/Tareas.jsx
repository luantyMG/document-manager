"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import logo from "src/assets/img/logo.png"; // Importa la imagen correctamente

const Tareas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/tasks/");
        if (!response.ok) {
          throw new Error("Error al obtener las tareas");
        }
        const data = await response.json();
        setTareas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTareas();
  }, []);

  const indexOfLastTask = currentPage * itemsPerPage;
  const indexOfFirstTask = indexOfLastTask - itemsPerPage;
  const currentTasks = tareas.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tareas.length / itemsPerPage);

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
        // Spinner de DaisyUI
        <div className="flex justify-center items-center space-x-2">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
          <span className="text-gray-500">Cargando...</span>
        </div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : tareas.length === 0 ? (
        <div className="relative flex justify-center items-center bg-gray-100 p-4">
          <div className="relative flex flex-col items-center w-full max-w-md bg-white shadow-xl rounded-lg p-6 space-y-4">
            <div className="space-y-4 p-4 text-center">
              <h1 className="text-3xl font-bold text-green-950">
                ¡Bienvenidos!
              </h1>
              <div className="w-full h-[50vh] relative">
                <Image
                  src={logo}
                  alt="Logo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <p className="text-lg text-gray-600">
                Actualmente no hay tareas disponibles. ¡Pronto tendrás nuevas
                asignaciones!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="space-y-4 overflow-y-auto"
          style={{ maxHeight: "485px" }}
        >
          {currentTasks.map((tarea) => (
            <div
              key={tarea.tarea_id}
              className="bg-white border border-gray-200 rounded-md shadow-sm p-2 flex items-center justify-between space-x-4 transition-all duration-200 hover:shadow-lg hover:border-gray-300"
            >
              <div className="text-xs text-gray-500 truncate max-w-[250px]">
                {tarea.nombre}
              </div>
              <div className="text-sm text-gray-700 truncate max-w-[150px]">
                {tarea.asunto.slice(0, 40)}
                {tarea.asunto.length > 40 ? "..." : ""}
              </div>
              <div className="text-sm text-gray-600 truncate max-w-[250px]">
                {tarea.descripcion.slice(0, 120)}
                {tarea.descripcion.length > 120 ? "..." : ""}
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
