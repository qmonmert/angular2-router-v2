import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'angular2-router-v2-app',
  template: `
    <h2>Dashboard</h2>

    <ul>
      <li><a [routerLink]="['first']">First page v1</a></li>
      <li><a [routerLink]="['second']">Second page v1</a></li>
      <li><a [routerLink]="['third']">Third page v1</a></li>
      <li><a [routerLink]="['activities']">Activities v1</a></li>
      <li><a routerLink="first">First page v2</a></li>
      <li><a routerLink="second">Second page v2</a></li>
      <li><a routerLink="third">Third page v2</a></li>
      <li><a routerLink="activities">Activities v2</a></li>
    </ul>

    <h4>First router-outlet</h4>

    <router-outlet></router-outlet>

    <h4>Second router-outlet</h4>

    <router-outlet name="animation-outlet"></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class Angular2RouterV2AppComponent {
  
}
