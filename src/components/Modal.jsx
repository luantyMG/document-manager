import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no renderizamos nada

  

  return (
    <>
      <div className="modal modal-open max-h-max">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Redactar un mensaje</h3>
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
          </form>
          <div className="contenedorfile">
            <input type="file" className="file-input w-full py-2 " />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-sm text-gray-700">Marcar como urgente</label>
            <input
              type="checkbox"
              className="toggle toggle-error"
              defaultChecked={false}
            />
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Modal;
