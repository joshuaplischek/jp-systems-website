import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MobileService } from '../services/moble.service';
import { MobileNavComponent } from "./mobile-nav/mobile-nav.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    LeistungenComponent,
    AboutComponent,
    TestimonialsComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    MobileNavComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobile: boolean | undefined;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.onWindowResize();
  }

  constructor(public mobile: MobileService) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth <= 700) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
