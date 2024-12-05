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
      <ul className="menu bg-neutral-300 w-56">
        <li>
          <button className="btn btn-lg" onClick={openModal}>
            <LuPencil />
            Redactar
          </button>
        </li>
        <li>
          <a>
            <BsFillInboxFill />
            Recibidos
          </a>
        </li>
        <li>
          <a>
            <RiInboxUnarchiveFill />
            Enviados
          </a>
        </li>
        <li>
          <a>
            <FaStar />
            Destacados
          </a>
        </li>
        <li>
          <a>
            <MdLabelImportant />
            Importantes
          </a>
        </li>
        <li>
          <a>
            <MdWatchLater />
            Pospuestos
          </a>
        </li>
        <li>
          <a>
            <IoMailSharp />
            Todos
          </a>
        </li>
        <li>
          <a>
            <RiDeleteBin5Fill />
            Papelera
          </a>
        </li>
        <li>
          <details open>
            <summary>
              <IoSettingsSharp />
              Ajustes
            </summary>
            <ul>
              <li>
                <details open>
                  <summary>
                    <IoFolderSharp />
                    Catalogos
                  </summary>
                  <ul>
                    <li>
                      <a>Usuarios</a>
                    </li>
                    <li>
                      <a>Planteles</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default MainMenu;
