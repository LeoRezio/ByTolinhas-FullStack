import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/players/player/player.service';
import { Player } from 'src/app/shared/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  providers: [PlayerService],
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: Player[];
  constructor(private playerservice: PlayerService) {}
  ngOnInit(): void {
    this.playerservice.getPlayers().subscribe((player) => {
      this.player = player;
    });
  }
}
