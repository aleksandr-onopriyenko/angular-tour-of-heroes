import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Hero} from "../shared/hero";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../shared/hero.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  @Input('heroes') heroes!: Hero[]
  isShown = true

  // @ts-ignore
  @ViewChild(MatSidenav) sidenav;

  constructor(public heroService: HeroService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.isShown = this.heroService.getIsHeroDetail()
    })
    this.heroes = this.heroService.heroes
  }

  onSelect(id: number) {
    this.router.navigate(['heroes', id]).then()
  }
}
