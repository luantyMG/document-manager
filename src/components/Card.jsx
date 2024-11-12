import React from "react";
import { data } from "../utils/data";

const Card = () => {
  return (
    <> 
      <div>
        {data.tarea.map((tarea) => (
          <div key={tarea.tarea_id} className="border-zinc-100 border-2 bg-slate-50 flex flex-nowrap justify-between">
            <p className="font-serif">{tarea.asignador_nombre}</p>
            <p className="font-serif">{tarea.asunto}</p>
            <button className="btn btn-primary">{tarea.estatus}</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
