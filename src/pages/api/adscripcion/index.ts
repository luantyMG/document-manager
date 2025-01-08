

import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "src/utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body} = req;

    switch (method) {
        case "GET":
            try {
                const query = `
                    SELECT * FROM adscripcion
                `;
                const result = await connection.query(query);
                return res.status(200).json(result.rows);
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }

            case "POST":
                console.log(body);
                return res.status(200).json({ message: "Creando adscripcion" });
                
                

        default:
            return res.status(405).json({ message: "METODO NO DISPONIBLE" });
    }
};