import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsInfoComponent } from './news-info/news-info.component';
import { EventsService } from './shared/events.service';
import { StarsComponent } from './stars/stars.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HealthClinicComponent } from './health-clinic/health-clinic.component';
import { HomelessReachComponent } from './homeless-reach/homeless-reach.component';
import { DonateComponent } from './donate/donate.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    NewsInfoComponent,
    NewsDetailComponent,
    EventSearchComponent,
    StarsComponent,
    NotFoundComponent,
    HealthClinicComponent,
    HomelessReachComponent,
    DonateComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
