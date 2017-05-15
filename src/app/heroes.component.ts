import { Component, OnInit } from '@angular/core';
import { Hero } from './Heroes/hero.component';
import {HeroService} from './Heroes/hero.service';

@Component({
  selector: 'my-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroService]
})
export class HeroesComponent implements OnInit {   
  //title = 'Tour of heroes';
  heroes:Hero[];
  
  selectedHero: Hero;  

  constructor (private heroService:HeroService){}

   ngOnInit() : void {
      this.getHeroes();
    }

   getHeroes():void{
     this.heroService.getHeroSlowy().then(heroesData=>this.heroes = heroesData);
      //this.heroService.getHeros().then(heroesData=>this.heroes = heroesData);
   }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}
