import { Request, Response } from "express";
import { Chair } from "../../../Models/Chair";

export const createChair = async (req: Request, res: Response) => {
  try {
    const chair = new Chair(req.body);
    const savedChair = await chair.save();
    res.status(201).json(savedChair);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
