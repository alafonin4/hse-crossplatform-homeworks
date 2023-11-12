import { Request, Response } from "express";
import { Cabinet } from "../../../Models/Cabinet";

export const deleteCabinet = async (req: Request, res: Response) => {
  try {
    await Cabinet.findByIdAndDelete(req.params._id);
    res.json({ message: "Cabinet deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};