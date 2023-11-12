import { Request, Response } from "express";
import { Table } from "../../../Models/Table";

export const deleteTable = async (req: Request, res: Response) => {
  try {
    await Table.findByIdAndDelete(req.params._id);
    res.json({ message: "Table deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};