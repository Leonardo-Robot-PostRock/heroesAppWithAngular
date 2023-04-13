import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;


  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {}
  ngOnInit(): void {
    this.activatedRoute.params.pipe(delay(2000)).pipe(switchMap(({ id }) => this.heroesService.getHeroesById(id)),
    ).subscribe((heroe)=>{
      this.heroe = heroe;
    })
  }
}
