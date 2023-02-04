import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { PressentationComponent } from './Components/Pressentation/Pressentation.component';
import { HomeComponent } from './Pages/Home/Home.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    NavbarComponent,
    PressentationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
