import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferHomeComponent } from './list-offers/pages/offer-home/offer-home.component';

const routes: Routes = [
  { path: 'home', component: OfferHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
