import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  hero = 'Windstorm';
}
