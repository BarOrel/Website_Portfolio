import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/Services/ScrollService.service';

@Component({
  selector: 'app-Pressentation',
  templateUrl: './Pressentation.component.html',
  styleUrls: ['./Pressentation.component.css']
})
export class PressentationComponent implements OnInit {

  constructor(private scroll:ScrollService) { }
  Scroll(){
    this.scroll.scrollToProjects()
  }
  ngOnInit() {
  }



}
