import { Request, Response } from "express";
import { Chair } from "../../../Models/Chair";

export const deleteChair = async (req: Request, res: Response) => {
  try {
    await Chair.findByIdAndDelete(req.params._id);
    res.json({ message: "Chair deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};