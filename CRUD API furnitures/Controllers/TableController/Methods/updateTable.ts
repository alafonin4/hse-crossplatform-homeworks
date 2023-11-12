import { Request, Response } from "express";
import { Table } from "../../../Models/Table";

export const updateTable = async (req: Request, res: Response) => {
  try {
    const updatedTable = await Table.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
    res.json(updatedTable);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};