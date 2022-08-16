import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HeroDetailComponent} from "./heroes/hero-detail/hero-detail.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: HomeComponent},
  {path: '404', component: PageNotFoundComponent},
  {
    path: 'heroes',
    component: HeroesComponent,
    children: [
      {path: ':id', component: HeroDetailComponent}
    ]
  },
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
