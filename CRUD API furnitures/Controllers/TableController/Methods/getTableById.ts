import { Request, Response } from "express";
import { Table } from "../../../Models/Table";

export const getTableById = async (req: Request, res: Response) => {
  try {
    const table = await Table.findById(req.params._id);
    res.json(table);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};