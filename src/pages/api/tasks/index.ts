import { NextApiRequest, NextApiResponse } from "next";
import { connection } from "../../../utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM tareas";
        const result = await connection.query(query);
        return res.status(200).json(result.rows);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }

    case "POST":
      try {
        const query =
          "INSERT INTO tareas (title, description, status) VALUES ($1, $2, $3) RETURNING *";
        const values = [body.title, body.description, body.status];
        const result = await connection.query(query, values);
        console.log(result);
        return res.status(200).json("Task created");
      } catch (error) {
        console.log(error);
      }
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
};
