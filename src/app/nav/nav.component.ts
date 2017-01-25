import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public open: boolean = false;
  public landing: boolean = true;
  constructor() {
    this.autoOpen();
  }

  ngOnInit() {
  }

  public toggleLanding() {
    if (!this.open) return;
    this.landing = false;
  }
  public toggleOpen() {
    this.open = !this.open;
  }
  public close() {
    this.landing = false;
    this.open = false;
  }
  public autoOpen() {
    this.landing = true;
    setTimeout(() => {
      this.open = true;
    }, 840);
  }
}
