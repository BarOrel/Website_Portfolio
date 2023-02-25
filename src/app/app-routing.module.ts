import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/About/About.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { Project_1Component } from './Components/Projects-Page/Project-1/Project-1.component';
import { Project_2Component } from './Components/Projects-Page/Project-2/Project-2.component';
import { Project_3Component } from './Components/Projects-Page/Project-3/Project-3.component';
import { ProjectsComponent } from './Components/Projects/Projects.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { ProjectComponent } from './Pages/Project/Project.component';

const routes: Routes = [
  { path : '' , component: HomeComponent },
  { path : 'Project' , component: ProjectComponent  ,children:[
    { path : 'ChatApplication' , component: Project_1Component },
    { path : 'EcommerceApplication' , component: Project_2Component },
    { path : '3' , component: Project_3Component },
  ] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
