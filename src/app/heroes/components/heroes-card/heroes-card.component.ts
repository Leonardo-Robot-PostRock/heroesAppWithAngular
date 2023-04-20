import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html'
})
export class HeroesCardComponent implements OnInit {
  @Input() heroe!: Hero;

  ngOnInit(): void {
    if (!this.heroe) throw Error('Hero property is required');
  }
}
