import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../utils/database"; 

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await connection.query("SELECT NOW()");

    return res.json({ message: "pong", time: response.rows[0].now });
  } catch (error) {
   
    console.error("Error al ejecutar la consulta:", error);
    return res.status(500).json({ message: "Error al ejecutar la consulta", error });
  }
};
