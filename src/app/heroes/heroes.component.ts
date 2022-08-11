import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../shared/hero";
import {HeroesDataMock} from "../shared/heroes-data.mock";

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

  constructor(private heroesDataMock: HeroesDataMock) {
  }

  ngOnInit(): void {
    this.heroesDataMock.getHeroes().subscribe(res => {
      console.log('RERENDER')
      this.heroes = res
    })
  }
}
