import mongoose, { Schema, Document } from "mongoose";

export interface IPlayer extends Document {
  imgHero: string;
  name: string;
  nick: string;
  role: [string, string];
  instagram: string;
  date: string;
  city: string;
}

const playerSchema = new mongoose.Schema({
  imgHero: String,
  name: String,
  nick: String,
  role: [String, String],
  instagram: String,
  date: String,
  city: String,
});

export default mongoose.model<IPlayer>("Player", playerSchema);
//const Player = mongoose.model("Player", playerSchema);
//module.exports = Player;
