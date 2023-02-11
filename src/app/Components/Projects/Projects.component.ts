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
  
  
  async NavigateToProject1() {
    await this.router.navigate(['/Project/ChatApplication'])
    this.scroll.scrollToTop()
}
  async NavigateToProject2() {
    await this.router.navigate(['/Project/1'])
    this.scroll.scrollToTop()
}
  async NavigateToProject3() {
    await this.router.navigate(['/Project/2'])
    this.scroll.scrollToTop()
}

  
 

  ngOnInit() {
  }

}
