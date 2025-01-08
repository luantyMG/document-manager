import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "src/utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        // Cambia 'usuarios.id' por 'usuarios.usuario_id'
        const query = `
          SELECT tareas.*, usuarios.nombre 
          FROM tareas 
          JOIN usuarios ON tareas.creador_id = usuarios.usuario_id
        `;
        const result = await connection.query(query);
        return res.status(200).json(result.rows);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }

    case "POST":
      try {
        const { creador_id, asunto, descripcion, prioridad, estatus } = body;

        const query = "INSERT INTO tareas (creador_id, asunto, descripcion, prioridad, estatus) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [creador_id, asunto, descripcion, prioridad, estatus];
        const result = await connection.query(query, values);
        return res.status(200).json(result.rows[0]);  
      } catch (error) {
        console.log(error);
      }

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
};
