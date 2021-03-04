import mongoose, { Schema, Document } from "mongoose";

export interface IConq extends Document {
  img: string;
  title: string;
  position: string;
}

const conqSchema = new mongoose.Schema({
  img: String,
  title: String,
  position: String,
});

export default mongoose.model<IConq>("Conq", conqSchema);
