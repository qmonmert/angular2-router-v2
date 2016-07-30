import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-activity',
  template: `
    Activity : {{activityNumber}}
  `
})
export class ActivityComponent implements OnInit, OnDestroy {

  private sub: any;
  activityNumber: Number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.activityNumber = id;
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
