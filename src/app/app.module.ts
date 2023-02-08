import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/About/About.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { PressentationComponent } from './Components/Pressentation/Pressentation.component';
import { ProjectsComponent } from './Components/Projects/Projects.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { ProjectComponent } from './Pages/Project/Project.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    NavbarComponent,
    PressentationComponent,
    AboutComponent,
    ProjectComponent,
    ProjectsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
