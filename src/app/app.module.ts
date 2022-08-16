import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeroesComponent} from './heroes/heroes.component';
import {DialogDataExampleDialog, HeroDialogComponent} from "./heroes/hero-dialog/hero-dialog.component";
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./shared/in-memory-data.service";
import {TopHeroComponent} from './heroes/top-hero/top-hero.component';
import {MaterialModule} from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDialogComponent,
    DialogDataExampleDialog,
    HeroDetailComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    TopHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
