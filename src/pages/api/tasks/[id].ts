import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "src/utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;

  console.log(query);

  switch (method) {
    case "GET":
      try {
        const tareaId = "SELECT * FROM tareas WHERE tarea_id = $1";
        const values = [query.id];
        const result = await connection.query(tareaId, values);
        console.log(result);

        if (result.rows.length === 0) {
          return res.status(404).json({ message: "TAREA NO ENCONTRADA" });
        }
        return res.status(200).json({message: "TAREA ENCONTRADA", tarea: result.rows[0] });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }


      case "PUT":
  try {
    const { estatus } = body;
    const tareaId = query.id;

    // Paso 1: Actualizar la tabla 'asignacionestareas' si es necesario
    const updateAsignacionesQuery = "UPDATE asignacionestareas SET estatus_usuario = $1 WHERE tarea_id = $2 RETURNING *";
    const asignacionesValues = [estatus, tareaId];
    const asignacionesResult = await connection.query(updateAsignacionesQuery, asignacionesValues);

    // Si no se encuentra ninguna asignación, se devuelve un error (opcional)
    if (asignacionesResult.rows.length === 0) {
      return res.status(404).json({ message: "NO SE ENCONTRARON ASIGNACIONES PARA ESTA TAREA" });
    }

    // Paso 2: Actualizar la tabla 'tareas'
    const updateTareasQuery = "UPDATE tareas SET estatus = $1 WHERE tarea_id = $2 RETURNING *";
    const tareasValues = [estatus, tareaId];
    const tareasResult = await connection.query(updateTareasQuery, tareasValues);

    // Verificar si la tarea fue encontrada y actualizada
    if (tareasResult.rows.length === 0) {
      return res.status(404).json({ message: "TAREA NO ENCONTRADA" });
    }

    return res.status(200).json({ message: "TAREA Y ASIGNACIÓN ACTUALIZADAS EXITOSAMENTE", tarea: tareasResult.rows[0] });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);  // Mostrar detalles del error
    return res.status(500).json({ message: error.message });
  }
      case "DELETE":
        try {
          const tareaId = query.id;
  
          // Eliminar las filas dependientes en 'asignacionestareas'
          const deleteAsignacionesText = "DELETE FROM asignacionestareas WHERE tarea_id = $1";
          await connection.query(deleteAsignacionesText, [tareaId]);
  
          // Ahora eliminar la tarea en 'tareas'
          const deleteTareaText = "DELETE FROM tareas WHERE tarea_id = $1 RETURNING *";
          const result = await connection.query(deleteTareaText, [tareaId]);
          console.log(result);
  
          if (result.rowCount === 0) {
            return res.status(404).json({ message: "TAREA NO ENCONTRADA" });
          }
  
          return res.status(200).json({ message: "TAREA ELIMINADA EXITOSAMENTE", tarea: result.rows[0] });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          return res.status(500).json({ message: error.message });
        }

    default:
      return res.status(405).json({ message: "METODO NO DISPONIBLE" });
  }
};
