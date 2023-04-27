import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

import { Publisher } from '../../interfaces/heroes.interface';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent {
  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });

  public publishers = [
    {
      id: 'DC Comics',
      value: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      value: 'Marvel - Comics'
    }
  ];

  constructor(private heroesService: HeroesService) {}

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    // this.heroesService.updateHero(this.heroForm.value);
  }
}
