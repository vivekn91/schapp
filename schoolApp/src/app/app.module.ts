import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { MainComponent } from './partials/main/main.component';
import { HomeComponent } from './partials/home/home.component';
import { AboutComponent } from './partials/about/about.component';
import { ContactComponent } from './partials/contact/contact.component';
import { AcademicsComponent } from './partials/academics/academics.component';


const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'about', component: AboutComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AcademicsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
