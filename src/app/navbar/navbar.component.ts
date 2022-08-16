import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {HeroService} from "../shared/hero.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  //@ts-ignore
  @Input() sidenav: MatSidenav

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
  }

  click() {
    this.heroService.isHeroDetail = false
  }
}
