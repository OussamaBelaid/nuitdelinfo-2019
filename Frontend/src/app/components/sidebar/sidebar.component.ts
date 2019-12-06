import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/my-college', title: 'My college', icon: '', class: '' },
  { path: '/accommodations', title: 'Accomodation', icon: '', class: '' },
  { path: '/events', title: 'Events', icon: '', class: '' },
  // { path: '/restaurants', title: 'Restaurants',  icon: '', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkUserRole();
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  checkUserRole() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.type === 'Administrator') {
      this.menuItems.splice(1, 0);
      this.menuItems.push({ path: '/colleges-list', title: 'Colleges list', icon: '', class: '' });
    }
  }
}
