import mongoose, { Schema, Document } from "mongoose";

export interface IGame extends Document {
  alt: string;
  date: number[];
  hour: string;
  champ: string;
  imgTeam: string;
  nameTeam: string;
}

const gameSchema = new mongoose.Schema({
  alt: String,
  date: [Number],
  hour: String,
  champ: String,
  imgTeam: String,
  nameTeam: String,
});

export default mongoose.model<IGame>("Game", gameSchema);
