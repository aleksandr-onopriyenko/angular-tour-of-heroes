import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroHostDetailComponent} from "./heroes/hero-host-detail/hero-host-detail.component";

const routes: Routes = [
  {path: ':id', component: HeroHostDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
