import { Component, OnInit } from '@angular/core';
import { players } from 'src/app/heros';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player = players;
  constructor() {}

  ngOnInit(): void {}
}
