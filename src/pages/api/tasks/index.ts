import {NextApiRequest, NextApiResponse} from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    
    const { method } = req;
    switch (method) {
        case "GET":
            return res.status(200).json({ message: "GETTING TASK" });
        case "POST":
            return res.status(200).json({ message: "POSTING TASK" });
        default:
            return res.status(405).json({ message: "Method not allowed" });
    }
}   