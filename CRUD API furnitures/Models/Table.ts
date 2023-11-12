import { Schema, model } from "mongoose";

const tableSchema = new Schema({
  size: { type: String, required: true },
  material: { type: String, required: true },
  color: { type: String, required: true },
  name: { type: String, required: true },
  hexCode: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  cost: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
});

export const Table = model("Table", tableSchema);
