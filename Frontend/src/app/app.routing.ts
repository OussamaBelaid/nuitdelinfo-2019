import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { MyCollegeComponent } from './pages/my-college/my-college.component';
import { EventsComponent } from './pages/events/events.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CollegesListComponent } from './pages/colleges-list/colleges-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'my-college',
        component: MyCollegeComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'restaurants',
        component: RestaurantComponent,
      }, {
        path: 'accommodations',
        component: AccommodationComponent,
      },
      {
        path: 'colleges-list',
        component: CollegesListComponent,
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
