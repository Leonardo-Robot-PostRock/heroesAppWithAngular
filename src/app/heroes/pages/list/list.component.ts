import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  public heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes: Hero[]) => (this.heroes = heroes));
  }
}
