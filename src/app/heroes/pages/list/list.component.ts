import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
      h1 {
        text-align: center;
      }
      .ng-star-inserted {
        margin-right: 20px;
      }
    `
  ]
})
export class ListComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  public heroes: Heroe[] = [];

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes: Heroe[]) => (this.heroes = heroes));
  }
}
