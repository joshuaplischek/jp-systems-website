import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { LeistungenComponent } from "./leistungen/leistungen.component";
import { AboutComponent } from "./about/about.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { TeamComponent } from "./team/team.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, LeistungenComponent, AboutComponent, TestimonialsComponent, TeamComponent, ContactComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
