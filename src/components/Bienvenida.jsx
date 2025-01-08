import React from 'react';

const Bienvenida = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
      <div className="text-center space-y-4">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold">¡Bienvenido!</h1>
        
        {/* Descripción de bienvenida */}
        <p className="text-lg max-w-3xl mx-auto">
          Estamos encantados de tenerte con nosotros. Esta página de presentación te guiará a través de nuestras funciones principales y te ayudará a comenzar rápidamente. ¡Esperamos que disfrutes de tu experiencia!
        </p>

        {/* Botón para continuar */}
        <div>
          <button className="btn btn-primary text-lg mt-4">
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bienvenida;
