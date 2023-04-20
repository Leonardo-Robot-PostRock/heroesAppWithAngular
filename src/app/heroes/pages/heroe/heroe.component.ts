import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['heroe.component.css']
})
export class HeroeComponent implements OnInit {
  public hero!: Hero;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) => this.heroesService.getHeroesById(id))
      )
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        return;
      });
  }

  goBack() {
    this.router.navigate(['/heroes/list']);
  }
}
