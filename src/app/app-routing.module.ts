import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { HealthClinicComponent } from './health-clinic/health-clinic.component';
import { HelpUsComponent } from './help-us/help-us.component';
import { HomeComponent } from './home/home.component';
import { HomelessReachComponent } from './homeless-reach/homeless-reach.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component : HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactUsComponent
  },
  {
    path: 'help', component: HelpUsComponent
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
    path: 'donate', component: DonateComponent
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
