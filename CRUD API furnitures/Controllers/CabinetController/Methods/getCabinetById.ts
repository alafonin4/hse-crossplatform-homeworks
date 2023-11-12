import { Request, Response } from "express";
import { Cabinet } from "../../../Models/Cabinet";

export const getCabinetById = async (req: Request, res: Response) => {
  try {
    const cabinet = await Cabinet.findById(req.params._id);
    res.json(cabinet);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};