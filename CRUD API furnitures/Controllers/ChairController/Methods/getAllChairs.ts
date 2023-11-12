import { Request, Response } from "express";
import { Chair } from "../../../Models/Chair";

export const getAllChairs = async (req: Request, res: Response) => {
  try {
    const chairs = await Chair.find();
    res.json(chairs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};