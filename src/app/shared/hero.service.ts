import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import {HEROES} from "./heroes-data.mock";
import {Router} from "@angular/router";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = HEROES

  constructor(private router: Router, private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.openSnackBar('HeroService: fetched heroes')
    return of(this.heroes)
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.openSnackBar(`HeroesComponent: Selected hero id=${id}`)
    return of(this.heroes.find((h) => h.id === id)!)
  }

  setHero(hero: Hero): void {
    this.heroes.push(hero)
  }

  updateHero(hero: Hero) {
    this.heroes.splice(this.heroes.findIndex((h: Hero) => h.id === hero.id), 1)
    this.heroes.push(hero)
    this.heroes.sort((a, b) => a.id - b.id)
    this.router.navigate(['']).then()
  }

  deleteHero(id: number): void {
    this.heroes.splice(this.heroes.findIndex((h: Hero) => h.id === id), 1)
  }
}
