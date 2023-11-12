import { Request, Response } from "express";
import { Table } from "../../../Models/Table";

export const createTable = async (req: Request, res: Response) => {
  try {
    const table = new Table(req.body);
    const savedTable = await table.save();
    res.status(201).json(savedTable);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};