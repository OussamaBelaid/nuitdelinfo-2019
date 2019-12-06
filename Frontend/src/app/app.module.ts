import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MyCollegeComponent } from './pages/my-college/my-college.component';
import { EventsComponent } from './pages/events/events.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CollegesListComponent } from './pages/colleges-list/colleges-list.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    MyCollegeComponent,
    EventsComponent,
    AccommodationComponent,
    MainComponent,
    RestaurantComponent,
    CollegesListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
