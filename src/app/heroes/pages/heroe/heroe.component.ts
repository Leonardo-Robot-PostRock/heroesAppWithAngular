import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroeId?: string;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=> console.log(id))
  }
}
