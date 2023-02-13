import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/About/About.component';
import { ContactComponent } from './Components/Contact/Contact.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { PressentationComponent } from './Components/Pressentation/Pressentation.component';
import { Project_1Component } from './Components/Projects-Page/Project-1/Project-1.component';
import { Project_2Component } from './Components/Projects-Page/Project-2/Project-2.component';
import { Project_3Component } from './Components/Projects-Page/Project-3/Project-3.component';
import { ProjectsComponent } from './Components/Projects/Projects.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { ProjectComponent } from './Pages/Project/Project.component';
import { ScrollService } from './Services/ScrollService.service';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    NavbarComponent,
    PressentationComponent,
    AboutComponent,
    ProjectComponent,
    ProjectsComponent,
    FooterComponent,
    Project_1Component,
    Project_2Component,
    Project_3Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
