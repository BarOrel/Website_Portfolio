import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/Services/ScrollService.service';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

}
