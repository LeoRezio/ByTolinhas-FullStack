import { Component, OnInit } from '@angular/core';
import { Conquest } from 'src/app/shared/conquest.models';
import { ConquestService } from './conquest.service';

@Component({
  selector: 'app-conquest',
  templateUrl: './conquest.component.html',
  styleUrls: ['./conquest.component.css']
})
export class ConquestComponent implements OnInit {
  conquest: Conquest[];
  constructor(private conquestservice: ConquestService) {}
  ngOnInit(): void {
    this.conquestservice.getConquest().subscribe((conq) => {
      this.conquest = conq;
    });
  }
}
