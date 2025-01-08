import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [taskType, setTaskType] = useState(""); // Estado para el tipo de tarea
  const [isFormVisible, setIsFormVisible] = useState(false); // Controla la visibilidad del formulario

  if (!isOpen) return null;

  // Función para actualizar el tipo de tarea y mostrar el formulario
  const handleTaskTypeSelection = (type) => {
    setTaskType(type); // Establece el tipo de tarea seleccionado
    setIsFormVisible(true); // Muestra el formulario
  };

  return (
    <>
      <div className="modal modal-open max-h-max">
        <div className="modal-box w-11/12 max-w-5xl">
          {/* Leyenda centrada */}
          {!isFormVisible && (
            <div className="mb-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
              Selecciona el tipo de documento:
              </h2>
            </div>
          )}

          {/* Si no se ha seleccionado una tarea, mostramos los botones */}
          {!isFormVisible && (
            <div className="flex justify-center space-x-8">
              <button
                className="px-5 py-3 bg-blue-500 text-white font-bold rounded-md text-xs hover:bg-blue-600 transition duration-200"
                onClick={() => handleTaskTypeSelection("Oficio")}
              >
                Oficio
              </button>
              <button
                className="px-5 py-3 bg-blue-500 text-white font-bold rounded-md text-xs hover:bg-blue-600 transition duration-200"
                onClick={() => handleTaskTypeSelection("Circular")}
              >
                Circular
              </button>
             
            </div>
          )}

          {/* Formulario que se muestra después de seleccionar el tipo de tarea */}
          {isFormVisible && (
            <>
              <h3 className="text-lg font-bold">
                {taskType ? ` ${taskType}` : "Tarea Nueva"}
              </h3>

              {/* Campos del formulario */}
              <form>
                <div className="form-control">
                  <label className="label">Destinatario</label>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">Asunto</label>
                  <input
                    type="text"
                    placeholder="Asunto del mensaje"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">Mensaje</label>
                  <textarea
                    placeholder="Escribe tu mensaje"
                    className="textarea textarea-bordered"
                    rows={5}
                  ></textarea>
                </div>
            

              {/* Input de archivo */}
              <div className="contenedorfile">
                <input type="file" className="file-input w-full py-2" />
              </div>

              {/* Checkbox de urgente */}
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-700">Marcar como urgente</label>
                <input
                  type="checkbox"
                  className="toggle toggle-error"
                  defaultChecked={false}
                />
              </div>

              {/* Botones de acción */}
              <div className="modal-action justify-between">
                <button className="btn btn-outline btn-success py-1">
                  Vista Previa
                </button>
              </div>

              <div className="modal-action justify-between">
                <div>
                  <button className="btn btn-outline btn-error">Firmar</button>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="px-4 py-2 bg-transparent text-blue-500 font-bold border-2 border-blue-500 rounded-lg text-sm hover:bg-blue-500 hover:text-black hover:border-blue-500 transition-colors duration-200 ease-in-out"
                    onClick={onClose}
                  >
                    Cerrar
                  </button>
                  <button className="px-5 py-3 bg-blue-500 text-black font-bold rounded-md text-xs border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                    Enviar
                  </button>
                </div>
              </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
