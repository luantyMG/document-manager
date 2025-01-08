import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "src/utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "GET": //METODO GET PARA OBTENER TODAS LAS ADSCRIPCIONES
      try {
        const query = ` SELECT * FROM adscripcion`;

        const result = await connection.query(query);
        return res.status(200).json(result.rows);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }

    case "POST": //METODO POST PARA CREAR UNA ADSCRIPCION
      try {
        // Extraer las claves y los valores dinámicamente
        const keys = Object.keys(body); // Claves de los campos
        const values = Object.values(body); // Valores de los campos

        // Construir la consulta SQL de manera dinámica
        const query = `
          INSERT INTO adscripcion (${keys.join(", ")}) 
          VALUES (${keys.map((_, index) => `$${index + 1}`).join(", ")}) 
          RETURNING *`;

        // Ejecutar la consulta con los valores
        const result = await connection.query(query, values);

        // Responder con el resultado
        return res.status(200).json(result.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }

    default:
      return res.status(405).json({ message: "METODO NO DISPONIBLE" });
  }
};
