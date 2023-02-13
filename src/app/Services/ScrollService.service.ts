import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ScrollService {
  constructor(private router: Router) {}
  
  scrollToProjects() {
    const element = this.__getElementById("Projects");
    this.scrollToElement(element);
  }
  scrollToHome() {
    const element = this.__getElementById("Top");
    this.scrollToElement(element);
  }
  scrollToAbout() {
    const element = this.__getElementById("About");
    this.scrollToElement(element);
  }
  scrollToContact() {
    const element = this.__getElementById("Contact");
    this.scrollToElement(element);
  }

  scrollToTop() {
    const element = this.__getElementById("ProjectPage");
    this.scrollToElement(element);
  }




  private __getElementById(id: string): HTMLElement {
    console.log("element id : ", id);
    // const element = <HTMLElement>document.querySelector(`#${id}`);
    const element = document.getElementById(id);
    return element!;
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
