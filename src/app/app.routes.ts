import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Feature1Component} from './feature1/feature1.component';


export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'Schedule View', component:Feature1Component},
];
