import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/Services/ScrollService.service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
mobile:any;

NaviToHome() {
    this.Scroll.scrollToHome();
}
NaviToProjects() {
    this.Scroll.scrollToProjects();
}
NaviToAbout() {
    this.Scroll.scrollToAbout();
}

  constructor(private Scroll:ScrollService) { }

  ngOnInit() {
    if (window.screen.width === 760) { // 768px portrait
      this.mobile = true;
    }
  }

}
