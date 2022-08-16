import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../shared/hero.service";
import {Hero} from "../../shared/hero";

@Component({
  selector: 'app-top-hero',
  templateUrl: './top-hero.component.html',
  styleUrls: ['./top-hero.component.scss']
})
export class TopHeroComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
