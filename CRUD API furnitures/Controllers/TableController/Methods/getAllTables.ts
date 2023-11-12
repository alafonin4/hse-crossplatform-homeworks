import { Request, Response } from "express";
import { Table } from "../../../Models/Table";

export const getAllTables = async (req: Request, res: Response) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};