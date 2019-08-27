import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { FooterComponent } from './footer/footer.component';
import { HealthClinicComponent } from './health-clinic/health-clinic.component';
import { HelpUsComponent } from './help-us/help-us.component';
import { HomeComponent } from './home/home.component';
import { HomelessReachComponent } from './homeless-reach/homeless-reach.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsInfoComponent } from './news-info/news-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StarsComponent } from './stars/stars.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
      ],
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
    AboutComponent,
    ContactUsComponent,
    HelpUsComponent
      ],
    }).compileComponents();
  }));

  it('is successfully instantiated', () => {
    const app = new AppComponent();
    expect(app instanceof AppComponent).toEqual(true);
  });
});
