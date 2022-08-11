import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Hero} from "../../shared/hero";
import {HeroesDataMock} from "../../shared/heroes-data.mock";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-hero-dialog',
  template: `
    <button mat-button type="button" (click)="openDialog()">Edit</button>`,
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
  templateUrl: 'hero-dialog.component.html',
  providers: [HeroesDataMock]
})
export class DialogDataExampleDialog implements OnInit {
  hero!: Hero

  constructor(private heroesDataMock: HeroesDataMock, @Inject(MAT_DIALOG_DATA) public data: Hero) {
  }

  ngOnInit() {
    this.hero = {...this.data}
  }

  onSave() {
    this.heroesDataMock.updateHeroes(this.hero, true)
  }
}

