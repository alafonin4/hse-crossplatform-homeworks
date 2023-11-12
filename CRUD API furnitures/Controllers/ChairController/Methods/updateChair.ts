import { Request, Response } from "express";
import { Chair } from "../../../Models/Chair";

export const updateChair = async (req: Request, res: Response) => {
  try {
    const updatedChair = await Chair.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
    res.json(updatedChair);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};