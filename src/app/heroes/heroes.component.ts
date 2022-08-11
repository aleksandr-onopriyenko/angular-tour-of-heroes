import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../shared/hero";
import {HeroesDataMock} from "../shared/heroes-data.mock";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    img: 'ass'
  }
  @Input('heroes') heroes!: Hero[]
  selectedHero!: Hero

  constructor(private heroesDataMock: HeroesDataMock, private router: Router) {
  }

  ngOnInit(): void {
    this.heroesDataMock.getHeroes().subscribe(res => {
      console.log('RERENDER')
      this.heroes = res
    })
  }

  onSelect(id: number) {
    console.log(id)
    this.router.navigate(['', id]).then()
    this.selectedHero = this.heroesDataMock.getHero(id)
  }
}
