import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthClinicComponent } from './health-clinic/health-clinic.component';
import { HomeComponent } from './home/home.component';
import { HomelessReachComponent } from './homeless-reach/homeless-reach.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component : HomeComponent
  },
  {
    path: 'events/:eventId', component : NewsDetailComponent
  },
  {
    path: 'healthCinic', component: HealthClinicComponent
  },
  {
    path: 'homelesReach', component: HomelessReachComponent
  },
  {
    path: '**', component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
