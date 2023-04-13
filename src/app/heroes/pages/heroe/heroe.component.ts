import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      .main-spinner {
        height: calc(100vh - 84px);
        justify-content: center;
      }
      
      .container-spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        min-width: 280px;
      }

      img {
        width: 45%;
        border-radius: 5px;
      }
    `
  ]
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(delay(2000))
      .pipe(switchMap(({ id }) => this.heroesService.getHeroesById(id)))
      .subscribe((heroe) => {
        this.heroe = heroe;
      });
  }

  goBack() {
    this.router.navigate(['/heroes/list']);
  }
}
