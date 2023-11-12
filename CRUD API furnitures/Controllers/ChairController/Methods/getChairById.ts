import { Request, Response } from "express";
import { Chair } from "../../../Models/Chair";

export const getChairById = async (req: Request, res: Response) => {
  try {
    const chair = await Chair.findById(req.params._id);
    res.json(chair);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};