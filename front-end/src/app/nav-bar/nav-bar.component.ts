import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  toggleNavbar(): void {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
