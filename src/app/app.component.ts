import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileService } from './services/moble.service';
import { NavbarComponent } from "./main/navbar/navbar.component";
import { MobileNavComponent } from "./main/mobile-nav/mobile-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MobileNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jp-systems-website';

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
