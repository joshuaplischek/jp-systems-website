import { Component } from '@angular/core';
import { MobileService } from '../../services/moble.service';
import { NgClass } from '@angular/common';
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [NgClass, MobileMenuComponent],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  isMobile: boolean | undefined = this.mobileNav.isMobile;

  constructor(public mobileNav: MobileService){}

  openMobileMenu() {
    this.mobileNav.toggleMobileNavMenu();
  }
}
