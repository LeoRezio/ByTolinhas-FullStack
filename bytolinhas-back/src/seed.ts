import mongoose from "mongoose";
import { Seeder } from "mongoose-seed-2";
// 1. import models, so they register in mongoose
import Game from "./models/Games";
import Conq from "./models/Conq";
import Player from "./models/Players";
import { games } from "./seeds-data/games";
import { players } from "./seeds-data/players";
import { conqs } from "./seeds-data/conqs";
// model example:
// mongoose.model('User', new mongoose.Schema({ email: String, unique: true }));
const modelgame = Game;
const modelconq = Conq;
const modelplayer = Player;
async function seed() {
  // 2. connect seeder
  const seeder = new Seeder("mongodb://localhost/byTolinhasDB");

  // 3. Pass names of models to be cleared
  await seeder.clearModels(["Game", "Conq", "Player"]);

  // 4. Pass data to initialize db where key is model, and value is list of documents
  await seeder.populateModels({
    Game: games,
    Player: players,
    Conq: conqs,
  });

  await seeder.disconnect();
}

seed();
