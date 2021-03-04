import { Component, OnInit } from '@angular/core';
import { conquests } from 'src/app/conquests';

@Component({
  selector: 'app-conquest',
  templateUrl: './conquest.component.html',
  styleUrls: ['./conquest.component.css']
})
export class ConquestComponent implements OnInit {
  conquests = conquests;
  constructor() {}

  ngOnInit(): void {}
}
