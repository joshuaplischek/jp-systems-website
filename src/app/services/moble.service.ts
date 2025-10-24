import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  isOpen: boolean = false;
  public getScreenWidth: any;
  public getScreenHeight: any;
  isMobile: boolean | undefined;

  constructor() {}

  MenuIsOpen(event: any) {
    if (event.target.checked) {
      this.isOpen = true;
      console.log(this.isOpen);
    }
    if (!event.target.checked) {
      this.isOpen = false;
      console.log(this.isOpen);
    }
  }

  toggleMobileNavMenu() {
    if (!this.isOpen) {
      this.isOpen = true;
      console.log(this.isOpen);
      return
    }
    if (this.isOpen) {
      this.isOpen = false;
      console.log(this.isOpen);
      return
    }
  }

  closeMenu() {
    if (this.isOpen) {
      this.isOpen = false;
      console.log(this.isOpen);
    }
  }
}
