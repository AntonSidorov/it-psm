import { Component, HostListener, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {


  @ViewChild('landing') landing;
  @ViewChild('analysis') analysis;
  @ViewChild('design') design;
  @ViewChild('development') development;
  @ViewChild('evaluation') evaluation;
  @ViewChild(NavComponent) nav;
  constructor(private titleService: Title) {
    // This works!
    //this.titleService.setTitle('Test Dynamic title');
  }
  title = 'app works!';

  ngAfterViewInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    //Now all we have to do is just check which element is focused the most out of those
    console.log(this.landing.nativeElement.getBoundingClientRect());
    var landingRect = this.landing.nativeElement.getBoundingClientRect();
    if (landingRect.top < 0)
      this.nav.close();
    else
      this.nav.autoOpen();
      
  }
}
