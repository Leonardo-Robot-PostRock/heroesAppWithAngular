import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  heroes: Heroe[] = [];

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes: Heroe[]) => (this.heroes = heroes));
  }
}
