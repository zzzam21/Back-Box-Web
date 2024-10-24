import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LinetimeComponent } from './views/linetime/linetime.component';
import { ConfigurationComponent } from './views/configuration/configuration.component';
import { IntestingComponent } from './views/intesting/intesting.component';
import { FunctionComponent } from './views/function/function.component';
import { CommentsComponent } from './views/comments/comments.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"lineTime",
        component:LinetimeComponent
    },
    {
        path:"configuration",
        component:ConfigurationComponent
    },
    {
        path:"interst",
        component:IntestingComponent
    },
    {
        path:"functions",
        component:FunctionComponent
    },
    {
        path:"comments",
        component:CommentsComponent
    }
];
