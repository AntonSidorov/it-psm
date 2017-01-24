import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  open: boolean = false;
  landing: boolean = true;
  constructor() {
    setTimeout(() => {
      this.open = true;
    }, 1260);
  }

  ngOnInit() {
  }

  toggleLanding() {
    if (!this.open) return;
    this.landing = false;    
  }
  toggleOpen() {
    this.open = !this.open;
  }
}
