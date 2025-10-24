import { Component, EventEmitter, Output } from '@angular/core';
import { MobileService } from '../../services/moble.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  @Output() menuClosed = new EventEmitter<void>();

  constructor(public mobile: MobileService) {}

  closeMobileMenu() {
    this.menuClosed.emit();
    this.mobile.closeMenu();
  }
}
