import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { LeistungenComponent } from "./leistungen/leistungen.component";
import { AboutComponent } from "./about/about.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, LeistungenComponent, AboutComponent, TestimonialsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
