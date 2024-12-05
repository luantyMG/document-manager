import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no renderizamos nada

  return (
    <>
      <div className="modal modal-open">
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
          <div className="modal-action">
            <button className="btn" onClick={onClose}>Cerrar</button>
            <button className="btn btn-primary">Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
