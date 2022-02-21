import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdobeCard1Component } from './adobe-card1/adobe-card1.component';
import { PhotoshopCard2Component } from './photoshop-card2/photoshop-card2.component';

const routes: Routes = [
  { path: '', redirectTo: 'adobe-card1', pathMatch: 'full' },
  { path: 'adobe-card1', component: AdobeCard1Component },
  { path: 'adobe', component: AdobeCard1Component },
  { path: 'photoshop-card2', component: PhotoshopCard2Component },
  { path: 'photoshop', component: PhotoshopCard2Component },
  { path: 'facebook', component: PhotoshopCard2Component },
  { path: 'instagram', component: PhotoshopCard2Component },
  { path: '**', component: PhotoshopCard2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


