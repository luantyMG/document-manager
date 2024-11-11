
import { FaStar } from "react-icons/fa";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { BsFillInboxFill } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";
import { MdWatchLater } from "react-icons/md";
import { MdLabelImportant } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";


const MainMenu = () => {
  return (
    <>
      <ul className="menu bg-base-100 rounded-box w-56">
        <li><button className="btn btn-lg"> <LuPencil />Redactar
          </button></li>
  <li>
    <a>
    <BsFillInboxFill />
      Recibidos
    </a>
  </li>
  <li>
    <a>
    <RiInboxUnarchiveFill/>
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
      <MdLabelImportant/>
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
</ul>
    </>
  );
};

export default MainMenu;
