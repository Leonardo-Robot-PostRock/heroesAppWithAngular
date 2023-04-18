import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

//Heroes routing module
import { HeroesRoutingModule } from './heroes-routing.module';

//Material Module
import { MaterialModule } from '../material/material.module';
import { HeroesCardComponent } from './components/heroes-card/heroes-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddComponent,
    HeroeComponent,
    HeroesCardComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class HeroesModule { }
