import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/Services/ScrollService.service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
mobile:any;
IsMenuOpen:boolean = false;
public currentWindowWidth: number = 0;

OpenMenu(){
  if(!this.IsMenuOpen){
  document.getElementById(`dropdown-content`)!.style.display='block';
    this.IsMenuOpen = true}
  
    else {
    document.getElementById(`dropdown-content`)!.style.display='none';
    this.IsMenuOpen = false
  }
}

  async NaviToHome() {
  await this.router.navigate(['']);
  this.Scroll.scrollToHome();
  if(this.currentWindowWidth < 750){
  document.getElementById(`dropdown-content`)!.style.display='none';}
  
}
  async NaviToProjects() {
    await this.router.navigate(['']);
    this.Scroll.scrollToProjects();
    if(this.currentWindowWidth < 750){
    document.getElementById(`dropdown-content`)!.style.display='none';}
}
  async NaviToAbout() {
    await this.router.navigate(['']);
    this.Scroll.scrollToAbout();
    if(this.currentWindowWidth < 750){
    document.getElementById(`dropdown-content`)!.style.display='none';}
}

  constructor(private Scroll:ScrollService,private router:Router) { }
  
 
  ngOnInit() {
    this.currentWindowWidth = window.innerWidth
  }

  @HostListener('window:resize')
  onResize() {
  this.currentWindowWidth = window.innerWidth
}

}

