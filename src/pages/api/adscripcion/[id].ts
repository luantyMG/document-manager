import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "src/utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;

  switch (method) {
    case "GET":
      try {
        const consulta = `SELECT * FROM adscripcion WHERE id = $1`;
        const values = [query.id];
        const result = await connection.query(consulta, values);

        if (result.rows.length === 0) {
          return res.status(404).json({ message: "ADSCRIPCION NO ENCONTRADA" });
        }
        return res.status(200).json(result.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }

    case "DELETE":
      try {
        const consulta = `DELETE FROM adscripcion WHERE id = $1 RETURNING *`;
        const values = [query.id];
        const result = await connection.query(consulta, values);

        if (result.rowCount === 0) {
          return res.status(404).json({ message: "ADSCRIPCION NO ENCONTRADA" });
        }
        console.log(result);
        return res.status(200).json({
          message: "ADSCRIPCION ELIMINADA",
          data: result.rows[0],
        });
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }

      case "PUT":
        try {
            const { clave, nombre } = body;
            const consulta = `UPDATE  adscripcion SET clave = $1, nombre = $2 WHERE id = $3 RETURNING *`;
            const values = [clave, nombre, query.id];
            const result = await connection.query(consulta, values);
    
            if (result.rows.length === 0) {
              return res.status(404).json({ message: "ADSCRIPCION NO ENCONTRADA" });
            }
            return res.status(200).json({message: "ADSCRIPCION ACTUALIZADA", adscripcion: result.rows[0]});
          } catch (error: any) {
            return res.status(500).json({ message: error.message });
          }
    

    default:
      return res.status(405).json({ message: "METODO NO DISPONIBLE" });
  }
};
