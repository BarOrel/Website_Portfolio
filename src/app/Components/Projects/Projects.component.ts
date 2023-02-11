import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/Services/ScrollService.service';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.css']
})
export class ProjectsComponent implements OnInit {
NavigateToProject1() {
this.router.navigate(['/Project/ChatApplication'])

}

  constructor(private router:Router) { }
  
 

  ngOnInit() {
  }

}
