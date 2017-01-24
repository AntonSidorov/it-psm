import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private titleService: Title){
    // This works!
    //this.titleService.setTitle('Test Dynamic title');
  }
  title = 'app works!';
}
