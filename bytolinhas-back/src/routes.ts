import { Request, Response, Router } from "express";
import Conq from "./models/Conq";
import Game from "./models/Games";
import Player from "./models/Players";

const router = Router();

router.get("/", async (request: Request, response: Response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const games = await Game.find({});
  const players = await Player.find({});
  const conqs = await Conq.find({});
  response.status(200).json({ games, players, conqs });
});

router.get("/player", async (request: Request, response: Response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const players = await Player.find({});
  response.status(200).json(players);
});

router.post("/player", async (request: Request, response: Response) => {
  const newPlayer = new Player(request.body);
  await newPlayer.save();
  response.status(201).json(newPlayer);
});

router.get("/game", async (request: Request, response: Response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const games = await Game.find({});
  response.status(200).json(games);
});

router.post("/game", async (request: Request, response: Response) => {
  const newGame = new Game(request.body);
  await newGame.save();
  response.status(201).json(newGame);
});

router.get("/conq", async (request: Request, response: Response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const conqs = await Conq.find({});
  response.status(201).json(conqs);
});

router.post("/conq", async (request: Request, response: Response) => {
  const newConq = new Conq(request.body);
  await newConq.save();
  response.status(201).json(newConq);
});

export { router };
