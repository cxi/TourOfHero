import {Injectable} from '@angular/core';
import { HEROES } from './HeroData';
import { Hero } from "app/Heroes/hero.component";

@Injectable()
export class HeroService{
    getHeros (): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    };

    getHeroSlowy () :Promise<Hero[]>{
        return new Promise(resolve =>{
            setTimeout(()=> resolve(this.getHeros()),4000);
        });
    }
}