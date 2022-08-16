import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Hero} from "../../shared/hero";
import {HeroService} from "../../shared/hero.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-hero-dialog',
  template: `
    <button mat-raised-button color="accent" type="button" (click)="openDialog()">
      <ng-content></ng-content>
    </button>`,
})
export class HeroDialogComponent {
  @Input() hero!: Hero

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {data: this.hero});
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'hero-dialog.component.html'
})
export class DialogDataExampleDialog implements OnInit {
  hero!: Hero

  constructor(private heroService: HeroService,
              @Inject(MAT_DIALOG_DATA) public data: Hero,
              private router: Router) {
  }

  ngOnInit() {
    this.hero = {...this.data}
  }

  onSave() {
    if (!this.hero.id) {
      if (this.hero.name && this.hero.img) {
        this.heroService.addHero(this.hero).subscribe()
        this.router.navigate(['/heroes']).then()
      }
      return
    }
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(
        () => {
          this.router.navigate(['/heroes']).then()
        }
      )
    }
  }
}

