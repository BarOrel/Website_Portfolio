import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/Services/ScrollService.service';

@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private router:Router,private scroll:ScrollService) { }
  
  async NavigateToProject(name:string) {
    await this.router.navigate(['/Project/' + name])
    this.scroll.scrollToTop()
}

  
 

  ngOnInit() {
  }

}
