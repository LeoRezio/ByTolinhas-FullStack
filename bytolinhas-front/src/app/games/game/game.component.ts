import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { games } from 'src/app/games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games = games;
  constructor() {}
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
  ngOnInit(): void {}
}
