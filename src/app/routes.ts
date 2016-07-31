import { provideRouter, RouterConfig } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activity/activity.component';
import { AnimationComponent } from './animation/animation.component';

const firstRoute = {
    path: 'first',
    component: FirstpageComponent
};

export const routeConfig: RouterConfig = [
    firstRoute,
    {
        path: 'second', 
        component: SecondpageComponent
    },
    {
        path: 'third', 
        component: ThirdpageComponent
    },
    {
        path: 'activities',
        children: [
            {
                path: '',
                component: ActivitiesComponent
            },
            {
                path: ':id',
                component: ActivityComponent
            }
        ]
    },
    {
        path: 'animation',
        component: AnimationComponent,
        outlet: 'animation-outlet'
    },
    {
        path: '**', 
        redirectTo: 'first'
    }
];

export const AppRouterProvider = provideRouter(routeConfig, {enableTracing: true});
