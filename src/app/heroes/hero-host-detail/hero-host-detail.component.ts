import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-host-detail',
  templateUrl: './hero-host-detail.component.html',
  styleUrls: ['./hero-host-detail.component.scss']
})
export class HeroHostDetailComponent implements OnInit {
  public isHomePage: boolean = false

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param['id']) this.isHomePage = false
      if (!param['id']) this.isHomePage = true
    })
  }

}
