import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Game } from 'src/app/shared/game.models';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  providers: [GameService],
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: Game[];
  constructor(private gameservice: GameService) {}
  customOptions: OwlOptions = {
    items: 3,
    center: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
      "<div class='btn-prev controlsize'></div>",
      "<div class='btn-next controlsize'></div>"
    ],
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      }
    }
  };
  ngOnInit(): void {
    this.gameservice.getGames().subscribe((game) => {
      this.game = game;
    });
  }
}
