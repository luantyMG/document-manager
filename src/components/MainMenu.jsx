'use client';  // Esto marca el componente como un componente del cliente

import React, { useState } from "react";
import Modal from "./Modal"; // Importamos el componente Modal
import { FaStar } from "react-icons/fa";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { BsFillInboxFill } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";
import { MdWatchLater } from "react-icons/md";
import { MdLabelImportant } from "react-icons/md";
import { IoMailSharp, IoSettingsSharp, IoFolderSharp } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";

const MainMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Cambiar estado para abrir el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cambiar estado para cerrar el modal
  };

  return (
    <>
      <ul className="menu bg-neutral-300 w-16 group hover:w-56 transition-all duration-300 space-y-1">
        <li>
          <button className="btn btn-sm flex items-center space-x-2 p-2" onClick={openModal}>
            <LuPencil className="text-lg" />
            <span className="hidden group-hover:inline ml-2">Redactar</span>
          </button>
        </li>
        <li>
          <a className="flex items-center space-x-2 p-2">
            <BsFillInboxFill className="text-lg" />
            <span className="hidden group-hover:inline ml-2">Recibidos</span>
          </a>
        </li>
        <li>
          <a className="flex items-center space-x-2 p-2">
            <RiInboxUnarchiveFill className="text-lg" />
            <span className="hidden group-hover:inline ml-2">Enviados</span>
          </a>
        </li>
        <li>
          <a className="flex items-center space-x-2 p-2">
            <FaStar className="text-lg" />
            <span className="hidden group-hover:inline ml-2">Destacados</span>
          </a>
        </li>
        <li>
          <a className="flex items-center space-x-2 p-2">
            <MdLabelImportant className="text-lg" />
            <span className="hidden group-hover:inline ml-2">Importantes</span>
          </a>
        </li>
        <li>
          <a className="flex items-center space-x-2 p-2">
            <MdWatchLater className="text-lg" />
            <span className="hidden group-hover:inline ml-2">Pospuestos</span>
          </a>
        </li>
        <li>
          <a className="flex items-center space-x-2 p-2">
            <IoMailSharp className="text-lg" />
            <span className="hidden group-hover:inline ml-2">Todos</span>
          </a>
        </li>
        <li>
          <a className="flex items-center space-x-2 p-2">
            <RiDeleteBin5Fill className="text-lg" />
            <span className="hidden group-hover:inline ml-2">Papelera</span>
          </a>
        </li>
        <li>
          <details>
            <summary className="flex items-center space-x-2 cursor-pointer p-2">
              <IoSettingsSharp className="text-lg" />
              <span className="hidden group-hover:inline ml-2">Ajustes</span>
            </summary>
            <ul className="pl-4">
              <li>
                <details>
                  <summary className="flex items-center space-x-2 cursor-pointer p-2">
                    <IoFolderSharp className="text-lg" />
                    <span className="hidden group-hover:inline ml-2">Catalogos</span>
                  </summary>
                  <ul className="pl-4">
                    <li>
                      <a className="text-sm">Usuarios</a>
                    </li>
                    <li>
                      <a className="text-sm">Planteles</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>

      {/* Aquí aseguramos que el modal se renderice solo cuando el estado isModalOpen es verdadero */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default MainMenu;
