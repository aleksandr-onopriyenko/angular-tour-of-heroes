import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../shared/hero";
import {Router} from "@angular/router";
import {HeroService} from "../shared/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  @Input('heroes') heroes!: Hero[]
  selectedHero!: Hero

  constructor(private heroesDataMock: HeroService, private router: Router) {
  }

  ngOnInit(): void {
    this.heroesDataMock.getHeroes().subscribe(res => {
      this.heroes = res
    })
  }

  onSelect(id: number) {
    this.router.navigate(['', id]).then()
    this.heroesDataMock.getHero(id).subscribe(hero => {
      this.selectedHero = hero
    })
  }
}
