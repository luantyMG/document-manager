import React from "react";

const Adscripcion = () => {

  import { useState, useEffect, useRef } from "react";

  useEffect(() => {
  const fea
   
  }, [])
  
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
              <th>Municipio</th>{" "}
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adscripcion;
