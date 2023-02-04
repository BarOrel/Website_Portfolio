import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/Home.component';
import { ProjectComponent } from './Pages/Project/Project.component';

const routes: Routes = [
  { path : '' , component: HomeComponent },
  { path : 'Product' , component: ProjectComponent   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
