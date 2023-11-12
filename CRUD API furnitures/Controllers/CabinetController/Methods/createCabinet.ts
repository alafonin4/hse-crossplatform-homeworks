import { Request, Response } from "express";
import { Cabinet } from "../../../Models/Cabinet";

export const createCabinet = async (req: Request, res: Response) => {
  try {
    const cabinet = new Cabinet(req.body);
    const savedCabinet = await cabinet.save();
    res.status(201).json(savedCabinet);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};