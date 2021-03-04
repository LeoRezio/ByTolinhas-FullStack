import { Game } from './shared/game.models';

export const games: Game[] = [
  new Game(
    'slide 1',
    [17, 12],
    '21:00',
    'Amistoso',
    'assets/images/times/caravana.png',
    'Caravana do Feed'
  ),
  new Game(
    'slide 2',
    [19, 12],
    '21:00',
    'Copa Gontier',
    'assets/images/times/cobrakai.png',
    'Cobra Kai'
  ),
  new Game(
    'slide 3',
    [21, 12],
    '21:00',
    'Amistoso',
    'assets/images/times/storm.png',
    'Storm'
  ),
  new Game(
    'slide 4',
    [22, 12],
    '21:00',
    'Amistoso',
    'assets/images/times/nikitis.png',
    'Nikitis'
  )
];
