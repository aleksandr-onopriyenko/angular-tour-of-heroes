import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../shared/hero.service";
import {Hero} from "../../shared/hero";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero!: Hero

  constructor(private heroesService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.hero = this.heroesService.getHero(+res['id'])
    })
  }

  goBack() {
    this.heroesService.isHeroDetail = this.location.isCurrentPathEqualTo('/heroes');
    this.location.back()
  }

}
