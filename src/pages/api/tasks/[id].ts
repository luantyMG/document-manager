import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return res.status(200).json({ message: "GETTING UNQIUE TASK" });
    case "PUT":
      return res.status(200).json({ message: "UPDATING UNQIUE UNTASK" });
    case "DELETE":
      return res.status(200).json({ message: "DELETING UNQIUE TASK" });
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
};
