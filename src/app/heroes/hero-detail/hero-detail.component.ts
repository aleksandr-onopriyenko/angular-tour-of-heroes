import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Hero} from "../../shared/hero";
import {HeroService} from "../../shared/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero

  constructor(private heroesDataMock: HeroService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.heroesDataMock.getHero(+res['id']).subscribe(h => {
        this.hero = h
      })
      if (this.hero.description?.search('may refer to') !== -1 ||
        this.hero.description === undefined) {
        this.hero.description = 'Sorry( This Hero does not description'
      }
    })
  }

}
