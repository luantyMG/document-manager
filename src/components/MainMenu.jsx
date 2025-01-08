'use client';  // Esto marca el componente como un componente del cliente

import React, { useState } from "react";
import Modal from "./Modal"; // Importamos el componente Modal
import { FaStar } from "react-icons/fa";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { BsFillInboxFill } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";
import { MdWatchLater } from "react-icons/md";
import { MdLabelImportant } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosListBox } from "react-icons/io";
import { AiOutlineAppstoreAdd } from "react-icons/ai";  // Importamos íconos adicionales para "Catalogos"

const MainMenu = ({ onMenuSelect }) => {  // Recibimos la función onMenuSelect como prop
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estados para manejar los submenús
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCatalogosOpen, setIsCatalogosOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Cambiar estado para abrir el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cambiar estado para cerrar el modal
    // Cerrar todos los submenús al salir del modal
    setIsSettingsOpen(false);
    setIsCatalogosOpen(false);
  };

  // Funciones para manejar el cambio de estado de los submenús
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);
  const toggleCatalogos = () => setIsCatalogosOpen(!isCatalogosOpen);

  // Manejo de hover en los submenús
  const handleMouseEnterSettings = () => setIsSettingsOpen(true);
  const handleMouseLeaveSettings = () => setIsSettingsOpen(false);
  const handleMouseEnterCatalogos = () => setIsCatalogosOpen(true);
  const handleMouseLeaveCatalogos = () => setIsCatalogosOpen(false);

  // Función para manejar el click en las opciones de Catalogos
  const handleCatalogoClick = (option) => {
    onMenuSelect(option);  // Actualizamos el componente con la opción seleccionada
  };

  return (
    <>
      <ul className="menu bg-neutral-300 w-16 group hover:w-56 transition-all duration-300 space-y-1">
        {/* Botón de Redactar */}
        <li>
          <button
            className="btn btn-sm flex items-center space-x-2 p-2 w-10 group-hover:w-full transition-all duration-300"
            onClick={openModal}
          >
            <LuPencil className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Redactar
            </span>
          </button>
        </li>

        {/* Menú de Recibidos */}
        <li>
          <a className="flex items-center space-x-2 p-2">
            <BsFillInboxFill className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Recibidos
            </span>
          </a>
        </li>

        {/* Menú de Enviados */}
        <li>
          <a className="flex items-center space-x-2 p-2">
            <RiInboxUnarchiveFill className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Enviados
            </span>
          </a>
        </li>

        {/* Menú de Destacados */}
        <li>
          <a className="flex items-center space-x-2 p-2">
            <FaStar className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Destacados
            </span>
          </a>
        </li>

        {/* Menú de Importantes */}
        <li>
          <a className="flex items-center space-x-2 p-2">
            <MdLabelImportant className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Importantes
            </span>
          </a>
        </li>

        {/* Menú de Pospuestos */}
        <li>
          <a className="flex items-center space-x-2 p-2">
            <MdWatchLater className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Pospuestos
            </span>
          </a>
        </li>

        {/* Menú de Todos */}
        <li>
          <a className="flex items-center space-x-2 p-2"
          onClick={() => handleCatalogoClick('Tareas')}>
            <IoMailSharp className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Todos
            </span>
          </a>
        </li>

        {/* Menú de Papelera */}
        <li>
          <a className="flex items-center space-x-2 p-2">
            <RiDeleteBin5Fill className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Papelera
            </span>
          </a>
        </li>

        {/* Menú de Catalogos con submenú */}
        <li
          onMouseEnter={handleMouseEnterCatalogos}
          onMouseLeave={handleMouseLeaveCatalogos}
        >
          <button
            onClick={toggleCatalogos}
            className="flex items-center space-x-2 p-2 w-full group"
          >
            <IoIosListBox className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Catalogos
            </span>
          </button>
          {/* Submenú de Catalogos */}
          {isCatalogosOpen && (
            <ul className="pl-4 space-y-1">
              <li><button onClick={() => handleCatalogoClick('Adscripcion')}>Adscripción</button></li>
              <li><button onClick={() => handleCatalogoClick('Departamentos')}>Departamentos</button></li>
              <li><button onClick={() => handleCatalogoClick('Áreas')}>Áreas</button></li>
              <li><button onClick={() => handleCatalogoClick('Puestos')}>Puestos</button></li>
              <li><button onClick={() => handleCatalogoClick('Empleados')}>Empleados</button></li>
            </ul>
          )}
        </li>

        {/* Menú de Configuración con submenú */}
        <li
          onMouseEnter={handleMouseEnterSettings}
          onMouseLeave={handleMouseLeaveSettings}
        >
          <button
            onClick={toggleSettings}
            className="flex items-center space-x-2 p-2 w-full group"
          >
            <AiOutlineAppstoreAdd className="text-lg" />
            <span className="absolute left-0 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:relative ml-2 transition-all duration-300">
              Configuración
            </span>
          </button>
          {/* Submenú de Configuración */}
          {isSettingsOpen && (
            <ul className="pl-4 space-y-1">
              <li><a href="#">Preferencias</a></li>
              <li><a href="#">Seguridad</a></li>
              <li><a href="#">Notificaciones</a></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Modal */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default MainMenu;
