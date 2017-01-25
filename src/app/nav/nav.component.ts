import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public open: boolean = false;
  public landing: boolean = true;

  @Output() onclick: EventEmitter<number> = new EventEmitter();

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
    this.open = false;
  }
  public minimise(){
    this.landing = false;
  }
  public autoOpen() {
    this.landing = true;
    setTimeout(() => {
      this.open = true;
    }, 840);
  }

  navTo(i: number, event) {
    if (!this.open) return false;
    event.preventDefault();
    event.stopPropagation();
    console.log(i);
    console.log(event);
    this.onclick.emit(i);
  }
}
