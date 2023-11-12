import { Request, Response } from "express";
import { Cabinet } from "../../../Models/Cabinet";

export const getAllCabinets = async (req: Request, res: Response) => {
  try {
    const cabinets = await Cabinet.find();
    res.json(cabinets);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};