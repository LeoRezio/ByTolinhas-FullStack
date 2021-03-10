import { Request, Response, Router } from "express";
import Conq from "./models/Conq";
import Game from "./models/Games";
import Player from "./models/Players";

const router = Router();

router.get("/", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const games = await Game.find({});
  const players = await Player.find({});
  const conqs = await Conq.find({});
  res.status(200).json({ games, players, conqs });
});

router.get("/player", async (request: Request, response: Response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const players = await Player.find({});
  response.status(200).json(players);
});

router.post("/player", async (req, res) => {
  const newPlayer = new Player(req.body);
  await newPlayer.save();
  res.status(201).json(newPlayer);
});

router.get("/game", async (req, res) => {
  const games = await Game.find({});
  res.status(200).json(games);
});

router.post("/game", async (req, res) => {
  const newGame = new Game(req.body);
  await newGame.save();
  res.status(201).json(newGame);
});

router.get("/conq", async (req, res) => {
  const conqs = await Conq.find({});
  res.status(201).json(conqs);
});

router.post("/conq", async (req, res) => {
  const newConq = new Conq(req.body);
  await newConq.save();
  res.status(201).json(newConq);
});

export { router };
