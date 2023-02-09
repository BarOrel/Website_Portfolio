import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
NaviToHome() {
    this.router.navigate([''], { fragment: "Home" });
}

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
