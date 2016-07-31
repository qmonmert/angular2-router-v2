import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-animation',
  styles: [
    `
      .box {
        border: 5px solid;
        width: 300px;
        font-size: 45px;
        text-align: center;
        line-height: 75px;
        box-sizing: border-box;
      }
    `
  ],
  template: `
    <div @movementtrigger="stateMovement">Animation</div>

    <button (click)="toggleStateMovement()">Start movement</button>

    <button (click)="toggleStateShow()">Start show/hide</button>

    <div @showmsg="stateShow" class="box">This is a beautiful animation</div>

    <ul>
      <li @todo="stateTodo[0]" (click)="toggleStateTodo(0)">Todo 1</li>
      <li @todo="stateTodo[1]" (click)="toggleStateTodo(1)">Todo 2</li>
      <li @todo="stateTodo[2]" (click)="toggleStateTodo(2)">Todo 3</li>
    </ul>
  `,
  animations: [
    trigger('movementtrigger', [
      state('firstpos', style({transform: 'translateX(0)'})),
      state('secondpos', style({transform: 'translateX(10%)'})),
      transition('firstpos => secondpos', [
        animate('200ms ease-in')
      ]),
      transition('secondpos => firstpos', [
        animate('200ms ease-out')
      ])
    ]),
    trigger('showmsg', [
      state('show', style({opacity: '1', height: '*'})),
      state('hide', style({opacity: '0', height: '0px'})),
      transition('show <=> hide', [
        animate(1000)
      ])
    ]),
    trigger('todo', [
      state('do', style({color: 'red'})),
      state('done', style({color: 'green', textDecoration: 'line-through'})),
      transition('do <=> done', [
        animate(500)
      ])
    ])
  ]
})
export class AnimationComponent {

  stateMovement: string = 'firstpos';
  stateShow: string = 'show';
  stateTodo: string[] = ['do', 'do', 'do'];

  toggleStateMovement() {
    this.stateMovement = (this.stateMovement === 'firstpos') ? 'secondpos' : 'firstpos';
  }

  toggleStateShow() {
    this.stateShow = (this.stateShow === 'show') ? 'hide' : 'show';
  }

  toggleStateTodo(id) {
    this.stateTodo[id] = (this.stateTodo[id] === 'do') ? 'done' : 'do';
  }

}
