import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-activities',
  template: `
    <h2>Activities</h2>

    <ul>
      <li (click)="selectActivity(1)" style="cursor:pointer;">Activity 1</li>
      <li (click)="selectActivity(2)" style="cursor:pointer;">Activity 2</li>
      <li (click)="selectActivity(3)" style="cursor:pointer;">Activity 3</li>
    </ul>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class ActivitiesComponent {

  constructor(private router: Router) {}

  selectActivity(id) {
    this.router.navigate(['/activities', id]);
  }

}
