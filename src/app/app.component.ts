import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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

  onLanding = true;
  setup = false;

  navVis = [false, false, false, false];
  pages = ["#analysis", "#design", "#development", "#evaluation"];

  navs = [
    ['Analysis:', 'Solution requirements', 'Solution constraints', 'Scope of solution'],
    ['Design:', 'Solution design', 'Evaluation criteria'],
    ['Development:', 'Manipulation', 'Validation', 'Testing', 'Documentation'],
    ['Evaluation:', 'Strategy', 'Report'],
  ];
  rects = [];

  constructor(private titleService: Title) {
    // This works!
    //this.titleService.setTitle('Test Dynamic title');
    //this.nav.
  }
  title = 'app works!';

  ngAfterViewInit() {
    this.setup = true;
    setTimeout(() => {
      this.updateRects();
    }, 100);
  }

  updateRects() {
    this.rects[0] = this.landing.nativeElement.getBoundingClientRect();
    this.rects[1] = this.analysis.nativeElement.getBoundingClientRect();
    this.rects[2] = this.design.nativeElement.getBoundingClientRect();
    this.rects[3] = this.development.nativeElement.getBoundingClientRect();
    this.rects[4] = this.evaluation.nativeElement.getBoundingClientRect();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    //Now all we have to do is just check which element is focused the most out of those
    this.updateRects();
    if (this.rects[0].top < 0) {
      this.nav.minimise();
      this.nav.close();
      if (this.onLanding) {
        this.onLanding = false;
      }
    }
    else {
      this.nav.autoOpen();
      this.onLanding = true;
    }

    console.log(this.rects);

    this.navVis[0] = this.rects[1].top <= 0 && this.rects[1].bottom >= 0;
    this.navVis[1] = this.rects[2].top <= 0 && this.rects[2].bottom >= 0;
    this.navVis[2] = this.rects[3].top <= 0 && this.rects[3].bottom >= 0;
    this.navVis[3] = this.rects[4].top <= 0 && this.rects[4].bottom >= 0;
  }

  onnav(event) {
    this.jump(this.rects[event + 1].top);
    //this.scrollTo(this.pages[event + 1]);
  }

  jump(target) {
    // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
    function easing(t, b, c, d) {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }
    var
      start = window.pageYOffset,
      duration = 400,
      timeStart, timeElapsed;

    requestAnimationFrame(function (time) {
      timeStart = time;
      loop(time);
    });

    function loop(time) {
      timeElapsed = time - timeStart;
      window.scrollTo(0, easing(timeElapsed, start, target, duration));
      if (timeElapsed < duration)
        requestAnimationFrame(loop)
      else
        end();
    }
    function end() {
      window.scrollTo(0, start + target);
    }
  }
}