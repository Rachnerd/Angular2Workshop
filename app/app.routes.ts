import {Routes} from '@angular/router';
import {HomeComponent} from './+home/home.component';
export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', terminal: true},
    {path: 'home', component: HomeComponent},
];