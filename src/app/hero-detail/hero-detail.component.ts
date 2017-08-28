import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details !</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // declare that hero is an input property
  // by preceding it with the @Input decorator
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }
}
