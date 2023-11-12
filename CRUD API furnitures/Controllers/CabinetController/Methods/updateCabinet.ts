import { Request, Response } from "express";
import { Cabinet } from "../../../Models/Cabinet";

export const updateCabinet = async (req: Request, res: Response) => {
  try {
    const updatedCabinet = await Cabinet.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
    res.json(updatedCabinet);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};